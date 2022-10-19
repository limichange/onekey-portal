import { FC } from 'react';

import { keyframes } from '@emotion/react';

import { Img } from '../../../../../../base';
import { EmojiContainer } from '../EmojiContainer';

import src from './face_with_spiral_eyes.png';

const bounce = keyframes`
  from, to {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  33% {
    transform: translate3d(0, 3px, 0) rotate(33deg);
  }

  66% {
    transform: translate3d(0, 3px, 0) rotate(-33deg);
  }
`;

export const EmojiFaceWithSpiralEyes: FC = () => (
  <EmojiContainer>
    <Img
      xs={{
        '&.play': {
          animation: `${bounce} 1.3s ease 1`,
        },
      }}
      alt="[face with spiral eyes]"
      src={src}
    />
  </EmojiContainer>
);
