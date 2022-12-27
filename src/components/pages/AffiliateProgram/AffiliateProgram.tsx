import { FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
import { Box, Container, Flex, Main, SEO } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { AffiliateProgramCard } from './AffiliateProgramCard';
import { Hero } from './Hero';
import { useAffiliateProgramData } from './useAffiliateProgramData';

export interface AffiliateProgramProps {
  children?: ReactNode;
}

export const AffiliateProgram: FC<AffiliateProgramProps> = (props) => {
  const { children } = props;
  const affiliateProgramData = useAffiliateProgramData();
  const { t } = useTranslation();

  return (
    <Box>
      <SEO
        title={oneLine(t('title__affiliate_program'))}
        description={t('title__affiliate_program_desc')}
      />

      <Navigation />

      <Main>
        <Hero />

        <Container>
          <Flex xs={{ alignItems: 'center', justifyContent: 'center' }}>
            <Flex
              xs={{
                gap: 24,
                paddingTop: 80,
                paddingBottom: 80,
                flexDirection: 'column',
              }}
              m={{
                flexDirection: 'row',
              }}
            >
              {affiliateProgramData.cards.map((card) => (
                <AffiliateProgramCard key={card.title} {...card} />
              ))}
            </Flex>
          </Flex>
        </Container>

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
