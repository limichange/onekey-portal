import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useDownloadData } from '../../../data/useDownloadData';
import { useOneKeyProduct } from '../../../data/useOneKeyProduct';
import { useShopMenu } from '../../../data/useShopMenu';

export function usePageFooterData() {
  const { t } = useTranslation();
  const oneKeyProduct = useOneKeyProduct();
  const shopMenu = useShopMenu();
  const downloadData = useDownloadData();

  return {
    media: {
      twitter: {
        url: 'https://twitter.com/OneKeyHQ',
        username: 'OneKeyHQ',
      },
      discord: {
        url: 'https://discord.gg/nwUJaTzjzv',
      },
      github: {
        url: 'https://github.com/OneKeyHQ/',
      },
      reddit: {
        url: 'https://www.reddit.com/r/OneKeyHQ/',
      },
      weibo: {
        url: 'https://weibo.com/yourKeysyourBitcoin',
      },
    },
    menuData: [
      {
        name: t('menu__products'),
        link: '',
        list: [
          {
            name: 'OneKey Mini',
            link: oneKeyProduct.mini.path,
          },
          {
            name: 'OneKey Touch',
            link: oneKeyProduct.touch.path,
          },
          {
            name: 'OneKey Lite',
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
            name: t('menu__swap'),
            link: 'https://app.onekey.so/tab/swap',
          },
          {
            name: t('menu__portfolio'),
            link: 'https://app.onekey.so',
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
            name: t('menu__open_source_community'),
            link: 'https://github.com/OneKeyHQ/OneKey-Wallet',
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
