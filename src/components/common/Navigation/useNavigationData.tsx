import { ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  useDownloadData,
  useExternalUrls,
  useOneKeyProduct,
} from '../../../data';
import { useShopMenu } from '../../../data/useShopMenu';

import chainsSvgUrl from './images/chains.svg';
import eipsSvgUrl from './images/eips.svg';
import evmSvgUrl from './images/evm.svg';
import portfolioSvgUrl from './images/portfolio.svg';
import recoverySvgUrl from './images/recovery-phrase-converter.svg';
import swapSvgUrl from './images/swap.svg';
import tokenlistSvgUrl from './images/tokenlist.svg';
import { ProductPanelMobile } from './ProductPanel/ProductPanelMobile';

export type NavigationDataItem = {
  name: string;
  key: string;
  path?: string;
  icon?: string;
  description?: string;
  language?: string;
  subItems?: NavigationDataItem[];
  component?: ReactNode;
};

export function useNavigationDataObject(): Record<
  | 'products'
  | 'app'
  | 'services'
  | 'security'
  | 'forDeveloper'
  | 'forBusiness'
  | 'helpCenter',
  NavigationDataItem
> {
  const oneKeyProduct = useOneKeyProduct();
  const { t } = useTranslation();
  const shopMenu = useShopMenu();
  const downloadData = useDownloadData();
  const externalUrls = useExternalUrls();

  const products = {
    name: t('menu__products'),
    key: 'products',
    component: <ProductPanelMobile />,
    subItems: [
      {
        name: oneKeyProduct.mini.name,
        key: oneKeyProduct.mini.name,
        path: oneKeyProduct.mini.path,
      },
      {
        name: oneKeyProduct.classic.name,
        key: oneKeyProduct.classic.name,
        path: oneKeyProduct.classic.path,
      },
      {
        name: oneKeyProduct.touch.name,
        key: oneKeyProduct.touch.name,
        path: oneKeyProduct.touch.path,
      },
      {
        name: oneKeyProduct.lite.name,
        key: oneKeyProduct.lite.name,
        path: oneKeyProduct.lite.path,
      },
      {
        name: oneKeyProduct.keyTag.name,
        key: oneKeyProduct.keyTag.name,
        path: oneKeyProduct.keyTag.path,
      },
      shopMenu,
    ],
  };

  const app = {
    name: t('menu__app'),
    key: 'app',
    subItems: [
      {
        name: downloadData.desktop.name,
        key: downloadData.desktop.name,
        path: downloadData.desktop.path,
      },
      {
        name: downloadData.mobile.name,
        key: downloadData.mobile.name,
        path: downloadData.mobile.path,
      },
      {
        name: downloadData.browserExtension.name,
        key: downloadData.browserExtension.name,
        path: downloadData.browserExtension.path,
      },
      {
        name: downloadData.bridge.name,
        key: downloadData.bridge.name,
        path: downloadData.bridge.path,
      },
      {
        name: downloadData.web.name,
        key: downloadData.web.name,
        path: downloadData.web.path,
      },
    ],
  };

  const services = {
    name: t('menu__services'),
    key: 'services',
    subItems: [
      {
        name: externalUrls.swap.name,
        key: 'swap',
        description: externalUrls.swap.description,
        path: externalUrls.swap.url,
        icon: swapSvgUrl,
      },
      {
        name: externalUrls.portfolio.name,
        key: 'portfolio',
        description: externalUrls.portfolio.description,
        path: externalUrls.portfolio.url,
        icon: portfolioSvgUrl,
      },
      {
        name: t('menu__token_list'),
        key: 'tokens',
        description: t('menu__token_list_desc'),
        path: '/tokens',
        icon: tokenlistSvgUrl,
      },
      {
        name: t('menu__supported_chains'),
        key: 'cryptos',
        description: t('menu__supported_chains_desc'),
        path: '/cryptos',
        icon: chainsSvgUrl,
      },
      {
        name: 'EIPs',
        key: 'eips',
        description: t('menu__eips_desc'),
        path: '/eips',
        icon: eipsSvgUrl,
      },
      {
        name: t('menu__recovery_phrase_converter'),
        key: 'recovery-phrase-converter',
        description: t('menu__recovery_phrase_converter_desc'),
        path: 'https://bip39.onekey.so/',
        icon: recoverySvgUrl,
      },
      {
        name: t('menu__evm_chain_list'),
        key: 'evm-chain-list',
        description: t('menu__evm_chain_list_desc'),
        path: 'https://chainlist.onekey.so/',
        icon: evmSvgUrl,
      },
    ],
  };

  const security = {
    name: t('menu__security'),
    key: 'security',
    subItems: [
      {
        name: t('title__why_onekey'),
        key: t('title__why_onekey'),
        path: '/why',
      },
      {
        name: t('title__security_architecture'),
        key: t('title__security_architecture'),
        path: '/security',
      },
    ],
  };

  const forDeveloper = {
    name: t('menu__developer'),
    key: 'for-developer',
    path: 'https://developer.onekey.so/',
  };

  const forBusiness = {
    name: t('menu__solutions'),
    key: 'for-business',
    subItems: [
      {
        name: t('menu__enterprise_solutions'),
        key: 'enterprise-solutions',
        path: '/enterprise',
      },
      {
        name: t('menu__referral'),
        key: 'referral',
        path: '/affiliate-program',
      },
      {
        name: t('menu__co_branded_products'),
        key: 'co-branded-products',
        path: '/co-branded-partnership',
      },
    ],
  };

  const helpCenter = {
    name: t('menu__support'),
    key: 'help-center',
    path: externalUrls.helpCenter.url,
  };

  return {
    products,
    app,
    services,
    security,
    forDeveloper,
    forBusiness,
    helpCenter,
  };
}

export function useNavigationData(): NavigationDataItem[] {
  const object = useNavigationDataObject();

  return [
    object.products,
    object.app,
    object.services,
    object.security,
    object.forDeveloper,
    object.forBusiness,
    object.helpCenter,
  ];
}
