import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useWhatOurUsersSay() {
  const { t } = useTranslation();

  const first = {
    user: t('content__vincent_partner_of_sky9_capital'),
    content: t('content__user_say_0'),
  };

  return {
    first,
    others: [
      {
        user: t('content__bitfish_founder_of_cobo'),
        content: t('content__user_say_1'),
      },
      {
        user: t('content__chaoji_founder_of_benmo'),
        content: t('content__user_say_2'),
      },
      {
        user: t('content__tyler_xiong_austrian_economist'),
        content: t('content__user_say_3'),
      },
      {
        user: t('content__daniel_lv_co_founder_of_nervos'),
        content: t('content__user_say_4'),
      },
      {
        user: t('content__jia_fang_staking_manager_of_binance'),
        content: t('content__user_say_5'),
      },
      {
        user: t('content__charles_jia_core_solidity_developer_at_amber'),
        content: t('content__user_say_6'),
      },
      {
        user: t('content__vicodinxyz_family_office_manager'),
        content: t('content__user_say_7'),
      },
    ],
  };
}
