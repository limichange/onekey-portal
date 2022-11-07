import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../../base';

export interface IntroductionTextTitleProps {
  children?: ReactNode;
}

export const IntroductionTextTitle: FC<IntroductionTextTitleProps> = (
  props,
) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        ...theme.text.medium700,
        maxWidth: 600,
      }}
      m={theme.text.medium800}
      l={theme.text.medium900}
      xl={{
        ...theme.text.medium1000,
      }}
      xxl={{
        ...theme.text.medium1200,
        maxWidth: 1000,
      }}
    >
      {children}
    </Box>
  );
};
