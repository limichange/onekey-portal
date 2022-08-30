import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Box, Li, Ul } from '../../../base/Box';
import { Container } from '../../../base/Container';
import { Link } from '../../../base/Link';
import { Logo } from '../../../base/Logo';
import { DownloadButton } from '../../DownloadButton';
import { NavigationAnimationWrap } from '../NavigationAnimationWrap';
import { useNavigationDataObject } from '../useNavigationData';

import { LanguageSwitchButton } from './LanguageSwitchButton';
import { NavigationItem } from './NavigationItem';
import { ProductPanel } from './ProductPanel';
import { ServicesPanel } from './ServicesPanel';

export interface NormalNavigationProps {
  children?: ReactNode;
}

export const NormalNavigation: React.FC<NormalNavigationProps> = () => {
  const theme = useTheme();
  const data = useNavigationDataObject();
  const { scrollY } = useScroll();
  const downloadButtonBackground = useTransform(
    scrollY,
    (value) => `rgba(255, 255, 255, ${value > 10 ? 0 : 0.4})`,
  );

  const menuData = [
    {
      ...data.products,
      panelComponent: ProductPanel,
    },
    data.app,
    {
      ...data.services,
      panelComponent: ServicesPanel,
    },
    data.security,
    data.forDeveloper,
    data.forBusiness,
    data.helpCenter,
  ];

  return (
    <NavigationAnimationWrap paddingRange={[38, 16]}>
      <Container
        xs={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/">
          <Logo
            css={{
              width: 48,
              height: 48,
              color: 'black',
              ':hover': {
                cursor: 'pointer',
                color: theme.colors.brand400,
              },
            }}
          />
        </Link>
        <Ul
          xs={{ flex: 1, display: 'flex', gap: 28, paddingLeft: 12 }}
          l={{ gap: 32 }}
        >
          {menuData.map((item) => (
            <Li
              key={item.key}
              xs={{
                display: 'flex',
                alignItems: 'center',
                listStyle: 'none',
              }}
            >
              <NavigationItem itemKey={item.key} {...item} />
            </Li>
          ))}
        </Ul>

        <Box xs={{ paddingLeft: 32, paddingRight: 32 }}>
          <LanguageSwitchButton />
        </Box>

        <motion.div
          style={{
            position: 'relative',
            backgroundColor: downloadButtonBackground,
            borderRadius: 60,
            transform: 'translateZ(0)',
          }}
        >
          <DownloadButton
            override={{
              button: {
                variant: 'outlined',
              },
            }}
          />
        </motion.div>
      </Container>
    </NavigationAnimationWrap>
  );
};
