import { FC, ReactNode } from 'react';

import { Box } from '../../../../../base';

export interface IntroductionTextPositionProps {
  children?: ReactNode;
}

export const IntroductionTextPosition: FC<IntroductionTextPositionProps> = (
  props,
) => {
  const { children } = props;

  return (
    <Box
      xs={{
        position: 'absolute',
        padding: 12,
        left: 24,
        right: 24,
        bottom: 24,
        display: 'grid',
        gridGap: 8,
      }}
      m={{
        gridGap: 20,
        left: '3vw',
        bottom: '3vw',
      }}
    >
      {children}
    </Box>
  );
};
