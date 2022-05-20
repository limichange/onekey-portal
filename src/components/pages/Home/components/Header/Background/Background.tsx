import { FC } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

export const Background: FC = () => (
  <StaticImage
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
    }}
    quality={100}
    layout="constrained"
    alt="background"
    src="./background.jpg"
  />
);
