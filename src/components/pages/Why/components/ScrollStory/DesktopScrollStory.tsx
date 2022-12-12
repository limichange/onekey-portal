import { FC, ReactNode, useRef, useState } from 'react';

import { useTheme } from '@emotion/react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Box, VideoPlayer } from '../../../../base';

import { useScrollStory } from './useScrollStory';

export interface DesktopScrollStoryProps {
  children?: ReactNode;
}

export const DesktopScrollStory: FC<DesktopScrollStoryProps> = (props) => {
  const { children } = props;
  const [scrollValue, setScrollValue] = useState(0);
  const data = useScrollStory();
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useTransform(scrollYProgress, (value) => {
    if (value !== scrollValue) {
      setScrollValue(value);
    }
  });

  const videoIndex = Number((scrollValue * 4).toFixed(0));

  return (
    <div ref={containerRef}>
      <Box
        xs={{
          display: 'flex',
          position: 'relative',
          background: theme.colors.test100,
        }}
      >
        <Box xs={{ width: '50%' }}>
          {data.map((item) => (
            <Box
              key={item.title}
              xs={{
                display: 'flex',
                alignItems: 'center',
                height: '100vh',
              }}
            >
              <Box
                xs={{
                  paddingLeft: 80,
                  paddingRight: 120,
                  display: 'grid',
                  gap: 30,
                }}
              >
                <Box
                  xs={{
                    color: theme.colors.test500,
                  }}
                  m={theme.text.medium800}
                  xl={theme.text.medium900}
                  xxl={theme.text.medium1000}
                >
                  {item.title}
                </Box>

                <Box m={theme.text.normal400} l={theme.text.normal500}>
                  {item.content}
                </Box>

                {item.button && <Box>{item.button}</Box>}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          xs={{
            position: 'sticky',
            top: 0,
            right: 0,
            background: theme.colors.test200,
            height: '100vh',
            width: '50%',
            overflow: 'hidden',
            marginLeft: 'auto',
            ...theme.text.medium800,
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={item.title}
              animate={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                opacity: videoIndex === index ? 1 : 0,
              }}
            >
              <VideoPlayer
                style={{ width: '100%', height: '100%' }}
                loop={false}
                autoPlay={false}
                status={
                  (videoIndex === index && scrollValue) > 0 ? 'play' : 'ready'
                }
                src={item.video}
              />
            </motion.div>
          ))}
        </Box>

        {children}
      </Box>
    </div>
  );
};
