import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Box, DynamicContent } from '../../../../../base';
import { BrandHighlight } from '../../../../../common';

export interface WhatMakesOneKeyDifferentTitleProps {
  children?: ReactNode;
}

export const WhatMakesOneKeyDifferentTitle: FC<
  WhatMakesOneKeyDifferentTitleProps
> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      xs={{
        color: theme.colors.test500,
        ...theme.text.medium800,
      }}
      m={theme.text.medium900}
      xl={theme.text.medium1000}
      xxl={theme.text.medium1100}
    >
      <DynamicContent
        jsx={t('title__what_makes_onekey_different')}
        components={{ Highlight: BrandHighlight }}
      />
      {children}
    </Box>
  );
};
