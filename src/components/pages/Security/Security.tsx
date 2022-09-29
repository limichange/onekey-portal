import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { Box, Container, Main, SEO } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { FeatureSection } from './FeatureSection';
import { Hero } from './Hero';
import { TextDescriptionSection } from './TextDescriptionSection';

export interface SecurityProps {
  children?: ReactNode;
}

export const Security: React.FC<SecurityProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>OneKey</title>
      </Helmet>

      <SEO title="onekey" />

      <Navigation />

      <Main>
        <Box xs={{ backgroundColor: theme.colors.test500 }}>
          <Hero />
        </Box>

        <FeatureSection />

        <Container>
          <TextDescriptionSection />

          <Box xs={{ paddingBottom: 80 }}>
            <StayInTouch />
          </Box>
        </Container>
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />
      {children}
    </>
  );
};
