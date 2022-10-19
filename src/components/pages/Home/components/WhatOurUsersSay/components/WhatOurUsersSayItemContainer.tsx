import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, BoxProps } from '../../../../../base';

export interface WhatOurUsersSayItemContainerProps extends BoxProps {
  children?: ReactNode;
}

export const WhatOurUsersSayItemContainer: FC<
  WhatOurUsersSayItemContainerProps
> = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        height: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.test250,
        padding: 24,
        borderRadius: theme.borderRadius.xxxl,
        transition: theme.transitions.allEase,
        backgroundColor: theme.colors.white,
      }}
      l={{
        padding: 40,
      }}
      externalProps={otherProps}
    >
      {children}
    </Box>
  );
};
