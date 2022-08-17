import useSWR from 'swr';
import urlJoin from 'url-join';

import { fetcher } from '../utils/fetcher';

export interface Chain {
  name: string;
  icon: string;
  support: Support;
}

export interface Support {
  app: boolean;
  desktop: boolean;
  extension: boolean;
  classic: boolean;
  mini: boolean;
  touch: boolean;
}

export function useChainsData() {
  const { data } = useSWR<Chain[]>(urlJoin(API_URL, 'config/chains'), fetcher);

  return data || [];
}
