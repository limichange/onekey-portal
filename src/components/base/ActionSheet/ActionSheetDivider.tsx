import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Divider } from '../Divider';

export const ActionSheetDivider: FC = () => {
  const theme = useTheme();

  return <Divider color={theme.colors.test200} />;
};
