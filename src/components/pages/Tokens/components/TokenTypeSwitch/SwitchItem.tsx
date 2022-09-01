import { FC, MouseEventHandler, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../base';

export interface SwitchItemProps {
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLElement>;
  active: boolean;
}

export const SwitchItem: FC<SwitchItemProps> = (props) => {
  const { children, onClick, active } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        background: active ? theme.colors.white : theme.colors.transparent,
        transition: theme.transitions.allEaseOut,
        ...theme.text.medium200,
        color: theme.colors.test500,
        paddingTop: 6,
        paddingBottom: 6,
        flex: 1,
        borderRadius: theme.borderRadius.m,
        textAlign: 'center',
        cursor: 'pointer',
        ':hover': {
          background: theme.colors.test100,
        },
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};
