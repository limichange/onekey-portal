import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useExternalUrls() {
  const { t } = useTranslation();

  return {
    openSourceCommunity: {
      name: t('menu__open_source_community'),
      url: 'https://github.com/OneKeyHQ/',
    },
    portfolio: {
      name: t('menu__portfolio'),
      description: t('menu__portfolio_desc'),
      url: 'https://app.onekey.so/tab/home',
    },
    swap: {
      name: t('menu__swap'),
      description: t('menu__swap_desc'),
      url: 'https://app.onekey.so/tab/swap',
    },
    discover: {
      name: 'Discover',
      url: 'https://app.onekey.so/tab/discover',
    },
    customerService: {
      name: t('menu__customer_service'),
      description: t('menu__customer_service_desc'),
      url: 'https://help.onekey.so/hc/requests/new',
    },
    helpCenter: {
      name: t('menu__help_center'),
      description: t('menu__help_center_desc'),
      url: 'https://help.onekey.so/',
    },
    twitter: {
      name: 'Twitter',
      url: 'https://twitter.com/OneKeyHQ',
      username: 'OneKeyHQ',
    },
    discord: {
      name: 'Discord',
      description: t('menu__discord_desc'),
      url: 'https://discord.gg/nwUJaTzjzv',
    },
    github: {
      name: 'Github',
      description: t('menu__github_desc'),
      url: 'https://github.com/OneKeyHQ/',
    },
    reddit: {
      name: 'Reddit',
      url: 'https://www.reddit.com/r/OneKeyHQ/',
    },
    weibo: {
      name: 'Weibo',
      url: 'https://weibo.com/yourKeysyourBitcoin',
    },
  } as const;
}
