import { FC, MouseEventHandler, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { Box, CheckIcon, Img } from '../../../../base';

export interface SwitchItemProps {
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLElement>;
  active: boolean;
  icon: string;
}

export const SwitchItem: FC<SwitchItemProps> = (props) => {
  const { children, onClick, active, icon } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        background: active ? theme.colors.test100 : theme.colors.white,
        transition: theme.transitions.allEaseOut,
        ...theme.text.medium200,
        color: theme.colors.test500,
        padding: 8,
        borderRadius: theme.borderRadius.l,
        alignItems: 'center',
        display: 'flex',
        cursor: 'pointer',
        ':hover': {
          background: theme.colors.test100,
        },
      }}
      onClick={onClick}
    >
      <Img xs={{ width: 24, height: 24, borderRadius: 12 }} src={icon} />

      <Box xs={{ paddingLeft: 4, flex: 1 }}>{children}</Box>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CheckIcon width={24} height={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
