import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { splitMultiline, staticAssetPrefix } from '../../../../../utils';
import { ImageIntroductionItemProps } from '../../components';

export function useImagesIntroduction() {
  const { t } = useTranslation();

  // 1

  const ultraLight = t('title__ultra_light');
  const ultraLightDesc = t('title__ultra_light_desc');
  const ultraLightImage = (
    <StaticImage src="./images/classic-mobile-item-00.jpg" alt={ultraLight} />
  );
  const ultraLightFrames = new Array(75)
    .fill(0)
    .map((_, i) =>
      staticAssetPrefix(
        `/1920-onekey-classic-feature-01/onekey-classic-feature-01_${(i + 1)
          .toString()
          .padStart(4, '0')}.webp`,
      ),
    );

  const ultraLightItem: ImageIntroductionItemProps = {
    name: ultraLight,
    description: ultraLightDesc,
    videoLoop: false,
    videoAutoPlay: false,
    images: {
      s: ultraLightImage,
      m: ultraLightImage,
      l: ultraLightImage,
    },
    type: 'video',
    video: '/video/onekey-classic-feature-01-compressed.mp4',
    frames: ultraLightFrames,
  };

  // 2

  const bluetoothBatter = t('title__bluetooth_battery_it_comes_with_it_all');
  const bluetoothBatterDesc = t(
    'title__bluetooth_battery_it_comes_with_it_all_desc',
  );
  const bluetoothBatterImage = (
    <StaticImage
      src="./images/classic-mobile-item-01.jpg"
      alt={bluetoothBatter}
    />
  );
  const bluetoothBatterFrames = new Array(60)
    .fill(0)
    .map((_, i) =>
      staticAssetPrefix(
        `/1920-onekey-classic-feature-02/onekey-classic-feature-02_${(i + 1)
          .toString()
          .padStart(4, '0')}.webp`,
      ),
    );

  const bluetoothBatterItem: ImageIntroductionItemProps = {
    type: 'video',
    video: '/video/onekey-classic-feature-02-compressed.mp4',
    videoLoop: false,
    videoAutoPlay: false,
    name: splitMultiline(bluetoothBatter),
    description: bluetoothBatterDesc,
    images: {
      s: bluetoothBatterImage,
      m: bluetoothBatterImage,
      l: bluetoothBatterImage,
    },
    frames: bluetoothBatterFrames,
  };

  // 3

  const ultraSecurity = t('title__ultra_security');
  const ultraSecurityDesc = t('title__ultra_security_desc');
  const ultraSecurityImage = (
    <StaticImage
      src="./images/classic-mobile-item-02.jpg"
      alt={ultraSecurity}
    />
  );
  const ultraSecurityLargeImage = (
    <StaticImage src="./images/classic-large-item-02.jpg" alt={ultraSecurity} />
  );

  const ultraSecurityItem = {
    name: splitMultiline(ultraSecurity),
    description: ultraSecurityDesc,
    images: {
      s: ultraSecurityImage,
      m: ultraSecurityImage,
      l: ultraSecurityLargeImage,
      xl: ultraSecurityLargeImage,
      xxl: ultraSecurityLargeImage,
    },
  };

  // 4

  const allPlatformSupport = t('title__all_platform_support');
  const allPlatformSupportDesc = t('title__all_platform_support_desc');
  const allPlatformSupportImage = (
    <StaticImage
      src="./images/classic-mobile-item-03.jpg"
      alt={allPlatformSupport}
    />
  );
  const allPlatformSupportLargeImage = (
    <StaticImage
      src="./images/classic-large-item-03.jpg"
      alt={allPlatformSupport}
    />
  );

  const allPlatformSupportItem: ImageIntroductionItemProps = {
    name: splitMultiline(allPlatformSupport),
    description: allPlatformSupportDesc,
    images: {
      s: allPlatformSupportImage,
      m: allPlatformSupportImage,
      l: allPlatformSupportLargeImage,
      xl: allPlatformSupportLargeImage,
    },
  };

  return {
    array: [
      ultraLightItem,
      bluetoothBatterItem,
      ultraSecurityItem,
      allPlatformSupportItem,
    ],
    object: {
      ultraLightItem,
      bluetoothBatterItem,
      ultraSecurityItem,
      allPlatformSupportItem,
    },
  };
}
