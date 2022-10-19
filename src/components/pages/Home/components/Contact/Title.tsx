import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, I18n, Span } from '../../../../base';

export interface TitleProps {
  children?: ReactNode;
}

export const Title: FC<TitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <Flex
      xs={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 24,
      }}
      m={{
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Span
        xs={{
          color: theme.colors.test500,
          flex: 1,
          ...theme.text.medium800,
        }}
      >
        <I18n name="title__we_are_always_on_standby" />
      </Span>

      <Span
        xs={{
          color: theme.colors.test400,
          flex: 1,
          ...theme.text.normal300,
        }}
      >
        <I18n name="title__we_are_always_on_standby_desc" />
      </Span>
      {children}
    </Flex>
  );
};
