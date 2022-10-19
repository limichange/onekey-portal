import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Logo, Span } from '../../../../../../base';

export const OneKeyLogo: FC = () => {
  const theme = useTheme();

  return (
    <Span
      className="logo"
      xs={{
        width: 40,
        color: theme.colors.brand400,
        display: 'inline-block',
        marginBottom: -10,
        marginRight: 2,
        marginLeft: 6,
      }}
      l={{
        width: 64,
        marginBottom: -14,
      }}
      xxl={{
        width: 64,
        marginBottom: -10,
      }}
    >
      <Logo as="span" />
    </Span>
  );
};
