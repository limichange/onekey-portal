import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Link, Span } from '../../../base';

export interface TutorialsLinkProps {
  children?: ReactNode;
}

export const TutorialsLink: FC<TutorialsLinkProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Link to="https://help.onekey.so/hc/articles/360002123856-OneKey-Hardware-Wallet-Quick-Start-Tutorial">
      <Span
        xs={{
          color: theme.colors.brand400,
        }}
      >
        {children}
      </Span>
    </Link>
  );
};
