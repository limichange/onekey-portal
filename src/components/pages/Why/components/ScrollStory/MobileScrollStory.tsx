import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

import { MobileScrollStoryItem } from './MobileScrollStoryItem';
import { useScrollStory } from './useScrollStory';

export interface MobileScrollStoryProps {
  children?: ReactNode;
}

export const MobileScrollStory: FC<MobileScrollStoryProps> = (props) => {
  const { children } = props;
  const data = useScrollStory();

  return (
    <Box>
      {data.map((item) => (
        <Box key={item.title}>
          <MobileScrollStoryItem {...item} />
        </Box>
      ))}
      {children}
    </Box>
  );
};
