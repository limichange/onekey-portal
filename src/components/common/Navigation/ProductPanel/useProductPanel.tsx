import { ReactNode, useEffect, useMemo } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { atom, useAtom } from 'jotai';

import { useOneKeyProduct } from '../../../../data/useOneKeyProduct';
import { useShopMenu } from '../../../../data/useShopMenu';

export type ProductItem = {
  key: string;
  name: string;
  link: string;
  backgroundColor: string;
  fontColor: string;
  image: ReactNode;
};

export const currentSelectedAtom = atom<ProductItem['name']>('');

export const useCurrentSelected = () => useAtom(currentSelectedAtom);

export function useProductPanel() {
  const oneKeyProduct = useOneKeyProduct();
  const theme = useTheme();
  const shopMenu = useShopMenu();

  const object = useMemo(
    () => ({
      mini: {
        key: oneKeyProduct.mini.name,
        name: oneKeyProduct.mini.name,
        link: oneKeyProduct.mini.path,
        backgroundColor: theme.colors.test100,
        fontColor: theme.colors.test500,
        image: (
          <StaticImage src="./images/nav-image-mini.png" alt="nav-image-mini" />
        ),
      },
      classic: {
        key: oneKeyProduct.classic.name,
        name: oneKeyProduct.classic.name,
        link: oneKeyProduct.classic.path,
        backgroundColor: theme.colors.test100,
        fontColor: theme.colors.test500,
        image: (
          <StaticImage
            loading="eager"
            src="./images/nav-image-classic.png"
            alt="nav-image-classic"
          />
        ),
      },
      touch: {
        key: oneKeyProduct.touch.name,
        name: oneKeyProduct.touch.name,
        link: oneKeyProduct.touch.path,
        backgroundColor: theme.colors.test200,
        fontColor: theme.colors.test500,
        image: (
          <StaticImage
            loading="eager"
            src="./images/nav-image-touch.png"
            alt="nav-image-touch"
          />
        ),
      },
      lite: {
        key: oneKeyProduct.lite.name,
        name: oneKeyProduct.lite.name,
        link: oneKeyProduct.lite.path,
        backgroundColor: theme.colors.test100,
        fontColor: theme.colors.test500,
        image: (
          <StaticImage
            loading="eager"
            src="./images/nav-image-lite.png"
            alt="nav-image-lite"
          />
        ),
      },
      keyTag: {
        key: oneKeyProduct.keyTag.name,
        name: oneKeyProduct.keyTag.name,
        link: oneKeyProduct.keyTag.path,
        backgroundColor: theme.colors.test100,
        fontColor: theme.colors.test500,
        image: (
          <StaticImage
            loading="eager"
            src="./images/nav-image-keytag.png"
            alt="nav-image-keytag"
          />
        ),
      },
      shopMenu: {
        ...shopMenu,
        link: shopMenu.path,
        backgroundColor: theme.colors.test100,
        fontColor: theme.colors.test500,
        image: (
          <StaticImage
            loading="eager"
            src="./images/nav-image-shop.png"
            alt="nav-image-shop"
          />
        ),
      },
    }),
    [oneKeyProduct, theme, shopMenu],
  );

  const items = useMemo<ProductItem[]>(
    () => [
      object.mini,
      object.classic,
      object.touch,
      object.lite,
      object.keyTag,
      object.shopMenu,
    ],
    [object],
  );

  const [currentSelected, setCurrentSelected] = useCurrentSelected();

  useEffect(() => {
    if (items[0] && !currentSelected) {
      setCurrentSelected(items[0].key);
    }
  }, [currentSelected, items, setCurrentSelected]);

  const currentSelectedProduct =
    items.find((item) => item.key === currentSelected) ||
    (items[0] as ProductItem);

  const {
    backgroundColor: currentProductBackgroundColor,
    fontColor: currentProductFontColor,
  } = currentSelectedProduct;

  return {
    object,
    items,
    currentSelected,
    setCurrentSelected,
    currentProductBackgroundColor,
    currentProductFontColor,
  };
}
