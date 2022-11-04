import { FC, Fragment, ReactNode, useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { useHover } from '../../../../../hooks';
import { ActionSheet, Box, ChevronDownIcon, Img } from '../../../../base';
import { useSelectState } from '../../hooks/useSelectState';
import { ChainSearchPanel } from '../ChainSearchPanel';

export interface SelectMoreChainsButtonProps {
  children?: ReactNode;
}

export const SelectMoreChainsButton: FC<SelectMoreChainsButtonProps> = (
  props,
) => {
  const { children } = props;
  const theme = useTheme();
  const { hoverProps, isHovered } = useHover();
  const {
    tokenImplsDataArray,
    currentActiveChain,
    needShowChainAtSwitch,
    setCurrentActiveChain,
  } = useSelectState();
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    setIsClick(false);
  }, [currentActiveChain]);

  return (
    <Fragment key="SelectMoreChainsButton">
      <Box
        {...hoverProps}
        onClick={() => setIsClick(true)}
        xs={{
          background: needShowChainAtSwitch
            ? theme.colors.white
            : theme.colors.test200,
          transition: theme.transitions.allEaseOut,
          ...theme.text.medium200,
          color: theme.colors.test500,
          paddingTop: 8,
          paddingBottom: 8,
          borderRadius: theme.borderRadius.l,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          cursor: 'pointer',
          position: 'relative',
          ':hover': {
            background: theme.colors.white,
          },
        }}
      >
        {!needShowChainAtSwitch && <Box>{tokenImplsDataArray[1].length}+</Box>}

        {needShowChainAtSwitch && (
          <Img
            xs={{ width: 24, height: 24, borderRadius: 12 }}
            src={currentActiveChain?.icon}
          />
        )}

        {needShowChainAtSwitch && (
          <Box xs={{ paddingLeft: 4 }}>{currentActiveChain?.name}</Box>
        )}

        <ChevronDownIcon width={16} height={16} />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              style={{
                position: 'absolute',
                right: 0,
                top: '120%',
                width: 240,
                borderRadius: theme.borderRadius.xl,
                overflow: 'hidden',
                boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.08)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ChainSearchPanel
                chains={tokenImplsDataArray[1]}
                value={currentActiveChain}
                onChange={(newValue) => setCurrentActiveChain(newValue)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {children}
      </Box>

      {isClick && (
        <ActionSheet onCancel={() => setIsClick(false)}>
          <ChainSearchPanel
            chains={tokenImplsDataArray[1]}
            value={currentActiveChain}
            onChange={(newValue) => setCurrentActiveChain(newValue)}
          />
        </ActionSheet>
      )}
    </Fragment>
  );
};
