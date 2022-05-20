import { useEffect, useRef, useState } from 'react';

import { useWindowSize } from './useWindowSize';

export function useBoundingClientRect() {
  const size = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect>();

  useEffect(() => {
    function update() {
      const innerRect = ref.current?.getBoundingClientRect();

      if (innerRect) {
        setRect(innerRect);
      }
    }

    setTimeout(() => {
      update();
    }, 16.7);

    window.addEventListener('resize', update);
    window.addEventListener('scroll', update);

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
    };
  }, [size]);

  return {
    ref,
    rect,
  };
}
