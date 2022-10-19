import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { I18n, P } from '../../../../base';

export interface LogoWallTitleProps {
  children?: ReactNode;
}

export const LogoWallTitle: FC<LogoWallTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <P
      xs={{
        textAlign: 'center',
        color: theme.colors.test500,
        ...theme.text.medium400,
      }}
      l={theme.text.medium500}
      xxl={theme.text.medium600}
    >
      <I18n name="title__your_choice_is_the_same_as_theirs" />

      {children}
    </P>
  );
};
