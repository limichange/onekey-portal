import { useEffect, useMemo } from 'react';

import { atom, useAtom } from 'jotai';

import { useMediaQuery } from '../../../../hooks';

import { TokenImpl, useTokenImpls } from './useTokenImpls';

export const currentActiveChainAtom = atom<TokenImpl | undefined>(undefined);
export const useCurrentActiveChain = () => useAtom(currentActiveChainAtom);

export const chainSearchAtom = atom<string>('');
export const useChainSearch = () => useAtom(chainSearchAtom);

export function useSelectState() {
  const [currentActiveChain, setCurrentActiveChain] = useCurrentActiveChain();
  const [chainSearch, setChainSearch] = useChainSearch();
  const { data: tokenImplsData = [] } = useTokenImpls();
  const { medium } = useMediaQuery();

  const tokenImplsDataArray: [TokenImpl[], TokenImpl[]] = useMemo(() => {
    if (tokenImplsData.length < 3) {
      return [tokenImplsData, []];
    }

    if (medium) {
      return [tokenImplsData.slice(0, 9), tokenImplsData.slice(9, 999)];
    }

    return [tokenImplsData.slice(0, 2), tokenImplsData.slice(2, 999)];
  }, [medium, tokenImplsData]);

  useEffect(() => {
    setCurrentActiveChain(tokenImplsData[0]);
  }, [tokenImplsData, setCurrentActiveChain]);

  const needShowChainAtSwitch = useMemo(
    () =>
      tokenImplsDataArray[1].findIndex(
        (item) => item.name === currentActiveChain?.name,
      ) !== -1,
    [currentActiveChain, tokenImplsDataArray],
  );

  return {
    tokenImplsData,
    tokenImplsDataArray,
    needShowChainAtSwitch,

    currentActiveChain,
    setCurrentActiveChain,

    chainSearch,
    setChainSearch,
  };
}
