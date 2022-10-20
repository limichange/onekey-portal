import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { I18n, Link, Span } from '../../../base';

export interface TutorialsProps {
  children?: ReactNode;
  url: string;
}

export const Tutorials: FC<TutorialsProps> = (props) => {
  const { children, url } = props;
  const theme = useTheme();

  return (
    <Link to={url}>
      <Span
        xs={{
          color: theme.colors.brand400,
        }}
      >
        <I18n name="title__tutorials" /> → {children}
      </Span>
    </Link>
  );
};
