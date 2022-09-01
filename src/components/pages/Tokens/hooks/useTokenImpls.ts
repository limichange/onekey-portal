import useSWR from 'swr';
import urlJoin from 'url-join';

import { fetcher } from '../../../../utils';

export interface TokenImpl {
  name: string;
  impl: string;
  chainId: string;
}

export function useTokenImpls() {
  return useSWR<TokenImpl[]>(urlJoin(API_URL, 'token/impls'), fetcher);
}
