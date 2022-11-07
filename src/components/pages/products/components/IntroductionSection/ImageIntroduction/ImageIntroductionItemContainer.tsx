import { FC, ReactNode } from 'react';

import { Box } from '../../../../../base';

export interface ImageIntroductionItemContainerProps {
  children?: ReactNode;
}

export const ImageIntroductionItemContainer: FC<
  ImageIntroductionItemContainerProps
> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        borderRadius: 40,
        overflow: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      {children}
    </Box>
  );
};
