import { useOneKeyProduct } from '../../../../data';

import { useProductInformationData } from './useProductInformationData';
import { useTechnicalSpecificationsSectionData } from './useTechnicalSpecificationsData';

export function useOneKeyKeyTag() {
  const { keyTag } = useOneKeyProduct();
  const productInformation = useProductInformationData();
  const technicalSpecifications = useTechnicalSpecificationsSectionData();

  return {
    title: keyTag.name,
    recommends: ['mini', 'touch', 'lite'],
    productInformation,
    technicalSpecifications,
  };
}
