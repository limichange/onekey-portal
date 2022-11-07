import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Link } from '../../../base';

import { ProductPanelItem } from './ProductPanelItem';
import { useProductPanel } from './useProductPanel';

export interface ProductPanelMobileProps {
  children?: ReactNode;
}

export const ProductPanelMobile: FC<ProductPanelMobileProps> = (props) => {
  const { children } = props;
  const { object } = useProductPanel();
  const theme = useTheme();

  return (
    <Box
      xs={{ paddingTop: 32, paddingBottom: 32, display: 'grid', gridGap: 24 }}
    >
      <Box
        xs={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          alignItems: 'center',
          justifyItems: 'center',
          gridGap: 24,
        }}
        m={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {[
          object.mini,
          object.classic,
          object.touch,
          object.lite,
          object.keyTag,
        ].map((item) => (
          <ProductPanelItem {...item} />
        ))}
      </Box>

      <Divider color={theme.colors.test100} />

      <Link to={object.shopMenu.link}>
        <Box
          xs={{
            ...theme.text.medium200,
            color: theme.colors.test500,
            textAlign: 'center',
          }}
        >
          {object.shopMenu.name}
        </Box>
      </Link>

      {children}
    </Box>
  );
};
