import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useExternalUrls } from '../../../data';
import { useDownloadData } from '../../../data/useDownloadData';
import { useOneKeyProduct } from '../../../data/useOneKeyProduct';
import { useShopMenu } from '../../../data/useShopMenu';

export function usePageFooterData() {
  const { t } = useTranslation();
  const oneKeyProduct = useOneKeyProduct();
  const shopMenu = useShopMenu();
  const downloadData = useDownloadData();
  const externalUrls = useExternalUrls();

  return {
    media: {
      twitter: externalUrls.twitter,
      discord: externalUrls.discord,
      github: externalUrls.github,
      reddit: externalUrls.reddit,
      weibo: externalUrls.weibo,
    },
    menuData: [
      {
        name: t('menu__products'),
        link: '',
        list: [
          {
            name: oneKeyProduct.mini.name,
            link: oneKeyProduct.mini.path,
          },
          {
            name: oneKeyProduct.classic.name,
            link: oneKeyProduct.classic.path,
          },
          {
            name: oneKeyProduct.touch.name,
            link: oneKeyProduct.touch.path,
          },
          {
            name: oneKeyProduct.lite.name,
            link: oneKeyProduct.lite.path,
          },
          {
            name: shopMenu.name,
            link: shopMenu.path,
          },
        ],
      },
      {
        name: t('menu__app'),
        link: '',
        list: [
          {
            name: downloadData.desktop.name,
            key: downloadData.desktop.name,
            link: downloadData.desktop.path,
          },
          {
            name: downloadData.mobile.name,
            key: downloadData.mobile.name,
            link: downloadData.mobile.path,
          },
          {
            name: downloadData.browserExtension.name,
            key: downloadData.browserExtension.name,
            link: downloadData.browserExtension.path,
          },
          {
            name: downloadData.bridge.name,
            key: downloadData.bridge.name,
            link: downloadData.bridge.path,
          },
          {
            name: downloadData.web.name,
            key: downloadData.web.name,
            link: downloadData.web.path,
          },
        ],
      },
      {
        name: t('menu__services'),
        link: '',
        list: [
          {
            name: externalUrls.swap.name,
            link: externalUrls.swap.url,
          },
          {
            name: externalUrls.portfolio.name,
            link: externalUrls.portfolio.url,
          },
          {
            name: t('menu__token_list'),
            link: '/tokens',
          },
          {
            name: t('menu__supported_chains'),
            link: '/cryptos',
          },
          {
            name: t('menu__recovery_phrase_converter'),
            link: 'https://bip39.onekey.so/',
          },
          {
            name: 'EIPs',
            link: '/eips',
          },
        ],
      },
      {
        name: t('menu__information'),
        link: '',
        list: [
          {
            name: t('menu__security'),
            link: '/security',
          },
          {
            name: t('menu__submit_dapp'),
            link: 'https://gr4yl99ujhl.typeform.com/to/kDJuiIQ9',
          },
          {
            name: t('menu__submit_token'),
            link: 'https://gr4yl99ujhl.typeform.com/to/ZM0qyr9e',
          },
          {
            name: t('title__resellers'),
            link: 'https://help.onekey.so/hc/en-us/articles/5967821214223',
          },
        ],
      },
      {
        name: t('menu__developer'),
        link: '',
        list: [
          {
            name: t('menu__the_developer_portal'),
            link: 'https://developer.onekey.so/',
          },
        ],
      },
      {
        name: t('menu__solutions'),
        link: '',
        list: [
          {
            name: t('menu__enterprise_solutions'),
            link: '/enterprise',
          },
          {
            name: t('menu__referral'),
            link: '/affiliate-program',
          },
          {
            name: t('menu__co_branded_products'),
            link: '/co-branded-partnership',
          },
        ],
      },
      {
        name: t('menu__support'),
        link: '',
        list: [
          {
            name: t('menu__beginners_guide'),
            link: 'https://help.onekey.so/hc/categories/360000170236',
          },
          {
            name: t('menu__hardware_wallet_manual'),
            link: 'https://help.onekey.so/hc/articles/360002123856',
          },
        ],
      },
      {
        name: t('menu__resource'),
        link: '',
        list: [
          {
            name: t('menu__system_status'),
            link: 'https://onekeyhq.github.io/upptime',
          },
          {
            name: externalUrls.openSourceCommunity.name,
            link: externalUrls.openSourceCommunity.url,
          },
          {
            name: t('menu__media_kits'),
            link: 'https://help.onekey.so/hc/en-us/articles/360002200956',
          },
          {
            name: t('menu__privacy_agreement'),
            link: 'https://help.onekey.so/hc/en-us/articles/360002003315',
          },
          {
            name: t('menu__user_agreement'),
            link: 'https://help.onekey.so/hc/en-us/articles/360002014776',
          },
        ],
      },
    ],
  } as const;
}
