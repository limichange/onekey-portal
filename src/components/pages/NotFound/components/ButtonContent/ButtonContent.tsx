import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Button, I18n, Link } from '../../../../base';

export interface ButtonContentProps {
  children?: ReactNode;
}

export const ButtonContent: FC<ButtonContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        color: theme.colors.test500,
        top: '50vh',
        position: 'absolute',
        zIndex: 1,
        textAlign: 'center',
        left: 0,
        right: 0,
      }}
    >
      <Box
        xs={{
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'center',
        }}
        m={{
          paddingTop: 50,
        }}
      >
        <Link to="/">
          <Button variant="outlined">
            <I18n name="content__take_me_back_home" />
          </Button>
        </Link>
      </Box>

      {children}
    </Box>
  );
};
