import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useEIPsData } from '../../../data';

import { EIPs } from './eipsList';
import {
  hardwareWalletSupports,
  mobileAppSupports,
  useSuggestList,
} from './suggestList';

export function useEIPs() {
  const result = useEIPsData();
  const suggestList = useSuggestList(result || []);
  const { t } = useTranslation();

  return {
    mainTitle: {
      title: t('title__ethereum_improvement_proposals'),
      subtitle: 'EIPs',
      description: t('title__ethereum_improvement_proposals_desc'),
    },
    thead: {
      EIPs: 'EIPs',
      mobileApp: t('title__mobile_app').toLocaleUpperCase(),
      hardwareWallet: t('menu__hardware_device').toLocaleUpperCase(),
    },
    EIPs,
    mobileAppSupports,
    hardwareWalletSupports,
    suggestList,
  };
}
