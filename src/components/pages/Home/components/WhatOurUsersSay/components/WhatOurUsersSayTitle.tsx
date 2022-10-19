import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { I18n, Span } from '../../../../../base';
import { FadeIn } from '../../../../../base/FadeIn';

export interface WhatOurUsersSayTitleProps {
  children?: ReactNode;
}

export const WhatOurUsersSayTitle: FC<WhatOurUsersSayTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <FadeIn>
      <Span
        xs={{
          color: theme.colors.test500,
          ...theme.text.medium800,
        }}
        m={theme.text.medium900}
      >
        <I18n name="title__what_our_users_say" />

        {children}
      </Span>
    </FadeIn>
  );
};
