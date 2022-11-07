import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, I18n, Span } from '../../../../../../base';

export interface TextIntroductionProps {
  children?: ReactNode;
  title: string;
  text1: string;
  text2: string;
}

export const TextIntroduction: FC<TextIntroductionProps> = (props) => {
  const { children, title, text1, text2 } = props;
  const theme = useTheme();

  return (
    <Box xs={{ display: 'grid', gridGap: 12 }}>
      <Divider color={theme.colors.test200} />
      <Box
        xs={{
          ...theme.text.medium400,
          color: theme.colors.test500,
        }}
        m={theme.text.medium500}
        l={theme.text.medium600}
      >
        <I18n name={title} />
      </Box>

      <Box xs={{ ...theme.text.normal300 }}>
        <Span xs={{ color: theme.colors.test500 }}>
          <I18n name={text1} />
        </Span>{' '}
        <Span xs={{ color: theme.colors.test300 }}>
          <I18n name={text2} />
        </Span>
      </Box>

      {children}
    </Box>
  );
};
