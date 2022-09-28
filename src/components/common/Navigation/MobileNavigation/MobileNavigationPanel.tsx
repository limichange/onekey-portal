import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useLockBodyScroll } from '../../../../hooks';
import { Box, Flex } from '../../../base';
import { MenuCloseIcon } from '../../../base/Icon';
import { DownloadButton } from '../../DownloadButton';
import { useNavigationData } from '../useNavigationData';

import { LogoIcon } from './LogoIcon';
import { MobileMenuItems } from './MobileMenuItems';

export interface MobileNavigationPanelProps {
  children?: ReactNode;
  onCloseMenu: () => void;
}

export const MobileNavigationPanel: FC<MobileNavigationPanelProps> = (
  props,
) => {
  const { onCloseMenu } = props;
  const theme = useTheme();
  const navigationData = useNavigationData();
  useLockBodyScroll();

  return (
    <Box
      xs={{
        zIndex: 8000,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colors.white,
        overflow: 'auto',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'auto',
      }}
    >
      <Flex
        xs={{
          padding: '20px',
          justifyContent: 'space-between',
        }}
      >
        {LogoIcon}

        <Box onClick={onCloseMenu}>
          <MenuCloseIcon
            {...{
              width: 40,
              height: 40,
            }}
          />
        </Box>
      </Flex>

      <MobileMenuItems mobileMenus={navigationData} />

      <Box
        xs={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
        onClick={onCloseMenu}
      >
        <DownloadButton />
      </Box>
    </Box>
  );
};
