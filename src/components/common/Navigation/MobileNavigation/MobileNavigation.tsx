import React, { Fragment, ReactNode, useCallback, useState } from 'react';

import { Flex } from '../../../base';
import { Box } from '../../../base/Box';
import { MenuIcon } from '../../../base/Icon';
import { NavigationAnimationWrap } from '../NavigationAnimationWrap';

import { LogoIcon } from './LogoIcon';
import { MobileNavigationPanel } from './MobileNavigationPanel';

export interface MobileNavigationProps {
  children?: ReactNode;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  const { children } = props;
  const [menuActive, setMenuActive] = useState(false);

  const openMenu = useCallback(() => {
    setMenuActive(true);
  }, [setMenuActive]);

  const closeMenu = useCallback(() => {
    setMenuActive(false);
  }, [setMenuActive]);

  return (
    <Fragment key="MobileNavigation">
      <NavigationAnimationWrap paddingRange={[20, 12]} isSpring>
        <Flex
          xs={{
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {LogoIcon}

          {children}

          <Box
            onClick={openMenu}
            xs={{
              cursor: 'pointer',
            }}
          >
            <MenuIcon width={40} height={40} />
          </Box>
        </Flex>
      </NavigationAnimationWrap>

      {menuActive && <MobileNavigationPanel onCloseMenu={closeMenu} />}
    </Fragment>
  );
};
