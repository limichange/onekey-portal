import { ERC20Contract } from '../types/ERC20Contract';

import type { MetaMaskInpageProvider } from '@metamask/providers';

export function addToWallet(
  erc20: ERC20Contract,
  chainId: string,
  text: string,
) {
  const ethereum = window.ethereum as MetaMaskInpageProvider;

  if (ethereum && Number(ethereum.chainId) === Number(chainId)) {
    ethereum
      .request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: erc20.address,
            symbol: erc20.symbol,
            decimals: erc20.decimals,
            image: erc20.logoURI,
          },
        },
      })
      .catch((e: { message: string }) => {
        alert(e.message);
      });
  } else {
    alert(text);
  }
}
