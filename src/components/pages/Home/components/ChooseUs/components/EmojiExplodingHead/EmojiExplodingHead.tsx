import { FC } from 'react';

import { keyframes } from '@emotion/react';

import { Img } from '../../../../../../base';
import { EmojiContainer } from '../EmojiContainer';

import src from './exploding_head.png';

const bounce = keyframes`
  from, to {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }

  60% {
    transform: translate3d(0, -15px, 0) rotate(20deg) scale(1.3);
  }
`;

export const EmojiExplodingHead: FC = () => (
  <EmojiContainer>
    <Img
      xs={{
        '&.play': {
          animation: `${bounce} .8s ease 1`,
        },
      }}
      alt="[emoji exploding head]"
      src={src}
    />
  </EmojiContainer>
);
