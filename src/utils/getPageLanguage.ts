import { isBrowser } from '.';

import browserLang from 'browser-lang';

export function getPageLanguage(): string {
  if (!isBrowser()) return 'en';

  const detected =
    localStorage.getItem('language') ||
    browserLang({
      languages: ['en', 'zh'],
      fallback: 'en',
    }) ||
    'en';

  return detected;
}
