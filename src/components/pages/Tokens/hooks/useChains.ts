export function useChains() {
  return {
    bsc: {
      type: 'BSC',
      base: 'https://bscscan.com',
      chainId: '0x38',
    },
    eth: {
      type: 'ETH',
      base: 'https://etherscan.com',
      chainId: '0x1',
    },
    heco: {
      type: 'HECO',
      base: 'https://hecoinfo.com',
      chainId: '0x80',
    },
  };
}
