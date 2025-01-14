import { FC, MouseEventHandler, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Img } from '../../../../base';

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
        background: active ? theme.colors.white : theme.colors.test200,
        transition: theme.transitions.allEaseOut,
        ...theme.text.medium200,
        color: theme.colors.test500,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: theme.borderRadius.l,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        cursor: 'pointer',
        ':hover': {
          background: theme.colors.white,
        },
      }}
      onClick={onClick}
    >
      <Img xs={{ width: 24, height: 24, borderRadius: 12 }} src={icon} />

      <Box xs={{ paddingLeft: 4 }}>{children}</Box>
    </Box>
  );
};
