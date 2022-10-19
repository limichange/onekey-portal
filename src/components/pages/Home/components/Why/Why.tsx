import { FC, useCallback, useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import Swiper, { FreeMode, Navigation } from 'swiper';

import { useMediaQuery } from '../../../../../hooks';
import {
  Box,
  Container,
  Flex,
  I18n,
  OnlyDisplay,
  Section,
  Span,
  Swiper as SwiperComponent,
  SwiperSlide,
  useContainerMargin,
} from '../../../../base';
import { PrevAndNext } from '../../../../common';

import { Item } from './Item';
import { useData } from './useData';

export const Why: FC = () => {
  const theme = useTheme();
  const data = useData();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const media = useMediaQuery();
  const [allowSlideNext, setAllowSlideNext] = useState<boolean | undefined>();
  const [allowSlidePrev, setAllowSlidePrev] = useState<boolean | undefined>();
  const containerMargin = useContainerMargin();

  const updateSlideStatus = useCallback(() => {
    setAllowSlideNext(!thumbsSwiper?.isEnd);
    setAllowSlidePrev(!thumbsSwiper?.isBeginning);
  }, [thumbsSwiper?.isBeginning, thumbsSwiper?.isEnd]);

  useEffect(() => {
    updateSlideStatus();
  }, [containerMargin, updateSlideStatus]);

  return (
    <Section>
      <Box
        css={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 64,
          backgroundColor: theme.colors.white,
          label: 'whySection',
        }}
      >
        <Container>
          <Flex xs={{ justifyContent: 'space-between' }}>
            <Span
              css={{ ...theme.text.medium900, color: theme.colors.test500 }}
            >
              <I18n name="title__why_choose_onekey" />
            </Span>

            {/* controller */}
            <OnlyDisplay m l xl>
              <PrevAndNext
                allowPrev={!!allowSlidePrev}
                prevClick={() => {
                  thumbsSwiper?.slidePrev();
                  updateSlideStatus();
                }}
                allowNext={!!allowSlideNext}
                nextClick={() => {
                  thumbsSwiper?.slideNext();
                  updateSlideStatus();
                }}
              />
            </OnlyDisplay>
          </Flex>
        </Container>

        <Box
          css={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <SwiperComponent
            onSwiper={(swiper) => {
              setAllowSlideNext(!swiper.isEnd);
              setAllowSlidePrev(!swiper.isBeginning);
              setThumbsSwiper(swiper);
            }}
            slidesPerView="auto"
            spaceBetween={0}
            modules={[FreeMode, Navigation]}
            freeMode={{
              enabled: true,
            }}
            style={{
              paddingLeft: containerMargin,
              paddingRight: media.large ? 64 : 24,
              paddingTop: media.medium ? 100 : 60,
              paddingBottom: media.medium ? 180 : 60,
            }}
          >
            {data.map((item) => (
              <SwiperSlide
                style={{
                  minWidth: 271,
                  maxWidth: 421,
                  width: '30vw',
                }}
                key={item.title}
              >
                <Item {...item} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </Box>
      </Box>
    </Section>
  );
};
