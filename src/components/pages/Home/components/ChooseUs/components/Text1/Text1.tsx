import { FC, useRef } from 'react';

import { useTheme } from '@emotion/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  EmojiExplodingHead,
  EmojiFaceWithSpiralEyes,
  EmojiThumbsUp,
  TextContainer,
} from '..';
import { useMediaQuery } from '../../../../../../../hooks';
import { Box, DynamicContent } from '../../../../../../base';
import {
  BlackHighlight,
  BrandHighlight,
  RedHighlight,
} from '../../../../../../common';
import { useStatusUpdate } from '../TextContainer/useStatusUpdate';

const components = {
  BlackHighlight,
  BrandHighlight,
  RedHighlight,
  EmojiExplodingHead,
  EmojiFaceWithSpiralEyes,
  EmojiThumbsUp,
};

export const Text1: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const media = useMediaQuery();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['center center', 'center start'],
  });

  const opacity = useTransform(scrollYProgress, (value) =>
    media.medium ? 1 - value : 1,
  );

  const filter = useTransform(scrollYProgress, (value) =>
    media.medium ? `blur(${value * 30}px)` : `blur(0)`,
  );

  const { status } = useStatusUpdate(containerRef, 0.1);

  return (
    <div ref={containerRef}>
      <Box
        xs={{ color: theme.colors.test250 }}
        m={{ height: '60vh', marginBottom: '30vh' }}
      >
        <motion.div
          style={{
            position: 'sticky',
            filter,
            opacity,
            top: '35vh',
          }}
        >
          <TextContainer status={status} id="textContainer1">
            <DynamicContent
              jsx={t('content__choose_us_1')}
              components={components}
            />
          </TextContainer>
        </motion.div>
      </Box>
    </div>
  );
};
