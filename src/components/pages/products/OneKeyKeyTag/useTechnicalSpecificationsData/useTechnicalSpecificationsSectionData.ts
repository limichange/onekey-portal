import { useTranslation } from 'gatsby-plugin-react-i18next';

import normalImageUrl from './images/technical_img_keytag.png';

export function useTechnicalSpecificationsSectionData() {
  const { t } = useTranslation();

  return {
    title: t('title__technical_specifications'),
    images: {
      largeImageUrl: normalImageUrl,
      mediumImageUrl: normalImageUrl,
      smallImageUrl: normalImageUrl,
    },
    content: {
      left: [
        {
          title: t('title__size_and_weight'),
          content: [
            {
              title2: t('title__size'),
              description: '36 x 33.5 x 3 (mm)',
            },
            {
              title2: t('title__weight'),
              description: '14g',
            },
          ],
        },
        {
          title: t('title__materials'),
          content: [
            {
              description: t('content__titanium_alloy_tc4'),
            },
          ],
        },
      ],
      right: [
        {
          title: t('title__compatibility'),
          content: [
            {
              descriptions: ['iOS', 'Android', 'Windows', 'macOS ', 'Linux '],
            },
          ],
        },

        {
          title: t('title__in_the_box'),
          content: [
            {
              descriptions: [
                t('content__int_keytag_plate', { value: 2 }),
                t('content__int_automatic_center_punch', { value: 1 }),
                t('content__int_setup_guide', { value: 1 }),
              ],
            },
          ],
        },
      ],
    },
  };
}
