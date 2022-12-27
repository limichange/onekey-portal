import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
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
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={oneLine(t('title__security_both_hard_and_soft'))
          .replace('.', '')
          .replace('。', '')}
        description={t('title__security_both_hard_and_soft_desc')}
      />

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
