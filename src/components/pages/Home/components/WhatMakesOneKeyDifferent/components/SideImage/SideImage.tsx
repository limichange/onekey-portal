import { FC, ReactNode, useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import { useWindowSize } from '../../../../../../../hooks';
import { Box } from '../../../../../../base';

export interface SideImageProps {
  children?: ReactNode;
}

export const SideImage: FC<SideImageProps> = (props) => {
  const { children } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const { width = 0 } = useWindowSize();
  const y = useTransform(scrollYProgress, (value) =>
    width > 959 ? value * 160 : 0,
  );

  return (
    <Box
      xs={{ width: '100%' }}
      m={{ width: 359 }}
      l={{ width: 446 }}
      xl={{ width: 533 }}
      xxl={{ width: 656 }}
    >
      <div ref={ref}>
        <motion.div style={{ y }}>
          <StaticImage
            style={{
              borderRadius: 40,
              display: 'block',
              width: '100%',
              height: 'auto',
            }}
            src="./story-side-image.jpg"
            alt="sss"
          />
        </motion.div>

        {children}
      </div>
    </Box>
  );
};
