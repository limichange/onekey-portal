import { FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
import { Box, Container, Main, SEO } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { Hero } from './Hero';
import { OurOfferSection } from './OurOfferSection';
import { ProductShowcaseSection } from './ProductShowcaseSection';

export interface CoBrandedPartnershipProps {
  children?: ReactNode;
}

export const CoBrandedPartnership: FC<CoBrandedPartnershipProps> = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <SEO
        title={oneLine(t('title__co_branded_partnership'))}
        description={t('title__co_branded_partnership_desc')}
      />

      <Navigation />

      <Main>
        <Hero />

        <OurOfferSection />

        <ProductShowcaseSection />

        <Container>
          <Box xs={{ paddingBottom: 80 }}>
            <StayInTouch />
          </Box>
        </Container>

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />
    </Box>
  );
};
