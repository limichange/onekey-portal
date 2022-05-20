import { useSpring, useTransform } from 'framer-motion';

import { useElementInViewportProgress } from './useElementInViewportProgress';

type Config = {
  from: number;
  to: number;
  top?: number;
  bottom?: number;
  label?: string;
  defaultProgress?: number;
};

export function usePositionAnimation(config: Config) {
  const { from, to, defaultProgress = 0 } = config;
  const { ref, elementInViewportProgress } =
    useElementInViewportProgress(defaultProgress);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0, 0.5, 1.2, 2],
    [from, to, to, from],
  );

  const springValue = useSpring(motionValue);

  return {
    ref,
    motionValue,
    springValue,
  };
}
