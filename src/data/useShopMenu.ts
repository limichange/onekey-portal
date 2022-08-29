import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useShopMenu() {
  const { t } = useTranslation();

  return {
    name: t('title__view_all_products'),
    key: 'shop',
    path: '/shop',
  } as const;
}
