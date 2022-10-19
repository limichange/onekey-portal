import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { BoxProps, DynamicContent, Span } from '../../../../../base';

import { WhatOurUsersSayItemContainer } from './WhatOurUsersSayItemContainer';

export interface HighlightProps {
  children?: ReactNode;
}

export const Highlight: FC<HighlightProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return <Span xs={{ color: theme.colors.test500 }}>{children}</Span>;
};

export interface WhatOurUsersSayItemProps extends BoxProps {
  children?: ReactNode;
  user: string;
  content: string;
}

export const WhatOurUsersSayItem: FC<WhatOurUsersSayItemProps> = (props) => {
  const { children, user, content } = props;
  const theme = useTheme();

  return (
    <WhatOurUsersSayItemContainer>
      {/* content */}
      <Span
        xs={{
          paddingRight: 8,
          color: theme.colors.test300,
          ...theme.text.medium400,
        }}
        m={theme.text.medium500}
        l={theme.text.medium600}
      >
        <DynamicContent jsx={content} components={{ Highlight }} />
      </Span>

      {/* user */}
      <Span
        xs={{
          ...theme.text.medium300,
          color: theme.colors.test250,
        }}
        m={theme.text.medium400}
        l={theme.text.medium500}
      >
        {user}
      </Span>
      {children}
    </WhatOurUsersSayItemContainer>
  );
};
