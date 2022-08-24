import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useChainsData } from '../../../../data';

export function useCryptosTable() {
  const { t } = useTranslation();
  const data = useChainsData();

  return {
    thead: {
      coins: t('title__coins'),
      app: t('title__mobile_app'),
      desktop: t('title__desktop_app'),
      extension: t('menu__browser_extension'),
      mini: 'Mini & Classic',
      touch: 'Touch & Pro',
    },
    data,
  };
}
