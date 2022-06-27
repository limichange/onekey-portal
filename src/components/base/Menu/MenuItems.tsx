import { FC, ReactNode, RefObject, useRef } from 'react';

import { useTheme } from '@emotion/react';

import { useOnClickOutside } from '../../../hooks';
import { useHover } from '../../../hooks/useHover';
import { Box } from '../Box';
import { Flex } from '../Flex';

export interface MenuItemsProps {
  children?: ReactNode;
  isActive?: boolean;
  onClickOutside?: () => void;
}

export const MenuItems: FC<MenuItemsProps> = (props) => {
  const { children, isActive = false, onClickOutside } = props;
  const { hoverProps, isHovered } = useHover({
    timeout: 50,
  });
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside([ref as RefObject<Element>], () => {
    onClickOutside?.();
  });

  return (
    <Box
      {...hoverProps}
      xs={{
        marginTop: 12,
        display: isActive || isHovered ? 'block' : 'none',
        transition: theme.transitions.allEaseOut,
        padding: 6,
        borderRadius: 12,
        boxShadow: theme.shadow.hover,
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        backgroundColor: theme.colors.white,
        zIndex: 10,
      }}
    >
      <div ref={ref}>
        <Flex
          xs={{
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {children}
        </Flex>
      </div>
    </Box>
  );
};