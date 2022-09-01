import { FC, ReactNode } from 'react';

import { useTheme } from '../../../../../theme';
import { Box, I18n } from '../../../../base';

export interface TokenNotFoundProps {
  children?: ReactNode;
}

export const TokenNotFound: FC<TokenNotFoundProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        textAlign: 'center',
        ...theme.text.medium400,
      }}
    >
      <I18n name="content__tokens_not_found" />
      {children}
    </Box>
  );
};
