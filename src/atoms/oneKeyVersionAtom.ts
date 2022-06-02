import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { OneKeyVersion } from '../types/OneKeyVersion';

export const oneKeyVersionAtom = atomWithStorage<OneKeyVersion | undefined>(
  'oneKeyVersionAtom',
  undefined,
);

export const useOneKeyVersionAtom = () => {
  const oneKeyVersion = useAtom(oneKeyVersionAtom);
  return oneKeyVersion;
};
