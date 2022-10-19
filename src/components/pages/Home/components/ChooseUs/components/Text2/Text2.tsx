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
import { OneKeyLogo } from '../OneKeyLogo';
import { useStatusUpdate } from '../TextContainer/useStatusUpdate';

const components = {
  BlackHighlight,
  BrandHighlight,
  RedHighlight,
  EmojiExplodingHead,
  EmojiFaceWithSpiralEyes,
  EmojiThumbsUp,
  OneKeyLogo,
};

export const Text2: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['center 70vh', 'center end'],
  });
  const media = useMediaQuery();
  const opacity = useTransform(scrollYProgress, (value) =>
    media.medium ? 1 - value : 1,
  );

  const filter = useTransform(scrollYProgress, (value) =>
    media.medium ? `blur(${value * 30}px)` : `blur(0)`,
  );

  const { status } = useStatusUpdate(containerRef);

  return (
    <motion.div style={{ filter, opacity }} ref={containerRef}>
      <Box xs={{ color: theme.colors.test500 }}>
        <TextContainer status={status} id="textContainer2">
          <DynamicContent
            jsx={t('content__choose_us_2')}
            components={components}
          />
        </TextContainer>
      </Box>
    </motion.div>
  );
};
