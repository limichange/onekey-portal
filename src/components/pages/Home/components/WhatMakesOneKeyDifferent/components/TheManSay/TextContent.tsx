import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Box, DynamicContent } from '../../../../../../base';
import { BrandHighlight } from '../../../../../../common';

export interface TextContentProps {
  children?: ReactNode;
}

export const TextContent: FC<TextContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      xs={{
        textAlign: 'center',
        color: theme.colors.test500,
        ...theme.text.medium600,
      }}
      l={theme.text.medium700}
      xl={theme.text.medium800}
      xxl={theme.text.medium900}
    >
      <DynamicContent
        jsx={t('content__the_man_say')}
        components={{ Highlight: BrandHighlight }}
      />

      {children}
    </Box>
  );
};
