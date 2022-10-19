import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { dynamicTextStyle } from '../../../../../../utils';
import {
  Box,
  Container,
  Flex,
  GoToShopButton,
  H1,
  I18n,
  Link,
  OnlyDisplay,
  Span,
} from '../../../../../base';
import { DownloadButton } from '../../../../../common/DownloadButton';
import { HeroBanner } from '../../../../../common/HeroBanner';

import { Stars } from './Stars';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container
      xs={{
        paddingTop: 78,
        paddingBottom: 78,
        zIndex: 2,
        height: '100%',
        flexDirection: 'column',
        position: 'relative',
        display: 'flex',
      }}
    >
      <Box
        xs={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          marginTop: 'auto',
        }}
      >
        {/* banner */}
        <Box
          xs={{ marginBottom: 'auto', marginTop: 8 }}
          m={{ marginBottom: 0, marginTop: 'auto' }}
        >
          <HeroBanner to="https://onekeyhq.atlassian.net/wiki/spaces/OC/overview">
            {t('title__hiring')}
          </HeroBanner>
        </Box>

        {/* main title */}
        <H1
          xs={{
            color: theme.colors.test500,
            ...theme.text.medium800,
          }}
          xl={{ ...dynamicTextStyle(theme.text.medium800, 'xlarge') }}
          xxl={{ ...theme.text.medium1000 }}
        >
          <I18n
            multiLine={['xs', 's']}
            singleLine={['m', 'l', 'xl', 'xxl']}
            name="title__home_hero_1"
          />

          <br />

          <I18n
            multiLine={['xs', 's']}
            singleLine={['m', 'l', 'xl', 'xxl']}
            name="title__home_hero_2"
          />
        </H1>

        {/* buttons */}
        <OnlyDisplay xs s>
          <Box
            xs={{ display: 'flex', gap: 20, flexDirection: 'column' }}
            s={{ flexDirection: 'row' }}
          >
            <DownloadButton
              override={{ button: { xs: { width: '100%' }, size: 'large' } }}
            />
            <GoToShopButton
              overrides={{
                button: {
                  xs: { width: '100%' },
                  size: 'large',
                  fillHeight: true,
                },
              }}
            />
          </Box>
        </OnlyDisplay>

        <OnlyDisplay m l xl xxl>
          <Box
            xs={{ display: 'flex', gap: 20, flexDirection: 'column' }}
            s={{ flexDirection: 'row' }}
          >
            <DownloadButton override={{ button: { size: 'medium' } }} />
            <GoToShopButton
              overrides={{ button: { size: 'medium', fillHeight: true } }}
            />
          </Box>
        </OnlyDisplay>

        {/* stars and link */}
        <Flex
          xs={{ gap: 8, alignItems: 'center', justifyContent: 'center' }}
          s={{ justifyContent: 'flex-start' }}
        >
          <Stars />

          <Link to="https://www.trustpilot.com/review/onekey.so">
            <Span
              xs={{
                ...theme.text.normal100,
                color: theme.colors.test400,
                borderBottom: `1px solid ${theme.colors.test400}`,
                ':hover': {
                  opacity: 0.6,
                },
              }}
            >
              {t('title__trustpilot_score_and_review')}
            </Span>
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};
