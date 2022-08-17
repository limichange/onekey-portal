import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useCryptos() {
  const { t } = useTranslation();

  return {
    mainTitle: {
      title: t('title__onekey_crypto_assets'),
      subtitle: t('title__support_list'),
      description: t('title__support_list_desc', {
        email: 'hi@onekey.so',
      }),
    },
  };
}
