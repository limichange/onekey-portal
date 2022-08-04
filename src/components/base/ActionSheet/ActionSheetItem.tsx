import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../Box';

export interface ActionSheetItemProps {
  children?: ReactNode;
}

export const ActionSheetItem: FC<ActionSheetItemProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        ...theme.text.medium500,
        color: theme.colors.test500,
        textAlign: 'center',
        padding: 12,
        borderRadius: 8,
        transition: theme.transitions.allEaseInOut,
        ':hover': {
          background: theme.colors.test100,
        },
      }}
    >
      {children}
    </Box>
  );
};
