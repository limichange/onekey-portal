import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { BoxProps, DynamicContent, Span } from '../../../../../base';
import { BrandHighlight } from '../../../../../common';

import { WhatOurUsersSayItemContainer } from './WhatOurUsersSayItemContainer';

export interface WhatOurUsersSayItemBestProps extends BoxProps {
  children?: ReactNode;
  user: string;
  content: string;
}

export const WhatOurUsersSayItemBest: FC<WhatOurUsersSayItemBestProps> = (
  props,
) => {
  const { children, user, content } = props;
  const theme = useTheme();

  return (
    <WhatOurUsersSayItemContainer>
      {/* content */}
      <Span
        xs={{
          paddingRight: 8,
          color: theme.colors.test500,
          ...theme.text.medium600,
        }}
        xl={theme.text.medium700}
      >
        <DynamicContent
          jsx={content}
          components={{ Highlight: BrandHighlight }}
        />
      </Span>

      {/* user */}
      <Span
        xs={{
          ...theme.text.medium500,
          color: theme.colors.test250,
        }}
        xl={theme.text.medium600}
      >
        {user}
      </Span>
      {children}
    </WhatOurUsersSayItemContainer>
  );
};
