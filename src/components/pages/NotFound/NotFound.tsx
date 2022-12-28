import { FC, Fragment, ReactNode, useEffect } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useMediaQuery } from '../../../hooks';
import { isBrowser, oneLine } from '../../../utils';
import { Box, Main, OnlyDisplay, SEO } from '../../base';
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
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  useEffect(() => {
    if (isBrowser()) {
      window.keep = false;
    }
  }, []);

  return (
    <Box xs={{ background: theme.colors.test100 }}>
      <SEO
        title={oneLine(t('content__lost_your_way'))}
        description={t(
          'content__we_cant_seem_to_find_the_page_youre_looking_for',
        )}
      />

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
