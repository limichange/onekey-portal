import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

import { Box, Container, VideoPlayer, VideoStatus } from '../../../../base';

import { ScrollStoryItem } from './useScrollStory';

export interface MobileScrollStoryItemProps extends ScrollStoryItem {
  children?: ReactNode;
}

export const MobileScrollStoryItem: FC<MobileScrollStoryItemProps> = (
  props,
) => {
  const { video, title, content, button, children } = props;
  const theme = useTheme();
  const [videoState, setVideoState] = useState<VideoStatus>('ready');

  return (
    <Box>
      <Box xs={{ background: theme.colors.test100 }}>
        <VideoPlayer
          loop={false}
          autoPlay={false}
          status={videoState}
          src={video}
        />

        <Container>
          <motion.div
            onViewportEnter={() => {
              setVideoState('play');
            }}
          />

          <Box
            xs={{ paddingTop: 40, paddingBottom: 40, gap: 24, display: 'grid' }}
          >
            <Box
              xs={{
                color: theme.colors.test500,
                ...theme.text.medium700,
              }}
            >
              {title}
            </Box>

            <Box xs={theme.text.normal400}>{content}</Box>

            {button && <Box>{button}</Box>}
          </Box>
        </Container>
      </Box>

      {children}
    </Box>
  );
};
