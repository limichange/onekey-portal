import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../../base';

export interface StoryContainerProps {
  children?: ReactNode;
}

export const StoryContainer: FC<StoryContainerProps> = (props) => {
  const { children } = props;

  const theme = useTheme();

  return (
    <Box
      xs={{
        color: theme.colors.test500,
        ...theme.text.normal400,
      }}
      l={theme.text.normal500}
      xl={theme.text.normal600}
    >
      {children}
    </Box>
  );
};
