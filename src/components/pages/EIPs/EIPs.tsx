import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
import { Box, Container, Main, SEO } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { EIPsSuggestContent } from './EIPsSuggestContent';
import { MainTitle } from './MainTitle';

export interface EIPsProps {
  children?: ReactNode;
}

export const EIPs: FC<EIPsProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box xs={{ background: theme.colors.test100 }}>
      <SEO
        title={oneLine(t('title__ethereum_improvement_proposals'))}
        description={t('title__ethereum_improvement_proposals_desc')}
      />

      <Navigation />

      <Main>
        <Container>
          <MainTitle />
        </Container>

        <EIPsSuggestContent />

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
