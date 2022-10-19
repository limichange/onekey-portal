import { FC, ReactNode } from 'react';

import { Box, OnlyDisplay } from '../../../../../base';
import { useWhatOurUsersSay } from '../hooks/useWhatOurUsersSay';

import { WhatOurUsersSayItem } from './WhatOurUsersSayItem';
import { WhatOurUsersSayItemBest } from './WhatOurUsersSayItemBest';

export interface WhatOurUsersSayContentProps {
  children?: ReactNode;
}

export const WhatOurUsersSayContent: FC<WhatOurUsersSayContentProps> = (
  props,
) => {
  const { children } = props;
  const { others, first } = useWhatOurUsersSay();

  return (
    <Box
      xs={{
        paddingTop: 64,
        display: 'grid',
        gridTemplateColumns: `repeat(1, 1fr);`,
        gridGap: 16,
      }}
      m={{
        gridTemplateColumns: `repeat(2, 1fr);`,
        gridAutoRows: '1fr',
      }}
      l={{
        gridTemplateColumns: `repeat(3, 1fr);`,
        gridGap: 24,
      }}
    >
      <OnlyDisplay
        l
        xl
        xxl
        style={{
          gridColumn: '1 / 3',
          gridRow: 1,
        }}
      >
        <WhatOurUsersSayItemBest {...first} />
      </OnlyDisplay>

      <OnlyDisplay xs s m>
        <WhatOurUsersSayItem {...first} />
      </OnlyDisplay>

      {others.map((item) => (
        <WhatOurUsersSayItem {...item} key={item.user} />
      ))}

      {children}
    </Box>
  );
};
