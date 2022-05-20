import { FC, ReactNode } from 'react';

export interface HiddenProps {
  children?: ReactNode;
}

export const Hidden: FC<HiddenProps> = (props) => {
  const { children } = props;

  return <div>Hidden {children}</div>;
};
