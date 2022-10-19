import { useState } from 'react';

import { TierResult, getGPUTier } from 'detect-gpu';

export function useGPUTier() {
  const [state, setState] = useState<TierResult>();

  if (!state) {
    getGPUTier().then((result: TierResult) => {
      setState(result);
    });
  }

  return { state, isEnergySavingMode: state?.tier === 1 };
}
