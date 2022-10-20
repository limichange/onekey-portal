import React from 'react';

import { Helmet } from 'react-helmet';

import { Container, Main, SEO } from '../../base';
import {
  CompatibilitySection,
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
  TwoMediaCards,
} from '../../common';

import { Hero } from './components/Hero';
import { ProductCompare } from './components/ProductCompare';
import { Products } from './components/Products';

export const Shop: React.FC = () => (
  <>
    <Helmet>
      <title>Shop</title>
    </Helmet>

    <SEO title="onekey" />

    <Navigation />

    <Main>
      <Hero />

      <Container>
        <Products />
      </Container>

      <CompatibilitySection />

      <ProductCompare />

      <Container>
        <TwoMediaCards />
      </Container>

      <StayInTouchWidthContainerAndPadding />
    </Main>

    <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />
  </>
);
