import { FC, ReactNode } from 'react';

import { Box, OnlyDisplay } from '../../../../base';

import { ImageIntroductionContentDesktop } from './ImageIntroductionContentDesktop';
import { ImageIntroductionContentMobile } from './ImageIntroductionContentMobile';

export interface ImageIntroductionContentProps {
  children?: ReactNode;
}

export const ImageIntroductionContent: FC<ImageIntroductionContentProps> = (
  props,
) => {
  const { children } = props;

  return (
    <Box>
      <OnlyDisplay xs s>
        <ImageIntroductionContentMobile />
      </OnlyDisplay>

      <OnlyDisplay m l xl xxl>
        <ImageIntroductionContentDesktop />
      </OnlyDisplay>

      {children}
    </Box>
  );
};
