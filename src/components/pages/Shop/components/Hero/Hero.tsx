import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { isBrowser } from '../../../../../utils';
import { Box, I18n, Img, VideoPlayer } from '../../../../base';
import {
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroDesktopBackground,
  HeroMobileBackground,
  HeroTabletBackground,
  HeroTitle,
} from '../../../../common/HeroLayout';

import videoPoster from './images/shop-hero-animation-poster.jpg';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;

  return (
    <HeroContainer>
      <HeroMobileBackground>
        <StaticImage
          style={{ height: '100%', width: '100%' }}
          src="./images/shop-mobile-hero.jpg"
          alt="hero"
        />
      </HeroMobileBackground>

      <HeroTabletBackground>
        <StaticImage
          style={{ height: '100%', width: '100%' }}
          src="./images/shop-tablet-hero.jpg"
          alt="hero"
        />
      </HeroTabletBackground>

      <HeroDesktopBackground checkBrowser={false}>
        <Box
          xs={{ width: '50%', height: '100%', right: 0, position: 'absolute' }}
        >
          <Img
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              zIndex: 1,
            }}
            src={videoPoster}
            alt="video poster"
          />

          {isBrowser() && (
            <VideoPlayer
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                zIndex: 2,
              }}
              poster={videoPoster}
              loop
              src="/shop/hero/shop-hero-animation-compressed-v2.mp4"
            />
          )}
        </Box>
      </HeroDesktopBackground>

      <HeroContent>
        <HeroTitle>
          <I18n name="title__shop_onekey" />
        </HeroTitle>
        <HeroDescription>
          <I18n name="title__shop_onekey_desc" />
        </HeroDescription>
      </HeroContent>

      {children}
    </HeroContainer>
  );
};
