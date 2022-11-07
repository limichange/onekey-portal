import { FC, ReactNode, useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

import { useHover } from '../../../../hooks';
import { Divider } from '../../../base';
import { Box } from '../../../base/Box';
import { Container } from '../../../base/Container';
import { useCurrentActiveMenuItem } from '../NormalNavigation/atom';
import { PanelComponentProps } from '../NormalNavigation/NavigationItem';

import { ProductPanelItem } from './ProductPanelItem';
import { useProductPanel } from './useProductPanel';

export interface ProductPanelProps extends PanelComponentProps {
  children?: ReactNode;
}

const container = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
  visible: {
    height: 'fit-content',
    opacity: 1,
    transition: {
      duration: 0.15,
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

export const ProductPanel: FC<ProductPanelProps> = (props) => {
  const { children, isActive } = props;
  const [currentActiveMenuItem, setCurrentActiveMenuItem] =
    useCurrentActiveMenuItem();
  const [cursorVariant, setCursorVariant] = useState('hidden');
  const { hoverProps, isHovered } = useHover({
    onHoverEnd: () => setCurrentActiveMenuItem(''),
  });
  const theme = useTheme();
  const { object } = useProductPanel();

  useEffect(() => {
    if (currentActiveMenuItem === 'products' || isHovered || isActive) {
      setCursorVariant('visible');
    } else {
      setCursorVariant('hidden');
    }
  }, [currentActiveMenuItem, isHovered, isActive]);

  return (
    <motion.div
      initial="hidden"
      variants={container}
      animate={cursorVariant}
      style={{
        background: theme.colors.test100,
        width: '100%',
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      <Box {...hoverProps}>
        <Container>
          <Box
            xs={{
              display: 'flex',
              gap: 40,
              alignItems: 'center',
              paddingTop: 32,
              paddingBottom: 48,
            }}
          >
            {[
              object.mini,
              object.classic,
              object.touch,
              object.lite,
              object.keyTag,
            ].map((item) => (
              <ProductPanelItem {...item} />
            ))}

            <Box xs={{ height: 96 }}>
              <Divider color={theme.colors.test200} direction="v" />
            </Box>

            <ProductPanelItem {...object.shopMenu} />
          </Box>
          {children}
        </Container>
      </Box>
    </motion.div>
  );
};
