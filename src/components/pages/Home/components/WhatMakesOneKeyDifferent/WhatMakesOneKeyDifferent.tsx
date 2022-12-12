import { FC, ReactNode } from 'react';

import { Box, Button, Container, I18n, Link, Section } from '../../../../base';
import { FadeIn } from '../../../../base/FadeIn';

import { SideImage } from './components/SideImage';
import { Story1 } from './components/Story1';
import { Story2 } from './components/Story2';
import { TheManSay } from './components/TheManSay';
import { WhatMakesOneKeyDifferentTitle } from './components/WhatMakesOneKeyDifferentTitle';

export interface WhatMakesOneKeyDifferentProps {
  children?: ReactNode;
}

export const WhatMakesOneKeyDifferent: FC<WhatMakesOneKeyDifferentProps> = (
  props,
) => {
  const { children } = props;

  return (
    <Section>
      <Container>
        <Box
          xs={{
            display: 'grid',
            gridTemplateColumns: `repeat(1, 1fr)`,
            gridGap: 64,
            paddingBottom: 20,
            paddingTop: 20,
          }}
          m={{ paddingBottom: 80, paddingTop: 80 }}
          xl={{ paddingBottom: 120, paddingTop: 120 }}
        >
          <Box>
            <FadeIn>
              <WhatMakesOneKeyDifferentTitle />
            </FadeIn>

            <FadeIn>
              <Box
                xs={{
                  paddingTop: 32,
                  display: 'grid',
                  gridTemplateColumns: `repeat(1, 1fr)`,
                  gridGap: 24,
                }}
                m={{ gridTemplateColumns: `repeat(2, 1fr)` }}
              >
                <Box>
                  <Link to="/why">
                    <Button variant="outlined">
                      <I18n name="action__learn_more" />
                    </Button>
                  </Link>
                </Box>

                <Story1 />
              </Box>
            </FadeIn>
          </Box>

          <FadeIn>
            <TheManSay />
          </FadeIn>

          <FadeIn>
            <Box
              xs={{
                display: 'grid',
                gridTemplateColumns: `repeat(1, 1fr)`,
                gridGap: 24,
              }}
              m={{ gridTemplateColumns: `repeat(2, 1fr)` }}
            >
              <Box xs={{ flex: 1 }}>
                <SideImage />
              </Box>
              <Box xs={{ flex: 1 }}>
                <Story2 />
              </Box>
            </Box>
          </FadeIn>
        </Box>

        <Box>{children}</Box>
      </Container>
    </Section>
  );
};
