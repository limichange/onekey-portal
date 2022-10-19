import { useCallback, useEffect, useState } from 'react';

export function useKeyPress(targetKey: string, callback: () => void) {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  const downHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        setKeyPressed(true);
        callback();
      }
    },
    [callback, targetKey],
  );

  const upHandler = useCallback(
    (e: KeyboardEvent) => {
      console.log('e.key', e.key);

      if (e.key === targetKey) {
        setKeyPressed(false);
        callback();
      }
    },
    [callback, targetKey],
  );

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
}
