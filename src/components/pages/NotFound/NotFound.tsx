import { FC, Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Helmet } from 'react-helmet';

import { useMediaQuery } from '../../../hooks';
import { Box, Main, OnlyDisplay } from '../../base';
import { Navigation, PageFooter } from '../../common';

import { ButtonContent } from './components/ButtonContent/ButtonContent';
import { TextContent } from './components/TextContent';
import { ThreePlayer } from './components/ThreePlayer';

export interface NotFoundProps {
  children?: ReactNode;
}

const working = ['de', 'en', 'es', 'fil', 'fr', 'it', 'pt'];

export const NotFound: FC<NotFoundProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const mediaQuery = useMediaQuery();
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <Box xs={{ background: theme.colors.test100 }}>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Navigation />

      <Main>
        <Box
          xs={{
            height: '90vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {mediaQuery.medium && (
            <ThreePlayer showText={working.includes(language)} />
          )}

          {working.includes(language) && (
            <Fragment key="content">
              <OnlyDisplay m l xl xxl>
                <ButtonContent />
              </OnlyDisplay>

              <OnlyDisplay xs s>
                <TextContent />
              </OnlyDisplay>
            </Fragment>
          )}

          {!working.includes(language) && <TextContent />}
        </Box>

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />
    </Box>
  );
};
