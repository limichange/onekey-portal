import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { OnlyDisplay } from '../../base';
import { Box, Footer } from '../../base/Box';
import { Container } from '../../base/Container';
import { Flex } from '../../base/Flex';
import { MediaLinkList } from '../MediaLinkList';

import { Copyright } from './Copyright';
import { EmailSubscribe } from './EmailSubscribe';
import { Logo } from './Logo';
import { MenuList } from './MenuList';
import { OpenSourceIcon } from './OpenSourceIcon';

export interface PageFooterProps {
  isShowEmailSubscribe?: boolean;
  isShowMediaLinks?: boolean;
}

export const PageFooter: FC<PageFooterProps> = (props) => {
  const { isShowEmailSubscribe = true, isShowMediaLinks = true } = props;
  const theme = useTheme();

  return (
    <Footer
      xs={{
        backgroundColor: theme.background.test500,
        borderTopLeftRadius: 64,
        borderTopRightRadius: 64,
      }}
      m={{
        paddingTop: 88,
        paddingBottom: 138,
      }}
    >
      <Container>
        <Box
          xs={{ display: 'block' }}
          m={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Flex
            m={{ justifyContent: 'space-between', flexDirection: 'column' }}
          >
            {/* Logo */}
            <Logo />

            <OnlyDisplay m l xl xxl>
              <Flex
                xs={{
                  paddingTop: 20,
                  paddingBottom: 80,
                  flexDirection: 'column',
                  gap: 24,
                }}
                m={{ padding: 0, paddingBottom: 0 }}
              >
                {isShowMediaLinks && (
                  <MediaLinkList color={theme.colors.white} />
                )}

                <OpenSourceIcon />

                <Copyright />
              </Flex>
            </OnlyDisplay>
          </Flex>

          <Box xs={{ flex: 1 }}>
            {/* menu list */}
            <MenuList />

            {/* email */}
            {isShowEmailSubscribe && (
              <Box xs={{ paddingTop: 80, maxWidth: 480 }} l={{ maxWidth: 780 }}>
                <EmailSubscribe />
              </Box>
            )}

            <OnlyDisplay xs s>
              <Box xs={{ paddingTop: 20, paddingBottom: 80, maxWidth: 480 }}>
                <Flex
                  xs={{
                    justifyContent: 'space-between',
                  }}
                >
                  {isShowMediaLinks && (
                    <MediaLinkList color={theme.colors.white} />
                  )}

                  <OpenSourceIcon />
                </Flex>

                <Box xs={{ paddingTop: 8 }}>
                  <Copyright />
                </Box>
              </Box>
            </OnlyDisplay>
          </Box>
        </Box>
      </Container>
    </Footer>
  );
};
