import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import {
  Box,
  Container,
  Flex,
  I18n,
  OnlyDisplay,
  Section,
} from '../../../../base';
import { SectionTitle } from '../../../../common';

import { HowToRead } from './components/HowToRead';
import { HowToSetup } from './components/HowToSetup';

export interface FunGameSectionProps {
  children?: ReactNode;
}

export const FunGameSection: FC<FunGameSectionProps> = (props) => {
  const { children } = props;

  return (
    <Section>
      <Container>
        <Box
          xs={{
            paddingTop: 72,
            paddingBottom: 72,
            display: 'grid',
            gridGap: 34,
          }}
          l={{ paddingTop: 100, paddingBottom: 100, gridGap: 66 }}
          xl={{ paddingTop: 160, paddingBottom: 160, gridGap: 96 }}
        >
          <Box css={{ textAlign: 'center' }}>
            <SectionTitle>
              <I18n name="title__have_fun_with_the_dot_punching_game" />
            </SectionTitle>
          </Box>

          <OnlyDisplay m l xl xxl>
            <Box xs={{ display: 'grid', gridGap: 24 }}>
              <StaticImage
                alt="key-tag-fun-game"
                src="./images/key-tag-fun-game.png"
              />

              <Flex xs={{ justifyContent: 'space-between' }}>
                <Box xs={{ width: '32%' }}>
                  <HowToSetup />
                </Box>
                <Box xs={{ width: '32%' }}>
                  <HowToRead />
                </Box>
              </Flex>
            </Box>
          </OnlyDisplay>

          <OnlyDisplay xs s>
            <Box xs={{ display: 'grid', gridGap: 32 }}>
              <HowToSetup />

              <Box
                xs={{ maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}
              >
                <StaticImage
                  alt="key-tag-fun-game"
                  src="./images/key-tag-fun-game-mobile.png"
                />
              </Box>

              <HowToRead />
            </Box>
          </OnlyDisplay>

          {children}
        </Box>
      </Container>
    </Section>
  );
};
