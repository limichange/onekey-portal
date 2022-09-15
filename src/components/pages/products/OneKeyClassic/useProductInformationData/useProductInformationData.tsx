import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useOneKeyProduct } from '../../../../../data';
import { useSortShopOrder } from '../../../../../hooks/useSortShopOrder';
import { ProductInformationProps } from '../../components/ProductInformation';

export function useProductInformationData(): ProductInformationProps {
  const { classic } = useOneKeyProduct();
  const { t } = useTranslation();
  const shops = useSortShopOrder([
    classic.shops.shopify,
    classic.shops.amazonGlobal,
    classic.shops.amazonJapan,
    classic.shops.youzan,
  ]);

  return {
    name: classic.name,
    status: classic.status,
    slogan: t('content__crypto_hardware_wallet'),
    description: classic.description,
    shops,
    price: {
      value: classic.price,
      formatted: classic.formattedPrice,
    },
    gallery: [
      {
        key: 'classic-gallery-00',
        node: <StaticImage alt="0" src="./images/classic-gallery-00.png" />,
      },
      {
        key: 'classic-gallery-01',
        node: <StaticImage alt="1" src="./images/classic-gallery-01.png" />,
      },
      {
        key: 'classic-gallery-02',
        node: <StaticImage alt="2" src="./images/classic-gallery-02.png" />,
      },
      {
        key: 'classic-gallery-03',
        node: <StaticImage alt="3" src="./images/classic-gallery-03.png" />,
      },
    ],
  };
}
