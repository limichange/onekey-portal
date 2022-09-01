import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Box, I18n, Span } from '../../../../base';
import { NormalCenterPageHeader } from '../../../../common';

export interface PageTitleProps {
  children?: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = (props) => {
  const { children } = props;
  const { t, i18n } = useTranslation();

  // zh_CN zh_HK
  const theme = useTheme();
  const allWordsArray = t('menu__token_list').split(' ');
  let lastWord = '';
  let otherWords = '';

  if (allWordsArray.length === 1) {
    if (i18n.language === 'zh_CN' || i18n.language === 'zh_HK') {
      lastWord = t('menu__token_list').slice(2, 5);
      otherWords = t('menu__token_list').slice(0, 2);
    } else {
      otherWords = t('menu__token_list');
    }
  } else if (allWordsArray.length > 1) {
    lastWord = allWordsArray.pop() || '';
    otherWords = `${allWordsArray.join(' ')} `;
  }

  return (
    <Box xs={{ paddingTop: 80 }}>
      <NormalCenterPageHeader
        title={
          <Span>
            {otherWords}
            <Span xs={{ color: theme.colors.brandAlt400 }}>{lastWord}</Span>
          </Span>
        }
        description={<I18n name="menu__token_list_desc" />}
      />

      {children}
    </Box>
  );
};
