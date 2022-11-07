import { FC, Fragment, ReactNode } from 'react';

import { Box, OnlyDisplay } from '../../../../../base';

import { BigProductCard } from './BigProductCard';
import { ProductCard } from './ProductCard';
import { useProductsData } from './useProductsData';

export interface CardsProps {
  children?: ReactNode;
}

export const Cards: FC<CardsProps> = (props) => {
  const { children } = props;
  const products = useProductsData();

  return (
    <Fragment key="cards">
      <OnlyDisplay xs s>
        <Box xs={{ display: 'grid', gap: 24 }}>
          {Object.values(products.items).map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </Box>
      </OnlyDisplay>

      <OnlyDisplay m l xl xxl>
        <Box xs={{ display: 'grid', gap: 24 }}>
          <BigProductCard {...products.items.touch} />

          <Box
            xs={{
              display: 'grid',
              gap: 24,
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <ProductCard {...products.items.classic} />
            <ProductCard {...products.items.mini} />
            <ProductCard {...products.items.lite} />
            <ProductCard {...products.items.keyTag} />
          </Box>
        </Box>
      </OnlyDisplay>

      {children}
    </Fragment>
  );
};
