import { FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
import { Box, Container, Main, SEO } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { Hero } from './Hero';

export interface EnterpriseProps {
  children?: ReactNode;
}

export const Enterprise: FC<EnterpriseProps> = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <SEO
        title={oneLine(t('title__enterprise_solutions'))}
        description={t('title__enterprise_solutions_desc')}
      />

      <Navigation />

      <Main>
        <Hero />

        <Container>
          <Box xs={{ paddingTop: 80, paddingBottom: 80 }}>
            <StayInTouch />
          </Box>
        </Container>

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />
    </Box>
  );
};
