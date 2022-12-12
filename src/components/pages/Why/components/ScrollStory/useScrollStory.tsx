import { ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { splitMultiline } from '../../../../../utils';
import {
  ArrowRightIcon,
  Box,
  Button,
  DynamicContent,
  Link,
} from '../../../../base';

export type ScrollStoryItem = {
  title: string;
  content: string | ReactNode;
  video: string;
  button?: ReactNode;
};

export function useScrollStory(): ScrollStoryItem[] {
  const { t } = useTranslation();
  const theme = useTheme();

  return [
    {
      title: t('title__without_a_hardware_wallet_hackers_may_steal_your_coins'),
      content: (
        <DynamicContent
          jsx={splitMultiline(
            t(
              'title__without_a_hardware_wallet_hackers_may_steal_your_coins_desc',
            ),
          ).join('<br/><br/>')}
          components={{}}
        />
      ),
      video: '/why-video/why-feature-01.mp4',
    },
    {
      title: t('title__switch_to_open_source_wallet'),
      content: (
        <DynamicContent
          jsx={splitMultiline(
            t('title__switch_to_open_source_wallet_desc'),
          ).join('<br/><br/>')}
          components={{}}
        />
      ),
      video: '/why-video/why-feature-02.mp4',
    },
    {
      title: t('title__earths_strongest_wallet'),
      content: t('title__earths_strongest_wallet_desc'),
      video: '/why-video/why-feature-03.mp4',
      button: (
        <Box xs={{ width: 'fit-content' }}>
          <Link to="/shop/#compatibility-section">
            <Button
              rightIcon={<ArrowRightIcon width={24} height={24} />}
              variant="outlined"
            >
              {t('action__view_third_party_wallets_here')}
            </Button>
          </Link>
        </Box>
      ),
    },
    {
      title: t('title__migrating_to_onekey'),
      content: t('title__migrating_to_onekey_desc'),
      video: '/why-video/why-feature-04.mp4',
      button: (
        <Box xs={{ width: 'fit-content' }}>
          <Link to="/tokens">
            <Button
              rightIcon={<ArrowRightIcon width={24} height={24} />}
              variant="outlined"
            >
              {t('title__currency_support')}
            </Button>
          </Link>
        </Box>
      ),
    },
    {
      title: t('title__best_fido_key'),
      content: (
        <Box
          xs={{
            a: {
              position: 'relative',
              color: theme.colors.test500,
              ':hover': {
                color: theme.colors.brandAlt300,

                '&:after': {
                  background: theme.colors.brandAlt300,
                },
              },
              '&:after': {
                transition: theme.transitions.allEase,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                content: '""',
                height: 1,
                background: theme.colors.test500,
              },
            },
          }}
        >
          <DynamicContent
            jsx={splitMultiline(t('title__best_fido_key_desc')).join(
              '<br/><br/>',
            )}
            components={{
              Link,
            }}
          />
        </Box>
      ),
      video: '/why-video/why-feature-05.mp4',
    },
  ];
}
