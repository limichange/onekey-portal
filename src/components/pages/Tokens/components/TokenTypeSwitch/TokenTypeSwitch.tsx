import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../base';
import { useChains } from '../../hooks/useChains';
import { Chain } from '../../types/Chain';

import { SwitchItem } from './SwitchItem';

export interface TokenTypeSwitchProps {
  children?: ReactNode;
  onChange?: (value: Chain) => void;
  value: Chain;
}

export const TokenTypeSwitch: FC<TokenTypeSwitchProps> = (props) => {
  const { children, value, onChange } = props;
  const theme = useTheme();
  const chains = useChains();

  return (
    <Box
      xs={{
        display: 'flex',
        gap: 8,
        padding: 4,
        background: theme.colors.test200,
        borderRadius: theme.borderRadius.l,
      }}
    >
      {Object.values(chains).map((chain) => (
        <SwitchItem
          key={chain.type}
          active={value.type === chain.type}
          onClick={() => onChange?.(chain)}
        >
          {chain.type}
        </SwitchItem>
      ))}

      {children}
    </Box>
  );
};
