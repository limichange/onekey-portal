import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, H1, I18n, Span } from '../../../../base';

export interface MainTitleProps {
  children?: ReactNode;
}

export const MainTitle: FC<MainTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <div>
      <Container>
        <Box
          xs={{
            paddingTop: 60,
            paddingBottom: 60,
            gap: 40,
            display: 'grid',
            alignItems: 'end',
            textAlign: 'left',
            justifyItems: 'start',
          }}
          l={{
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <H1
            xs={{
              color: theme.colors.test500,
              ...theme.text.medium800,
            }}
            s={theme.text.medium900}
            m={theme.text.medium1000}
            l={theme.text.medium1100}
          >
            <I18n
              name="title__why_use_onekey"
              singleLine={['xs', 's', 'm']}
              multiLine={['l', 'xl', 'xxl', 'xxl']}
            />
          </H1>

          <Span
            xs={theme.text.normal300}
            s={theme.text.normal400}
            m={theme.text.normal500}
            l={theme.text.normal600}
          >
            <I18n name="title__why_use_onekey_desc" />
          </Span>
        </Box>
      </Container>
      {children}
    </div>
  );
};
