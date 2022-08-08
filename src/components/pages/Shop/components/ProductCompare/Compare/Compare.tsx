import { FC, ReactNode } from 'react';

import { Box, SwiperSlide } from '../../../../../base';
import { FreeSwiper } from '../../../../../common';
import { useProductCompareData } from '../useProductCompareData';

import { CompareItem } from './CompareItem';

export interface CompareProps {
  children?: ReactNode;
}

export const Compare: FC<CompareProps> = (props) => {
  const { children } = props;

  const data = useProductCompareData();

  return (
    <Box
      xs={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 48,
        paddingBottom: 120,
      }}
    >
      <FreeSwiper
        style={{
          paddingLeft: 24,
          paddingRight: 24,
        }}
        spaceBetween={24}
      >
        {Object.values(data.items).map((item) => (
          <SwiperSlide style={{ maxWidth: 360, width: '60vw' }} key={item.name}>
            <CompareItem {...item} />
          </SwiperSlide>
        ))}

        {children}
      </FreeSwiper>
    </Box>
  );
};
