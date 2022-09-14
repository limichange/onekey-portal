import { FC, ReactNode } from 'react';

import { Flex } from '../../../../../base';

import {
  ImageIntroductionItem,
  ImageIntroductionItemProps,
} from './ImageIntroductionItem';

export interface ImageIntroductionProps {
  children?: ReactNode;
  items?: ImageIntroductionItemProps[];
}

export const ImageIntroduction: FC<ImageIntroductionProps> = (props) => {
  const { children, items = [] } = props;

  return (
    <Flex xs={{ flexDirection: 'column', gap: 20 }} m={{ gap: 40 }}>
      {items.map((item) => (
        <ImageIntroductionItem {...item} key={JSON.stringify(item.name)} />
      ))}
      {children}
    </Flex>
  );
};
