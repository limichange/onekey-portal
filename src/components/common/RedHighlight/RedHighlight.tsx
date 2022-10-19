import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../base';

export interface RedHighlightProps {
  children?: ReactNode;
}

export const RedHighlight: FC<RedHighlightProps> = (props) => {
  const { children } = props;

  const theme = useTheme();

  return <Span xs={{ color: theme.colors.red }}>{children}</Span>;
};
