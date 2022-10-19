import { FC, ReactNode, useCallback } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Box, Container, Section } from '../../../../base';

import { ImageContainer } from './components/ImageContainer';
import { Modal } from './components/Modal';
import { useMultiImageIntroduction } from './hooks/useMultiImageIntroduction';
import { images } from './images';

export interface MultiImageIntroductionProps {
  children?: ReactNode;
}

export const MultiImageIntroduction: FC<MultiImageIntroductionProps> = (
  props,
) => {
  const { children } = props;
  const { modalIsOpen, setModalIsOpen, setCurrentSelected, data } =
    useMultiImageIntroduction();

  const openModal = useCallback(
    (name: string) => {
      setModalIsOpen(true);
      setCurrentSelected(name);
    },
    [setModalIsOpen, setCurrentSelected],
  );

  return (
    <Section>
      <Container>
        <Box
          xs={{
            paddingTop: 96,
            paddingBottom: 96,
            display: 'grid',
            gridGap: 16,
          }}
          l={{ gridGap: 24 }}
        >
          <Box
            xs={{
              display: 'grid',
              gridGap: 16,
            }}
            s={{ gridTemplateColumns: `repeat(2, 1fr)` }}
            l={{ gridGap: 24 }}
          >
            <ImageContainer
              onClick={() => openModal(data.object.allAssetsAtAGlance.name)}
              mobile={images.mobile.featureIntro01}
              desktop={images.desktop.featureIntro01}
            />
            <ImageContainer
              onClick={() =>
                openModal(data.object.thePublicChainIsTheCoreOfOnekey.name)
              }
              mobile={images.mobile.featureIntro02}
              desktop={images.desktop.featureIntro02}
            />
          </Box>

          <Box
            xs={{
              display: 'grid',
              gridGap: 16,
            }}
            s={{ gridTemplateColumns: `repeat(2, 1fr)` }}
            l={{ gridTemplateColumns: `repeat(3, 1fr)`, gridGap: 24 }}
          >
            <ImageContainer
              onClick={() =>
                openModal(
                  data.object.trackSubscriptionsWithLightningNotifications.name,
                )
              }
              mobile={images.mobile.featureIntro03}
              desktop={images.desktop.featureIntro03}
            />
            <ImageContainer
              onClick={() =>
                openModal(data.object.fundingCollaborationSuperSeamless.name)
              }
              mobile={images.mobile.featureIntro04}
              desktop={images.desktop.featureIntro04}
            />
            <ImageContainer
              onClick={() =>
                openModal(data.object.hardwarePlusVeryHardcore.name)
              }
              mobile={images.mobile.featureIntro05}
              desktop={images.desktop.featureIntro05}
            />
          </Box>
        </Box>

        <Box>{children}</Box>
      </Container>

      <AnimatePresence>
        {modalIsOpen && <Modal onClose={() => setModalIsOpen(false)} />}
      </AnimatePresence>
    </Section>
  );
};
