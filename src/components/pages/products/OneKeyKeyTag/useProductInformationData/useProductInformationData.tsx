import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useOneKeyProduct } from '../../../../../data';
import { useSortShopOrder } from '../../../../../hooks/useSortShopOrder';
import { ProductInformationProps } from '../../components/ProductInformation';

export function useProductInformationData(): ProductInformationProps {
  const { keyTag } = useOneKeyProduct();
  const { t } = useTranslation();
  const shops = useSortShopOrder([
    keyTag.shops.shopify,
    keyTag.shops.amazonGlobal,
    keyTag.shops.amazonJapan,
    keyTag.shops.youzan,
  ]);

  return {
    name: keyTag.name,
    status: keyTag.status,
    slogan: t('title__cryptocurrency_hardware_accessories'),
    description: keyTag.description,
    shops,
    price: {
      value: keyTag.price,
      formatted: keyTag.formattedPrice,
    },
    gallery: [
      {
        key: 'keytag-gallery-00',
        node: <StaticImage alt="0" src="./images/keytag-gallery-01.png" />,
      },
      {
        key: 'keytag-gallery-01',
        node: <StaticImage alt="1" src="./images/keytag-gallery-02.png" />,
      },
      {
        key: 'keytag-gallery-02',
        node: <StaticImage alt="2" src="./images/keytag-gallery-03.png" />,
      },
      {
        key: 'keytag-gallery-03',
        node: <StaticImage alt="3" src="./images/keytag-gallery-04.png" />,
      },
    ],
  };
}
