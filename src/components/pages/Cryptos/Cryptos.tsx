import { FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
import { Box, Container, Main, SEO } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { CryptosTable } from './CryptosTable';
import { MainTitle } from './MainTitle';

export interface CryptosProps {
  children?: ReactNode;
}

export const Cryptos: FC<CryptosProps> = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <SEO
        title={oneLine(t('title__onekey_crypto_assets'))}
        description={t('title__support_list_desc', {
          email: 'hi@onekey.so',
        })}
      />

      <Navigation />

      <Main>
        <Container>
          <MainTitle />
        </Container>

        <CryptosTable />

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
