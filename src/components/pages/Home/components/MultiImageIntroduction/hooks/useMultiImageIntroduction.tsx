import { ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';
import { atom, useAtom } from 'jotai';

import { images } from '../images';

type Item = {
  name: string;
  title: string;
  content: string;
  mobileImage: ReactNode;
  mobileModalImage: ReactNode;
  desktopImage: ReactNode;
  desktopModalImage: ReactNode;
};

const currentSelectedAtom = atom('');
const modalIsOpenAtom = atom<boolean>(false);

export function useMultiImageIntroduction() {
  const { t } = useTranslation();
  const [currentSelected, setCurrentSelected] = useAtom(currentSelectedAtom);
  const [modalIsOpen, setModalIsOpen] = useAtom(modalIsOpenAtom);

  const allAssetsAtAGlance: Item = {
    name: 'allAssetsAtAGlance',
    title: t('title__all_assets_at_a_glance'),
    content: t('title__all_assets_at_a_glance_desc'),
    mobileImage: images.mobile.featureIntro01,
    mobileModalImage: images.mobileWindow.featureIntro01,
    desktopImage: images.desktop.featureIntro01,
    desktopModalImage: images.desktopWindow.featureIntro01,
  };

  const thePublicChainIsTheCoreOfOnekey: Item = {
    name: 'thePublicChainIsTheCoreOfOnekey',
    title: t('title__the_public_chain_is_the_core_of_onekey'),
    content: t('title__the_public_chain_is_the_core_of_onekey_desc'),
    mobileImage: images.mobile.featureIntro02,
    mobileModalImage: images.mobileWindow.featureIntro02,
    desktopImage: images.desktop.featureIntro02,
    desktopModalImage: images.desktopWindow.featureIntro02,
  };

  const trackSubscriptionsWithLightningNotifications: Item = {
    name: 'trackSubscriptionsWithLightningNotifications',
    title: t('title__track_subscriptions_with_lightning_notifications'),
    content: t('title__track_subscriptions_with_lightning_notifications_desc'),
    mobileImage: images.mobile.featureIntro03,
    mobileModalImage: images.mobileWindow.featureIntro03,
    desktopImage: images.desktop.featureIntro03,
    desktopModalImage: images.desktopWindow.featureIntro03,
  };

  const fundingCollaborationSuperSeamless: Item = {
    name: 'fundingCollaborationSuperSeamless',
    title: t('title__funding_collaboration_super_seamless'),
    content: t('title__funding_collaboration_super_seamless_desc'),
    mobileImage: images.mobile.featureIntro04,
    mobileModalImage: images.mobileWindow.featureIntro04,
    desktopImage: images.desktop.featureIntro04,
    desktopModalImage: images.desktopWindow.featureIntro04,
  };

  const hardwarePlusVeryHardcore: Item = {
    name: 'hardwarePlusVeryHardcore',
    title: t('title__hardware_plus_very_hardcore'),
    content: t('title__hardware_plus_very_hardcore_desc'),
    mobileImage: images.mobile.featureIntro05,
    mobileModalImage: images.mobileWindow.featureIntro05,
    desktopImage: images.desktop.featureIntro05,
    desktopModalImage: images.desktopWindow.featureIntro05,
  };

  const data = {
    object: {
      allAssetsAtAGlance,
      thePublicChainIsTheCoreOfOnekey,
      trackSubscriptionsWithLightningNotifications,
      fundingCollaborationSuperSeamless,
      hardwarePlusVeryHardcore,
    },
    array: [
      allAssetsAtAGlance,
      thePublicChainIsTheCoreOfOnekey,
      trackSubscriptionsWithLightningNotifications,
      fundingCollaborationSuperSeamless,
      hardwarePlusVeryHardcore,
    ],
  } as const;

  const currentSelectedData =
    data.object[currentSelected as keyof typeof data.object];

  const index = data.array.findIndex(
    (item) => item.name === currentSelectedData?.name,
  );

  function next() {
    const nextIndex = index + 1 >= data.array.length ? 0 : index + 1;
    const nextItem = data.array[nextIndex];

    if (nextItem) {
      setCurrentSelected(nextItem.name);
    }
  }

  function prev() {
    const prevIndex = index - 1 <= 0 ? data.array.length - 1 : index - 1;
    const prevItem = data.array[prevIndex];

    if (prevItem) {
      setCurrentSelected(prevItem.name);
    }
  }

  return {
    next,
    prev,
    modalIsOpen,
    currentSelected,
    currentSelectedData,
    setCurrentSelected,
    setModalIsOpen,
    data,
    index,
  };
}
