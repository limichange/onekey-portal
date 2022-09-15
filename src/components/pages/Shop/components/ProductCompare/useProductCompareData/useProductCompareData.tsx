import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  ProductStatus,
  Shop,
  useOneKeyProduct,
} from '../../../../../../data/useOneKeyProduct';
import { useSortShopOrder } from '../../../../../../hooks/useSortShopOrder';

import battery from './images/battery.svg';
import bluetooth from './images/bluetooth.svg';
import buttons from './images/buttons.svg';
import control from './images/control.svg';
import display from './images/display.svg';
import display144 from './images/display144.svg';
import display31 from './images/display31.svg';
import none from './images/none.svg';
import touch from './images/touch.svg';
import usbc from './images/usbc.svg';

export type ProductCompareDetailItem = {
  name: string;
  icon?: string;
  description?: string;
  value?: string;
};

export type ProductCompareItem = {
  image: ReactNode;
  price: string;
  productDetailUrl: string;
  name: string;
  status: ProductStatus;
  shops?: Shop[];
  productCompareDetail: ProductCompareDetailItem[];
};

export function useProductCompareData(): {
  items: {
    mini: ProductCompareItem;
    classic: ProductCompareItem;
    touch: ProductCompareItem;
  };
} {
  const product = useOneKeyProduct();
  const { t } = useTranslation();
  const miniShops = useSortShopOrder([
    product.mini.shops.shopify,
    product.mini.shops.amazonGlobal,
    product.mini.shops.amazonJapan,
    product.mini.shops.youzan,
  ]);

  const classicShops = useSortShopOrder([
    product.classic.shops.shopify,
    product.classic.shops.amazonGlobal,
    product.classic.shops.amazonJapan,
    product.classic.shops.youzan,
  ]);

  return {
    items: {
      mini: {
        shops: miniShops,
        image: <StaticImage src="./images/shop-compare-mini.png" alt="mini" />,
        name: product.mini.name,
        price: product.mini.formattedPrice,
        productDetailUrl: product.mini.path,
        status: product.mini.status,
        productCompareDetail: [
          {
            name: t('title__ce_rohs_and_csprng'),
            description: t(
              'content__nist_sp_800_90_a_b_c_random_number_generator',
            ),
            value: t('content__certifications_and_standards'),
          },
          {
            name: t('title__display'),
            icon: display144,
            value: t('content__int_inch_ips_display_color', {
              value: 1.44,
            }),
          },
          {
            name: t('title__control'),
            icon: control,
            value: t('content__control_with_buttons'),
          },
          {
            name: t('title__battery'),
            icon: none,
            value: ' ',
          },
          {
            name: t('title__bluetooth'),
            icon: none,
            value: ' ',
          },
          {
            name: t('title__connector'),
            icon: usbc,
            value: t('content__usb_c_connector'),
          },
        ],
      },
      classic: {
        image: (
          <StaticImage src="./images/shop-compare-classic.png" alt="touch" />
        ),
        shops: classicShops,
        name: product.classic.name,
        price: product.classic.formattedPrice,
        productDetailUrl: product.classic.path,
        status: product.classic.status,
        productCompareDetail: [
          {
            name: t('title__ce_rohs_and_csprng'),
            description: t(
              'content__nist_sp_800_90_a_b_c_random_number_generator',
            ),
            value: t('content__certifications_and_standards'),
          },
          {
            name: t('title__display'),
            icon: display,
            value: t('content__monochrome_display'),
          },
          {
            name: t('title__control'),
            icon: buttons,
            value: t('content__control_with_buttons'),
          },
          {
            name: t('title__battery'),
            icon: battery,
            value: t('content__int_mah_battery', {
              value: 100,
            }),
          },
          {
            name: t('title__bluetooth'),
            icon: bluetooth,
            value: t('content__bluetooth'),
          },
          {
            name: t('title__connector'),
            icon: usbc,
            value: t('content__usb_c_connector'),
          },
        ],
      },
      touch: {
        image: (
          <StaticImage src="./images/shop-compare-touch.png" alt="touch" />
        ),
        name: product.touch.name,
        price: product.touch.formattedPrice,
        productDetailUrl: product.touch.path,
        status: 'comingSoon',
        productCompareDetail: [
          {
            name: t('title__ce_rohs_and_csprng'),
            description: t(
              'content__nist_sp_800_90_a_b_c_random_number_generator',
            ),
            value: t('content__certifications_and_standards'),
          },
          {
            name: t('title__display'),
            icon: display31,
            value: t('content__int_inch_ips_display_color', {
              value: 3.1,
            }),
          },
          {
            name: t('title__control'),
            icon: touch,
            value: t('content__multi_touch_screen'),
          },
          {
            name: t('title__battery'),
            icon: battery,
            value: t('content__int_mah_battery', {
              value: 800,
            }),
          },
          {
            name: t('title__bluetooth'),
            icon: bluetooth,
            value: t('content__bluetooth'),
          },
          {
            name: t('title__connector'),
            icon: usbc,
            value: t('content__usb_c_connector'),
          },
        ],
      },
    },
  };
}
