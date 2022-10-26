import useSWR from 'swr';
import urlJoin from 'url-join';

import { fetcher } from '../../../../utils';

import { TokenImpl, useTokenImpls } from './useTokenImpls';

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

export function useTokenList(chain?: TokenImpl) {
  const { data } = useTokenImpls();

  const impl = chain
    ? data?.find(
        (item) =>
          item.name.toLocaleLowerCase() === chain.name.toLocaleLowerCase(),
      )
    : undefined;

  return useSWR<Token[]>(
    impl && chain
      ? urlJoin(
          API_URL,
          'token/list',
          `?chainId=${impl.chainId}&impl=${impl.impl}`,
        )
      : null,
    fetcher,
  );
}
