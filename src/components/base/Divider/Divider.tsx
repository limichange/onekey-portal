import { CSSProperties, FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../Box';

export interface DividerProps {
  children?: ReactNode;
  color?: string;
  direction?: 'h' | 'v';
  xs?: CSSProperties;
}

export const Divider: FC<DividerProps> = (props) => {
  const { xs = {}, color, children, direction = 'h' } = props;
  const theme = useTheme();

  const style =
    direction === 'h'
      ? {
          height: 1,
          width: '100%',
        }
      : {
          width: 1,
          height: '100%',
        };

  return (
    <Box
      xs={{
        backgroundColor: color || theme.colors.test500,
        ...style,
        ...xs,
      }}
    >
      {children}
    </Box>
  );
};
