import { FC, ReactNode } from 'react';

export interface BoldHighlightProps {
  children?: ReactNode;
}

export const BoldHighlight: FC<BoldHighlightProps> = (props) => {
  const { children } = props;

  return <b>{children}</b>;
};
