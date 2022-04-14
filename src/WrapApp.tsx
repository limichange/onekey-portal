import React, { FC } from 'react';

import { ThemeProvider } from '@emotion/react';

import { theme } from './theme';

type WrapAppComponent = FC<{
  children: React.ReactNode;
}>;

const WrapApp: WrapAppComponent = (props) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default WrapApp;
