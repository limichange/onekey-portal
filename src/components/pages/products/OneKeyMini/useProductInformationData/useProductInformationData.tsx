import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useOneKeyProduct } from '../../../../../data';
import { useSortShopOrder } from '../../../../../hooks/useSortShopOrder';
import { ProductInformationProps } from '../../components/ProductInformation';

export function useProductInformationData(): ProductInformationProps {
  const { mini } = useOneKeyProduct();
  const { t } = useTranslation();
  const shops = useSortShopOrder(Object.values(mini.shops));

  return {
    status: mini.status,
    shops,
    name: mini.name,
    slogan: t('content__crypto_hardware_wallet'),
    description: t('content__onekey_mini_product_desc'),
    price: {
      value: mini.price,
      formatted: mini.formattedPrice,
    },
    gallery: [
      {
        key: 'mini-gallery-01',
        node: <StaticImage alt="1" src="./images/mini-gallery-01.png" />,
      },
      {
        key: 'mini-gallery-02',
        node: <StaticImage alt="2" src="./images/mini-gallery-02.png" />,
      },
      {
        key: 'mini-gallery-03',
        node: <StaticImage alt="3" src="./images/mini-gallery-03.png" />,
      },
      {
        key: 'mini-gallery-04',
        node: <StaticImage alt="4" src="./images/mini-gallery-04.png" />,
      },
      {
        key: 'mini-gallery-05',
        node: <StaticImage alt="5" src="./images/mini-gallery-05.png" />,
      },
    ],
  };
}
