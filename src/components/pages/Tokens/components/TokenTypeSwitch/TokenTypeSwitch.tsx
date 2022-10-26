import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';
import { useSelectState } from '../../hooks/useSelectState';
import { SelectMoreChainsButton } from '../SelectMoreChainsButton';

import { SwitchItem } from './SwitchItem';

export interface TokenTypeSwitchProps {
  children?: ReactNode;
}

export const TokenTypeSwitch: FC<TokenTypeSwitchProps> = (props) => {
  const { children } = props;
  const { currentActiveChain, setCurrentActiveChain, tokenImplsDataArray } =
    useSelectState();

  return (
    <Box
      xs={{
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
      m={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
      l={{ gridTemplateColumns: 'repeat(10, 1fr)' }}
    >
      {tokenImplsDataArray[0].map((chain) => (
        <SwitchItem
          icon={chain.icon}
          key={chain.name}
          active={currentActiveChain?.name === chain.name}
          onClick={() => setCurrentActiveChain(chain)}
        >
          {chain.name}
        </SwitchItem>
      ))}

      <SelectMoreChainsButton />

      {children}
    </Box>
  );
};
