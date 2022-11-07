import { FC, ReactNode } from 'react';

import { Box } from '../../../../../base';

export interface TextContainerProps {
  children?: ReactNode;
}

export const TextContainer: FC<TextContainerProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        padding: 36,
        display: 'grid',
        gridGap: 8,
      }}
    >
      {children}
    </Box>
  );
};
