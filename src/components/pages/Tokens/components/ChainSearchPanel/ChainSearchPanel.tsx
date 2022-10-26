import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Box, I18n } from '../../../../base';
import { TokenImpl } from '../../hooks/useTokenImpls';

import { ChainSearchPanelSearch } from './ChainSearchPanelSearch';
import { SwitchItem } from './SwitchItem';

export interface ChainSearchPanelProps {
  children?: ReactNode;
  chains: TokenImpl[];
  onChange?: (value: TokenImpl) => void;
  value?: TokenImpl;
}

export const ChainSearchPanel: FC<ChainSearchPanelProps> = (props) => {
  const { children, chains, value, onChange } = props;
  const [searchInputValue, setSearchInputValue] = useState('');
  const theme = useTheme();

  const filterData = chains.filter(
    (chain) =>
      chain.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      !searchInputValue,
  );

  return (
    <Box
      xs={{
        display: 'grid',
        gridGap: 8,
        padding: 8,
        background: theme.colors.white,
      }}
    >
      <ChainSearchPanelSearch
        value={searchInputValue}
        onChange={setSearchInputValue}
      />

      <Box
        xs={{
          display: 'grid',
          gridGap: 8,
          paddingRight: filterData.length > 6 ? 8 : 0,
          maxHeight: 300,
          overflow: 'auto',
          '::-webkit-scrollbar': {
            width: 8,
          },
          '::-webkit-scrollbar-track': {
            background: 'white',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: theme.colors.test200,
            borderRadius: 12,
          },
        }}
      >
        {filterData.map((chain) => (
          <SwitchItem
            icon={chain.icon}
            key={chain.name}
            active={value?.name === chain.name}
            onClick={() => onChange?.(chain)}
          >
            {chain.name}
          </SwitchItem>
        ))}

        {filterData.length === 0 && (
          <Box xs={{ textAlign: 'center', height: 30, lineHeight: '30px' }}>
            <I18n name="content__no_results" />
          </Box>
        )}
      </Box>

      {children}
    </Box>
  );
};
