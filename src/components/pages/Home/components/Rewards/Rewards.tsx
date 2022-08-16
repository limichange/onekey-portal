import { FC } from 'react';

import Marquee from 'react-fast-marquee';

import { theme } from '../../../../../theme';
import { Box, Img, Section } from '../../../../base';

import image2 from './images/image02.svg';
import image3 from './images/image03.svg';
import image4 from './images/image04.svg';
import image5 from './images/image05.svg';
import image6 from './images/image06.svg';
import image7 from './images/image07.svg';
import image8 from './images/image08.svg';
import image9 from './images/image09.svg';
import image10 from './images/image10.svg';

const images = [
  image10,
  image9,
  image8,
  image7,
  image6,
  image5,
  image4,
  image3,
  image2,
];

export const Rewards: FC = () => {
  const itemStyle = {
    xs: {
      margin: '0 10px',
      transform: 'scale(.8)',
    },
    m: {
      margin: '0 50px',
      transform: 'scale(1)',
    },
  };

  return (
    <Section>
      <Box
        xs={{
          width: '100%',
          overflow: 'hidden',
          paddingTop: 40,
          paddingBottom: 40,
          backgroundColor: '#313638',
        }}
        m={{
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        <Marquee gradientWidth={0} direction="left">
          <Box
            xs={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              m={itemStyle.m}
              xs={itemStyle.xs}
              css={{
                ...theme.text.medium800,
                color: theme.colors.test300,
              }}
            >
              Backed by the Best
            </Box>
            {images.map((image, index) => (
              <Img
                m={itemStyle.m}
                xs={itemStyle.xs}
                draggable={false}
                key={image}
                src={image}
                alt={`image-${index}`}
              />
            ))}
          </Box>
        </Marquee>
      </Box>
    </Section>
  );
};
