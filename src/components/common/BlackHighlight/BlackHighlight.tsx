import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../base';

export interface BlackHighlightProps {
  children?: ReactNode;
}

export const BlackHighlight: FC<BlackHighlightProps> = (props) => {
  const { children } = props;

  const theme = useTheme();

  return <Span xs={{ color: theme.colors.test500 }}>{children}</Span>;
};
