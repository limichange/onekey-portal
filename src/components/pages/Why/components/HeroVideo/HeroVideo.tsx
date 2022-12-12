import { FC, ReactNode } from 'react';

import { isBrowser } from '../../../../../utils';
import { Box, VideoPlayer } from '../../../../base';

export interface HeroVideoProps {
  children?: ReactNode;
}

export const HeroVideo: FC<HeroVideoProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        width: '100%',
        background: '#F0F1F2',
        height: '38.2vh',
      }}
    >
      {isBrowser() && (
        <VideoPlayer
          style={{
            height: '100%',
            width: '100%',
          }}
          src="/why-video/why-hero.mp4"
        />
      )}

      {children}
    </Box>
  );
};
