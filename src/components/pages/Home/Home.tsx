import React, { useCallback, useEffect, useRef } from 'react';

import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { isBrowser } from '../../../utils';
import { Box, Main, SEO } from '../../base';
import { FadeIn } from '../../base/FadeIn';
import { Navigation } from '../../common/Navigation';
import { PageFooter } from '../../common/PageFooter';

import {
  ChooseUs,
  Contact,
  FAQ,
  Feature,
  Hardware,
  Header,
  LogoWall,
  MultiImageIntroduction,
  Rewards,
  Security,
  Start,
  WhatOurUsersSay,
  Why,
} from './components';
import { WhatMakesOneKeyDifferent } from './components/WhatMakesOneKeyDifferent';

export const Home: React.FC = () => {
  const theme = useTheme();
  const widget = useRef<{ remove: () => void } | null>(null);
  const modal = useRef<{ remove: () => void } | null>(null);
  const isLoad = useRef(false);

  const loadVideoModal = useCallback(() => {
    if (
      !isBrowser() ||
      !window.videoask ||
      widget.current ||
      modal.current ||
      isLoad.current
    ) {
      return false;
    }

    isLoad.current = true;

    const VIDEOASK_EMBED_CONFIG = {
      kind: 'widget',
      url: 'https://www.videoask.com/f0opshg42',
      options: {
        widgetType: 'VideoThumbnailWindowTall',
        text: '',
        backgroundColor: '#44D62C',
        dismissible: true,
        position: 'inline',
        widgetTarget: '#videoaskId',
      },
    };

    const callbacks = {
      onLoadModal: ({ element }: { element: { remove: () => void } }) => {
        modal.current = element;
      },
    };

    window.videoask
      .loadEmbed(VIDEOASK_EMBED_CONFIG, callbacks)
      .then((element: { remove: () => void }) => {
        widget.current = element;
      });

    return true;
  }, []);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      if (loadVideoModal()) {
        clearInterval(setIntervalId);
      }
    }, 1500);

    return () => {
      clearInterval(setIntervalId);

      widget.current?.remove();
      widget.current = null;

      modal.current?.remove();
      modal.current = null;
    };
  }, [loadVideoModal]);

  return (
    <>
      <Helmet>
        <title>All-in-one crypto wallet trusted by millions.</title>
      </Helmet>

      <SEO />

      <Navigation />

      <Main>
        <Header />

        <ChooseUs />

        <FadeIn>
          <LogoWall />
        </FadeIn>

        <FadeIn>
          <MultiImageIntroduction />
        </FadeIn>

        <WhatMakesOneKeyDifferent />

        <FadeIn>
          <Hardware />
        </FadeIn>

        <FadeIn>
          <Security />
        </FadeIn>

        <FadeIn>
          <WhatOurUsersSay />
        </FadeIn>

        <FadeIn>
          <Feature />
        </FadeIn>

        <FadeIn>
          <Why />
        </FadeIn>

        <FadeIn>
          <FAQ />
        </FadeIn>

        <FadeIn>
          <Rewards />
        </FadeIn>

        <FadeIn>
          <Start />
        </FadeIn>

        <FadeIn>
          <Contact />
        </FadeIn>
      </Main>

      <Box css={{ background: theme.colors.brandAlt200 }}>
        <PageFooter />
      </Box>

      <Box
        id="videoaskId"
        xs={{
          display: 'none',
          position: 'fixed',
          right: 20,
          bottom: 68,
        }}
        m={{
          display: 'block',
        }}
      />
    </>
  );
};
