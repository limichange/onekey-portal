import { FC, ReactNode, useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import Swiper from 'swiper';

import {
  ActionSheetBackground,
  ActionSheetCancel,
  ActionSheetDivider,
  Box,
  Flex,
  Progress,
  Swiper as SwiperComponent,
  SwiperSlide,
} from '../../../../../base';
import { useMultiImageIntroduction } from '../hooks/useMultiImageIntroduction';

import { MobileModalItem } from './MobileModalItem';

export interface MobileModalProps {
  children?: ReactNode;
  onClose: () => void;
}

export const MobileModal: FC<MobileModalProps> = (props) => {
  const { children, onClose } = props;
  const { data, index } = useMultiImageIntroduction();
  const theme = useTheme();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    thumbsSwiper?.slideTo(index);
  }, [thumbsSwiper, index]);

  return (
    <Box
      xs={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 4000,
      }}
    >
      <ActionSheetBackground />

      <Box
        style={{
          position: 'absolute',
          borderRadius: 16,
          left: 8,
          right: 8,
          bottom: 8,
          zIndex: 4002,
          overflow: 'hidden',
          background: 'white',
        }}
      >
        <SwiperComponent
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
          }}
          onSlideChange={() => {
            setSwiperIndex(
              thumbsSwiper?.activeIndex ? thumbsSwiper.activeIndex : 0,
            );
          }}
        >
          {data.array.map((item) => (
            <SwiperSlide key={item.name}>
              <MobileModalItem {...item} />
            </SwiperSlide>
          ))}
        </SwiperComponent>

        <Flex
          xs={{ justifyContent: 'center', paddingBottom: 24, paddingTop: 24 }}
        >
          <Progress
            containerColor={theme.colors.test200}
            amount={data.array.length}
            activeIndex={swiperIndex}
          />
        </Flex>

        <ActionSheetDivider />

        <Box onClick={onClose} xs={{ padding: 8 }}>
          <ActionSheetCancel />
        </Box>

        {children}
      </Box>
    </Box>
  );
};
