import { FC, useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { useMediaQuery, useRuntimeDetect } from '../../../../../hooks';
import { Box, Container } from '../../../../base';

import { LogoItem } from './LogoItem';
import { LogoWallTitle } from './LogoWallTitle';
import { useLogoWallData } from './useLogoWallData';

export const LogoWall: FC = () => {
  const logos = useLogoWallData();
  const media = useMediaQuery();
  const { isSafari } = useRuntimeDetect();

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['center 70vh', 'center end'],
  });
  const transform = useTransform(scrollYProgress, (value) =>
    media.medium ? `rotate(${value * 25}deg)` : '',
  );
  const opacity = useTransform(scrollYProgress, (value) =>
    media.medium ? 1 - value : 1,
  );
  const filter = useTransform(scrollYProgress, (value) =>
    isSafari || !media.medium ? `blur(0)` : `blur(${value * 20}px)`,
  );

  let logosGroup = [
    logos.slice(0, 2),
    logos.slice(2, 4),
    logos.slice(4, 6),
    logos.slice(6, 8),
  ];

  if (media.xlarge) {
    logosGroup = [[...logos]];
  } else if (media.medium) {
    logosGroup = [logos.slice(0, 4), logos.slice(4, 8)];
  } else if (media.small) {
    logosGroup = [logos.slice(0, 3), logos.slice(3, 6)];
  }

  return (
    <Container>
      <Box m={{ paddingBottom: '10vh' }}>
        <motion.div
          style={{ filter, transform, opacity, transformOrigin: 'left' }}
          ref={containerRef}
        >
          <LogoWallTitle />

          {logosGroup &&
            logosGroup.map((innerLogos) => (
              <Box
                key={JSON.stringify(innerLogos)}
                xs={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {innerLogos.map((logo) => (
                  <LogoItem key={logo.name} {...logo} />
                ))}
              </Box>
            ))}
        </motion.div>
      </Box>
    </Container>
  );
};
