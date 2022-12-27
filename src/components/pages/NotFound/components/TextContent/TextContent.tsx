import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Button, I18n, Link, Span } from '../../../../base';

export interface TextContentProps {
  children?: ReactNode;
}

export const TextContent: FC<TextContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        color: theme.colors.test500,
        top: '25vh',
        left: 0,
        right: 0,
        position: 'absolute',
        zIndex: 1,
        textAlign: 'center',
      }}
    >
      <Box
        xs={{
          ...theme.text.medium400,
        }}
      >
        ERROR 404
      </Box>

      <Span
        xs={theme.text.medium900}
        m={theme.text.normal1200}
        l={theme.text.normal1300}
      >
        <I18n name="content__lost_your_way" />
      </Span>

      <Box
        xs={{ paddingTop: 24, ...theme.text.normal400, opacity: 0.5 }}
        m={theme.text.normal500}
        l={theme.text.normal600}
      >
        <I18n name="content__we_cant_seem_to_find_the_page_youre_looking_for" />
      </Box>

      <Box
        xs={{
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'center',
        }}
        m={{
          paddingTop: 50,
        }}
      >
        <Link to="/">
          <Button variant="outlined">
            <I18n name="content__take_me_back_home" />
          </Button>
        </Link>
      </Box>

      {children}
    </Box>
  );
};
