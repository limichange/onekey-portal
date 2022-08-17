import useSWR from 'swr';
import urlJoin from 'url-join';

import { fetcher } from '../utils/fetcher';

export function useEIPsData() {
  const { data } = useSWR<string[]>(urlJoin(API_URL, 'config/eips'), fetcher);

  return data;
}
