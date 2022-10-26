import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Flex, SearchIcon } from '../../../../base';

export interface ChainSearchPanelSearchProps {
  children?: ReactNode;
  value: string;
  onChange: (value: string) => void;
}

export const ChainSearchPanelSearch: FC<ChainSearchPanelSearchProps> = (
  props,
) => {
  const { children, value, onChange } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Flex
      onClick={(e) => e.stopPropagation()}
      xs={{
        background: theme.colors.test100,
        borderRadius: theme.borderRadius.l,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        boxSizing: 'border-box',
        alignItems: 'center',
        display: 'block',
        // width: 225,
      }}
    >
      <SearchIcon width={20} height={20} />

      <input
        css={{
          width: '100%',
          paddingLeft: 8,
          paddingRight: 8,
          background: theme.colors.transparent,
          borderWidth: 0,
          outline: 'none',
          ...theme.text.normal300,
        }}
        value={value}
        placeholder={t('action__search')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
      />

      {children}
    </Flex>
  );
};
