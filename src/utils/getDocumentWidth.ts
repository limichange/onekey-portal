import { isBrowser } from './isBrowser';

export function getDocumentWidth(): number {
  if (isBrowser()) {
    return window.innerWidth;
  }
  return 0;
}
