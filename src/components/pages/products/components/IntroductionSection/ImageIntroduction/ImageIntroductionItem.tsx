import { FC, Fragment, ReactNode, useRef, useState } from 'react';

import { useScroll, useTransform } from 'framer-motion';

import {
  Box,
  Img,
  OnlyDisplay,
  VideoPlayer,
  VideoStatus,
} from '../../../../../base';
import { PlayerContainer } from '../../FullscreenScrollAnimation/PlayerContainer';
import { IntroductionText } from '../IntroductionText';

export interface ImageIntroductionItemProps {
  children?: ReactNode;
  name: string | string[];
  description: string;
  video?: string;
  videoPoster?: string;
  type?: 'video' | 'frames' | 'image';
  videoLoop?: boolean;
  videoAutoPlay?: boolean;
  images?: {
    s?: ReactNode;
    m?: ReactNode;
    l?: ReactNode;
    xl?: ReactNode;
  };
  frames?: string[];
}

export const ImageIntroductionItem: FC<ImageIntroductionItemProps> = (
  props,
) => {
  const {
    type = 'image',
    videoLoop = true,
    videoAutoPlay = true,
    children,
    video,
    description,
    images,
    videoPoster,
    name,
    frames,
  } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const [videoStatus, setVideoStatus] = useState<VideoStatus>('ready');

  useTransform(scrollYProgress, (value) => {
    if (
      value > 0.2 &&
      value < 0.9 &&
      videoStatus === 'ready' &&
      type === 'video'
    ) {
      setVideoStatus('play');
    }
  });

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <Box
        xs={{
          borderRadius: 40,
          overflow: 'hidden',
          transform: 'translateZ(0)',
        }}
      >
        {type === 'frames' && frames && (
          <Box>
            <PlayerContainer
              backgroundColor="#FFFFFF"
              items={[
                {
                  name,
                  description,
                  frames,
                },
              ]}
              elementInViewportProgress={scrollYProgress}
            />
          </Box>
        )}

        {type === 'video' && video && (
          <Fragment key={description}>
            {images && <OnlyDisplay xs>{images.s}</OnlyDisplay>}

            <OnlyDisplay s m l xl xxl>
              <Img
                xs={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  position: 'absolute',
                  zIndex: 1,
                }}
                src={videoPoster}
              />

              <VideoPlayer
                style={{
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'block',
                  zIndex: 2,
                }}
                status={videoStatus}
                autoPlay={videoAutoPlay}
                loop={videoLoop}
                src={video}
              />
            </OnlyDisplay>
          </Fragment>
        )}

        {type === 'image' && images && (
          <Fragment key={description}>
            <OnlyDisplay xs>{images.s}</OnlyDisplay>
            <OnlyDisplay s>{images.m}</OnlyDisplay>
            <OnlyDisplay m l>
              {images.l}
            </OnlyDisplay>
            <OnlyDisplay xl xxl>
              {images.xl}
            </OnlyDisplay>
          </Fragment>
        )}
      </Box>
      <Box
        xs={{
          position: 'absolute',
          padding: 12,
          left: 24,
          bottom: 24,
        }}
        m={{
          left: '3vw',
          bottom: '3vw',
        }}
      >
        <IntroductionText name={name} description={description} />
      </Box>

      {children}
    </div>
  );
};
