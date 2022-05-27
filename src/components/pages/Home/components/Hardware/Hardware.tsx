import React from 'react';

import { useTheme } from '@emotion/react';
import { motion, useMotionValue } from 'framer-motion';
import { FreeMode } from 'swiper';

import { useMediaQuery, usePositionAnimation } from '../../../../../hooks';
import { mergeRefs } from '../../../../../utils';
import {
  Box,
  Container,
  Flex,
  GoToShopButton,
  Span,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../base';

import { Item } from './Item';
import { useHardwareData } from './useHardwareData';

export const Hardware: React.FC = () => {
  const media = useMediaQuery();
  const theme = useTheme();
  const data = useHardwareData();
  const zeroMotionValue = useMotionValue(0);
  const isMedium = media.medium;
  const { ref: paddingRef, motionValue: paddingMotionValue } =
    usePositionAnimation({
      from: 60,
      to: 0,
    });
  const { ref: borderRadiusRef, motionValue: borderRadiusMotionValue } =
    usePositionAnimation({
      from: 40,
      to: 0,
    });
  const borderRadiusDefaultValue = useMotionValue(isMedium ? 40 : 32);

  const ref = mergeRefs(borderRadiusRef, paddingRef);

  return (
    <motion.section
      ref={ref}
      style={{
        overflow: 'hidden',
        paddingRight: isMedium ? paddingMotionValue : zeroMotionValue,
        paddingLeft: isMedium ? paddingMotionValue : zeroMotionValue,
        paddingTop: 60,
      }}
    >
      <motion.div
        style={{
          borderRadius: isMedium
            ? borderRadiusMotionValue
            : borderRadiusDefaultValue,
          backgroundColor: '#313638',
          paddingTop: isMedium ? 112 : 72,
          paddingBottom: isMedium ? 112 : 72,
        }}
      >
        <Container>
          {/* header */}
          <Flex
            xs={{
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <Flex
              xs={{
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <Span
                xs={{
                  ...theme.text.medium500,
                  color: theme.background.test300,
                }}
                m={{
                  ...theme.text.medium600,
                }}
              >
                INTUITIVE HARDWARE
              </Span>
              <Span
                xs={{ ...theme.text.medium800, color: '#ffffff' }}
                m={{ ...theme.text.medium900 }}
              >
                Choose OneKey hardware <br /> wallet right for you.
              </Span>
            </Flex>
            <Box>
              <GoToShopButton
                overrides={{
                  button: {
                    themeColor: 'dark',
                  },
                }}
              />
            </Box>
          </Flex>

          {/* list */}
          <Flex
            xs={{ paddingTop: 64, gap: 24 }}
            xl={{
              gap: 64,
            }}
          >
            {/* for large screen */}
            {media.large && (
              <>
                {data.map((item) => (
                  <Item key={item.title} {...item} />
                ))}
              </>
            )}

            {/* small screen */}
            {!media.large && (
              <SwiperComponent
                slidesPerView="auto"
                spaceBetween={30}
                modules={[FreeMode]}
                freeMode={{
                  enabled: true,
                }}
              >
                {data.map((item) => (
                  <SwiperSlide
                    style={{
                      width: 272,
                    }}
                  >
                    <Item key={item.title} {...item} />
                  </SwiperSlide>
                ))}
              </SwiperComponent>
            )}
          </Flex>
        </Container>
      </motion.div>
    </motion.section>
  );
};