import React from 'react';

import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { Box, Main, SEO } from '../../base';
import { FadeIn } from '../../base/FadeIn';
import { Navigation } from '../../common/Navigation';
import { PageFooter } from '../../common/PageFooter';

import {
  ChooseUs,
  Contact,
  FAQ,
  Feature,
  Hardware,
  Header,
  LogoWall,
  MultiImageIntroduction,
  Rewards,
  Security,
  Start,
  WhatOurUsersSay,
  Why,
} from './components';
import { WhatMakesOneKeyDifferent } from './components/WhatMakesOneKeyDifferent';

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>All-in-one crypto wallet trusted by millions.</title>
      </Helmet>

      <SEO />

      <Navigation />

      <Main>
        <Header />

        <ChooseUs />

        <FadeIn>
          <LogoWall />
        </FadeIn>

        <FadeIn>
          <MultiImageIntroduction />
        </FadeIn>

        <WhatMakesOneKeyDifferent />

        <FadeIn>
          <Hardware />
        </FadeIn>

        <FadeIn>
          <Security />
        </FadeIn>

        <FadeIn>
          <WhatOurUsersSay />
        </FadeIn>

        <FadeIn>
          <Feature />
        </FadeIn>

        <FadeIn>
          <Why />
        </FadeIn>

        <FadeIn>
          <FAQ />
        </FadeIn>

        <FadeIn>
          <Rewards />
        </FadeIn>

        <FadeIn>
          <Start />
        </FadeIn>

        <FadeIn>
          <Contact />
        </FadeIn>
      </Main>

      <Box css={{ background: theme.colors.brandAlt200 }}>
        <PageFooter />
      </Box>
    </>
  );
};
