import { RefObject, useState } from 'react';

import { useScroll, useTransform } from 'framer-motion';

import { TextContainerStatus } from './TextContainer';

export function useStatusUpdate(
  containerRef: RefObject<HTMLElement>,
  percent = 0.3,
) {
  const [status, setStatus] = useState<TextContainerStatus>('ready');

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef,
    offset: ['center end', 'center start'],
  });

  useTransform(scrollYProgress2, (value) => {
    if (value > percent && status === 'ready') {
      setStatus('play');
    }
  });

  return {
    status,
  };
}
