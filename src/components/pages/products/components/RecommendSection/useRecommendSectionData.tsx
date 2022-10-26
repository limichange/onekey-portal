import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import {
  ProductStatus,
  useOneKeyProduct,
} from '../../../../../data/useOneKeyProduct';

import classicImage from './images/classic.svg';
import LiteImage from './images/lite.svg';
import MiniImage from './images/mini.svg';
import ProImage from './images/pro.svg';
import TouchImage from './images/touch.svg';

export type RecommendSectionDataItem = {
  name: string;
  description: string;
  price: number | string;
  formattedPrice: string;
  image: string;
  hoverImage: ReactNode;
  path: string;
  status: ProductStatus;
};

export function useRecommendSectionData(): {
  items: RecommendSectionDataItem[];
} {
  const oneKeyProduct = useOneKeyProduct();

  return {
    items: [
      {
        ...oneKeyProduct.mini,
        image: MiniImage,
        hoverImage: <StaticImage src="./images/miniHover.png" alt="mini" />,
      },
      {
        ...oneKeyProduct.touch,
        image: TouchImage,
        hoverImage: <StaticImage src="./images/touchHover.png" alt="mini" />,
      },
      {
        ...oneKeyProduct.pro,
        image: ProImage,
        hoverImage: <StaticImage src="./images/proHover.png" alt="mini" />,
      },
      {
        ...oneKeyProduct.lite,
        image: LiteImage,
        hoverImage: <StaticImage src="./images/liteHover.png" alt="mini" />,
      },
      {
        ...oneKeyProduct.classic,
        image: classicImage,
        hoverImage: <StaticImage src="./images/classicHover.png" alt="mini" />,
      },
    ],
  };
}
