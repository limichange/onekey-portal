import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Link } from '../../../base';

import { ProductItem } from './useProductPanel';

export interface ProductPanelItemProps extends ProductItem {
  children?: ReactNode;
}

export const ProductPanelItem: FC<ProductPanelItemProps> = (props) => {
  const { children, image, name, link } = props;
  const theme = useTheme();

  return (
    <Link to={link}>
      <Box
        xs={{
          display: 'grid',
          gridGap: 4,
          width: 132,
          cursor: 'pointer',
          color: theme.colors.test500,
          transition: theme.transitions.allEase,
          ':hover': {
            opacity: 0.75,
            color: theme.colors.test300,
          },
        }}
      >
        <Box>{image}</Box>
        <Box
          xs={{
            textAlign: 'center',
            ...theme.text.medium200,
          }}
        >
          {name}
        </Box>

        {children}
      </Box>
    </Link>
  );
};
