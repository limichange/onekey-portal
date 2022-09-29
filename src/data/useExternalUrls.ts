import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useExternalUrls() {
  const { t } = useTranslation();

  return {
    openSourceCommunity: {
      name: t('menu__open_source_community'),
      link: 'https://github.com/OneKeyHQ/',
    },
    portfolio: {
      name: t('menu__portfolio'),
      link: 'https://app.onekey.so/tab/home',
    },
    swap: {
      name: t('menu__swap'),
      link: 'https://app.onekey.so/tab/swap',
    },
    discover: {
      name: 'discover',
      link: 'https://app.onekey.so/tab/discover',
    },
  };
}
