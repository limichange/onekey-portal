import React from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
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

export const Shop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={oneLine(t('title__shop_onekey'))}
        description={t('title__shop_onekey_desc')}
      />

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
};
