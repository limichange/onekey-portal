import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useChainsData } from '../../../../data';

export function useCryptosTable() {
  const { t } = useTranslation();
  const data = useChainsData();

  return {
    thead: {
      coins: t('title__coins').toLocaleUpperCase(),
      app: t('menu__app').toLocaleUpperCase(),
      desktop: t('title__desktop_app').toLocaleUpperCase(),
      extension: t('menu__browser_extension').toLocaleUpperCase(),
      mini: 'Mini'.toLocaleUpperCase(),
      touch: 'Touch'.toUpperCase(),
    },
    data,
  };
}
