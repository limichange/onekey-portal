import { FC } from 'react';

import { keyframes } from '@emotion/react';

import { Img } from '../../../../../../base';
import { EmojiContainer } from '../EmojiContainer';

import src from './thumbs_up.png';

const bounce = keyframes`
  from, to {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform: translate3d(0, -20px, 0) rotate(-30deg);
  }
`;

export const EmojiThumbsUp: FC = () => (
  <EmojiContainer>
    <Img
      xs={{
        '&.play': {
          animation: `${bounce} 0.8s ease 1`,
        },
      }}
      alt="thumbs up"
      src={src}
    />
  </EmojiContainer>
);
