import { FC, ReactNode } from 'react';

import { OnlyDisplay } from '../../../../base';

import { DesktopScrollStory } from './DesktopScrollStory';
import { MobileScrollStory } from './MobileScrollStory';

export interface ScrollStoryProps {
  children?: ReactNode;
}

export const ScrollStory: FC<ScrollStoryProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <OnlyDisplay m l xl xxl>
        <DesktopScrollStory />
      </OnlyDisplay>

      <OnlyDisplay xs s>
        <MobileScrollStory />
      </OnlyDisplay>

      {children}
    </div>
  );
};
