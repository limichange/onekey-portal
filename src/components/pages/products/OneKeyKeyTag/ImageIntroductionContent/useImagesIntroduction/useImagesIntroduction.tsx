import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useImagesIntroduction() {
  const { t } = useTranslation();

  const item1title = t(
    'title__small_the_smallest_of_the_small_incredibly_tiny',
  );
  const item1desc = t(
    'title__small_the_smallest_of_the_small_incredibly_tiny_desc',
  );
  const item1MobileImage = (
    <StaticImage src="./images/key-tag-intro-mobile-01.jpg" alt={item1title} />
  );
  const item1DesktopImage = (
    <StaticImage src="./images/key-tag-intro-desktop-01.jpg" alt={item1title} />
  );
  const item1 = {
    item1title,
    item1desc,
    item1MobileImage,
    item1DesktopImage,
  };

  const item2title = t(
    'title__aerospace_grade_titanium_alloy_fire_resistance_raised_to_1668',
  );
  const item2desc = t(
    'title__aerospace_grade_titanium_alloy_fire_resistance_raised_to_1668_desc',
  );
  const item2MobileImage = (
    <StaticImage src="./images/key-tag-intro-mobile-02.jpg" alt={item2title} />
  );
  const item2DesktopImage = (
    <StaticImage src="./images/key-tag-intro-desktop-02.jpg" alt={item2title} />
  );
  const item2 = {
    item2title,
    item2desc,
    item2MobileImage,
    item2DesktopImage,
  };

  const item3title = t('title__record_24_words_and_2_extra_passphrases');
  const item3desc = t('title__record_24_words_and_2_extra_passphrases_desc');
  const item3MobileImage = (
    <StaticImage src="./images/key-tag-intro-mobile-03.jpg" alt={item3title} />
  );
  const item3DesktopImage = (
    <StaticImage src="./images/key-tag-intro-desktop-03.jpg" alt={item3title} />
  );
  const item3 = {
    item3title,
    item3desc,
    item3MobileImage,
    item3DesktopImage,
  };

  const item4title = t('content__keytag_features');

  const item4MobileImage = (
    <StaticImage src="./images/key-tag-intro-mobile-04.jpg" alt={item4title} />
  );
  const item4DesktopImage = (
    <StaticImage src="./images/key-tag-intro-desktop-04.jpg" alt={item4title} />
  );
  const item4 = {
    item4title,
    item4MobileImage,
    item4DesktopImage,
  };

  return {
    array: [item1, item2, item3, item4],
    object: {
      item1,
      item2,
      item3,
      item4,
    },
  };
}
