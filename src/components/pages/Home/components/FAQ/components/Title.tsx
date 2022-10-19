import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { I18n, Span } from '../../../../../base';

export interface TitleProps {
  children?: ReactNode;
}

export const Title: FC<TitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span
      xs={{
        color: theme.colors.test500,
        ...theme.text.medium800,
      }}
      l={theme.text.medium900}
      xl={theme.text.medium1000}
    >
      <I18n name="title__frequently_asked_questions" />

      {children}
    </Span>
  );
};
