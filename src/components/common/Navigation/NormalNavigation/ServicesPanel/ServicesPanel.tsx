import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../hooks';
import { Box } from '../../../../base/Box';
import { Container } from '../../../../base/Container';
import { useCurrentActiveMenuItem } from '../atom';
import { PanelComponentProps } from '../NavigationItem';
import { useNormalNavigationHeight } from '../useNormalNavigationHeight';

import { ServicesPanelItem } from './ServicesPanelItem';

export interface ServicesPanelProps extends PanelComponentProps {
  children?: ReactNode;
}

export const ServicesPanel: FC<ServicesPanelProps> = (props) => {
  const { children, isActive, subItems } = props;
  const top = useNormalNavigationHeight();
  const theme = useTheme();
  const [currentActiveMenuItem, setCurrentActiveMenuItem] =
    useCurrentActiveMenuItem();

  const { hoverProps, isHovered } = useHover({
    timeout: 100,
    onHoverEnd: () => setCurrentActiveMenuItem(''),
  });

  if (!isActive && !isHovered && currentActiveMenuItem !== 'services') {
    return null;
  }

  return (
    <Box
      xs={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: top * 0.8,
        zIndex: 3000,
      }}
    >
      <Container>
        <Box xs={{ maxWidth: 860 }} {...hoverProps}>
          <Box
            xs={{
              padding: 8,
              borderRadius: theme.borderRadius.xl,
              background: theme.colors.white,
              boxShadow: theme.shadow.hover,
            }}
          >
            <Box
              xs={{ display: 'grid', gridTemplateColumns: `repeat(2, 1fr)` }}
            >
              {subItems?.map((item) => (
                <ServicesPanelItem {...item} key={item.key} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      {children}
    </Box>
  );
};
