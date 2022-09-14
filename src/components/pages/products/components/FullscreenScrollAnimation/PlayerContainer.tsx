import { FC, useMemo, useState } from 'react';

import { MotionValue, useTransform } from 'framer-motion';

import { useWindowSize } from '../../../../../hooks';
import { Box, CanvasPlayerNext } from '../../../../base';
import { Player } from '../../../../base/CanvasPlayerNext/Player';
import { IntroductionText } from '../IntroductionSection/IntroductionText';

import { PlayerText } from './PlayerText';

export interface PlayerContainerProps {
  elementInViewportProgress: MotionValue<number>;
  backgroundColor: string;
  items: {
    name: string | string[];
    description: string;
    textColor?: string;
    frames: string[];
  }[];
}

export const PlayerContainer: FC<PlayerContainerProps> = (props) => {
  const { elementInViewportProgress, items, backgroundColor } = props;
  const { height: windowHeight = 1, width: windowWidth = 1 } = useWindowSize();
  const [totalProgress, setTotalProgress] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);

  const allFrames = useMemo(() => items.map((item) => item.frames), [items]);

  useTransform(elementInViewportProgress, (value) => {
    const newValue = parseFloat((value * totalProgress).toFixed(0));

    if (currentProgress !== newValue) setCurrentProgress(newValue);
  });

  return (
    <Box xs={{ position: 'relative' }}>
      <CanvasPlayerNext
        backgroundColor={backgroundColor}
        width={windowWidth}
        height={windowHeight}
        frames={allFrames}
        progress={currentProgress}
        onInit={(playerInstance) => {
          setPlayer(playerInstance);
        }}
        onTotalProgressChange={(progress) => {
          setTotalProgress(progress);
        }}
      />

      {items.map((item, index) => (
        <PlayerText player={player} index={index} key={item.description}>
          <IntroductionText
            color={item.textColor as 'black' | 'difference'}
            name={item.name}
            description={item.description}
          />
        </PlayerText>
      ))}
    </Box>
  );
};
