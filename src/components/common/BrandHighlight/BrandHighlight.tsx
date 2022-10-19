import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../base';

export interface BrandHighlightProps {
  children?: ReactNode;
}

export const BrandHighlight: FC<BrandHighlightProps> = (props) => {
  const { children } = props;

  const theme = useTheme();

  return <Span xs={{ color: theme.colors.brand400 }}>{children}</Span>;
};
