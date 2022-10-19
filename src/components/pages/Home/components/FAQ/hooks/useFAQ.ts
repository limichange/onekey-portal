import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useFAQ() {
  const { t } = useTranslation();

  return {
    allQAs: [
      {
        question: t(
          'content__i_don_t_have_your_hardware_wallet_in_this_case_can_i_also_use_onekey_app',
        ),
        answer: t(
          'content__i_don_t_have_your_hardware_wallet_in_this_case_can_i_also_use_onekey_app_desc',
        ),
      },
      {
        question: t('content__what_cryptos_do_your_wallet_support'),
        answer: t('content__what_cryptos_do_your_wallet_support_desc'),
      },
      {
        question: t('content__does_your_wallet_support_storing_nft'),
        answer: t('content__does_your_wallet_support_storing_nft_desc'),
      },
      {
        question: t('content__where_can_i_buy_your_hardware_wallets'),
        answer: t('content__where_can_i_buy_your_hardware_wallets_desc'),
      },
      {
        question: t(
          'content__i_want_to_sell_wallets_for_you_how_can_i_apply_for_rebate',
        ),
        answer: t(
          'content__i_want_to_sell_wallets_for_you_how_can_i_apply_for_rebate_desc',
        ),
      },
      {
        question: t(
          'content__i_m_running_a_web3_project_and_want_to_do_a_co_branded_product_with_you_how_do_i_do_it',
        ),
        answer: t(
          'content__i_m_running_a_web3_project_and_want_to_do_a_co_branded_product_with_you_how_do_i_do_it_desc',
        ),
      },
    ],
  };
}
