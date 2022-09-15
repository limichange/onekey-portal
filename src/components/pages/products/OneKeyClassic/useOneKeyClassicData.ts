import { useOneKeyProduct } from '../../../../data';

import { useFeatureSectionData } from './useFeatureSectionData';
import { useImagesIntroduction } from './useImagesIntroduction';
import { useProductInformationData } from './useProductInformationData';
import { useTechnicalSpecificationsSectionData } from './useTechnicalSpecificationsData';

export function useOneKeyClassicData() {
  const { classic } = useOneKeyProduct();
  const feature = useFeatureSectionData();
  const productInformation = useProductInformationData();
  const technicalSpecifications = useTechnicalSpecificationsSectionData();
  const imagesIntroduction = useImagesIntroduction();

  return {
    title: classic.name,
    recommends: ['mini', 'touch', 'lite'],
    feature,
    productInformation,
    technicalSpecifications,
    imagesIntroduction,
  };
}
