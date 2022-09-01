import useSWR from 'swr';
import urlJoin from 'url-join';

import { fetcher } from '../../../../utils';
import { Chain } from '../types/Chain';

import { useTokenImpls } from './useTokenImpls';

export interface Token {
  id: string;
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  logoUri: string;
  impl: string;
  verified: boolean;
  security: boolean;
  addToIndex: boolean;
  chainId: string;
  source: string[];
  checked: boolean;
  coingeckoId?: string;
  swftId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  marketCap?: number;
}

export function useTokenList(chain: Chain) {
  const { data } = useTokenImpls();

  const impl = data?.find(
    (item) => item.name.toLocaleLowerCase() === chain.type.toLocaleLowerCase(),
  );

  return useSWR<Token[]>(
    impl
      ? urlJoin(
          API_URL,
          'token/list',
          `?chainId=${impl.chainId}&impl=${impl.impl}`,
        )
      : null,
    fetcher,
  );
}
