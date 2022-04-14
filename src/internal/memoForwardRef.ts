import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  memo,
} from 'react';

export function memoForwardRef<T, P = HTMLAttributes<T>>(
  render: ForwardRefRenderFunction<T, P>,
) {
  return memo(forwardRef<T, P>(render));
}
