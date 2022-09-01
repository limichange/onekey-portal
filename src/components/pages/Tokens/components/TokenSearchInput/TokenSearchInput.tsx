import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Flex, SearchIcon } from '../../../../base';

export interface TokenSearchInputProps {
  children?: ReactNode;
  value: string;
  onChange: (value: string) => void;
}

export const TokenSearchInput: FC<TokenSearchInputProps> = (props) => {
  const { children, value, onChange } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Flex
      xs={{
        background: theme.colors.test200,
        borderRadius: theme.borderRadius.l,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
      }}
    >
      <SearchIcon width={20} height={20} />

      <input
        css={{
          flex: 1,
          paddingLeft: 8,
          background: theme.colors.transparent,
          borderWidth: 0,
          outline: 'none',
          ...theme.text.normal300,
        }}
        value={value}
        placeholder={t('content__search_for_the_token_you_want')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
      />

      {children}
    </Flex>
  );
};
