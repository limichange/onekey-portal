import { useTranslation } from 'gatsby-plugin-react-i18next';

import bitcoinCoreHwiPng from './images/bitcoin-core-hwi.png';
import bitcoinCoreSpecterPng from './images/bitcoin-core-specter.png';
// import bitkeepPng from './images/bitkeep.png';
import btcpayserverPng from './images/btcpayserver.png';
import electrumDashPng from './images/electrum-dash.png';
import electrumLtcPng from './images/electrum-ltc.png';
import electrumPng from './images/electrum.png';
import etherwallPng from './images/etherwall.png';
import exodusPng from './images/exodus.png';
import imtokenPng from './images/imtoken.png';
import metamaskPng from './images/metamask.png';
import myceliumPng from './images/mycelium.png';
import myetherwalletPng from './images/myetherwallet.png';
import nanoWalletPng from './images/nano-wallet.png';
import phantomPng from './images/phantom.png';
import rainbowPng from './images/rainbow.png';
import sparrowPng from './images/sparrow.png';
import tokenpocketPng from './images/tokenpocket.png';
import trezorPng from './images/trezor.png';
import trustWalletPng from './images/trust-wallet.png';
import wasabiPng from './images/wasabi.png';
import zerionPng from './images/zerion.png';

export type CompatibilityItem = {
  type: string;
  name: string;
  url: string;
  image: string;
  tutorials?: string;
};

export function useCompatibility(): CompatibilityItem[] {
  const { t } = useTranslation();

  return [
    {
      type: t('title__open_source'),
      name: 'Trezor web wallet ',
      url: 'https://wallet.trezor.io',
      image: trezorPng,
    },
    {
      type: t('title__open_source'),
      name: 'MetaMask',
      url: 'https://metamask.io',
      image: metamaskPng,
    },
    {
      type: t('title__partly_open_source'),
      name: 'Exodus',
      url: 'https://exodus.com',
      image: exodusPng,
    },
    {
      type: t('title__open_source'),
      name: 'Bitcoin Core + Specter',
      url: 'https://specter.solutions',
      image: bitcoinCoreSpecterPng,
    },
    {
      type: t('title__open_source'),
      name: 'BTCPayServer',
      url: 'https://btcpayserver.org',
      image: btcpayserverPng,
    },
    {
      type: t('title__open_source'),
      name: 'Electrum-LTC ',
      url: 'https://electrum-ltc.org',
      image: electrumLtcPng,
    },
    {
      type: t('title__open_source'),
      name: 'Nano Wallet',
      url: 'https://nemproject.github.io/nem-docs/pages',
      image: nanoWalletPng,
    },
    {
      type: t('title__open_source'),
      name: 'Electrum',
      url: 'https://electrum.org',
      image: electrumPng,
    },
    {
      type: t('title__open_source'),
      name: 'Mycelium',
      url: 'https://wallet.mycelium.com',
      image: myceliumPng,
    },
    {
      type: t('title__partly_open_source'),
      name: 'MyEtherWallet',
      url: 'https://myetherwallet.com',
      image: myetherwalletPng,
    },
    {
      type: t('title__open_source'),
      name: 'Bitcoin Core + HWI',
      url: 'https://github.com/bitcoin-core/HWI',
      image: bitcoinCoreHwiPng,
    },
    {
      type: t('title__open_source'),
      name: 'Electrum- DASH ',
      url: 'https://electrum.dash.org',
      image: electrumDashPng,
    },
    {
      type: t('title__open_source'),
      name: 'EtherWall',
      url: 'https://etherwall.com',
      image: etherwallPng,
    },
    {
      type: t('title__open_source'),
      name: 'Trust Wallet',
      url: 'https://trustwallet.com',
      image: trustWalletPng,
    },
    {
      type: t('title__open_source'),
      name: 'Rainbow',
      url: 'https://rainbow.me',
      image: rainbowPng,
    },
    {
      type: t('title__open_source'),
      name: 'imToken',
      url: 'https://token.im',
      image: imtokenPng,
    },
    {
      type: t('title__open_source'),
      name: 'TokenPocket',
      url: 'https://tokenpocket.pro',
      image: tokenpocketPng,
    },
    {
      type: t('title__open_source'),
      name: 'Zerion',
      url: 'https://zerion.io',
      image: zerionPng,
    },
    {
      type: t('title__open_source'),
      name: 'Wasabi',
      url: 'https://wasabiwallet.io',
      image: wasabiPng,
    },
    {
      type: t('title__open_source'),
      name: 'Phantom',
      url: 'https://phantom.app',
      image: phantomPng,
    },
    {
      type: t('title__open_source'),
      name: 'Sparrow',
      url: 'https://sparrowwallet.com',
      image: sparrowPng,
    },
  ];
}
