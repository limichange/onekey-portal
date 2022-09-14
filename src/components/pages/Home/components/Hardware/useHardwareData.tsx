import { useEffect } from 'react';

import { Loader } from 'pixi.js';

import { useOneKeyProduct } from '../../../../../data/useOneKeyProduct';

import classicOutlineImage from './images/classic.svg';
import classicHover from './images/classicHover.png';
import miniOutlineImage from './images/mini.svg';
import miniHover from './images/miniHover.png';
import touchOutlineImage from './images/touch.svg';
import touchHover from './images/touchHover.png';
import { ItemProps } from './Item';

export function useHardwareData(): ItemProps[] {
  const oneKeyProduct = useOneKeyProduct();

  useEffect(() => {
    new Loader().add(miniHover).add(touchHover).load();
  }, []);
  return [
    {
      image: miniOutlineImage,
      hoverImage: miniHover,
      title: oneKeyProduct.mini.name,
      description: oneKeyProduct.mini.description,
      status: 'available',
      link: oneKeyProduct.mini.path,
    },
    {
      image: classicOutlineImage,
      title: oneKeyProduct.classic.name,
      hoverImage: classicHover,
      description: oneKeyProduct.classic.description,
      link: oneKeyProduct.classic.path,
      status: 'available',
    },
    {
      image: touchOutlineImage,
      title: oneKeyProduct.touch.name,
      hoverImage: touchHover,
      description: oneKeyProduct.touch.description,
      link: oneKeyProduct.touch.path,
      status: 'available',
    },
  ];
}
