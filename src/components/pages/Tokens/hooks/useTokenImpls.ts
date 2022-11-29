import useSWR from 'swr';
import urlJoin from 'url-join';

import { fetcher } from '../../../../utils';

export interface TokenImpl {
  name: string;
  impl: string;
  chainId: string;
  icon: string;
  base: string;
}

export function useTokenImpls() {
  const { data, ...others } = useSWR<TokenImpl[]>(
    urlJoin(API_URL, 'token/impls'),
    fetcher,
  );

  return {
    data: data?.filter((item) => item.impl.toLocaleLowerCase() === 'evm') || [],
    ...others,
  };
}
