import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { Box, Container, Flex, Main } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { PageTitle } from './components/PageTitle';
import { TokenCards } from './components/TokenCards';
import { TokenSearchInput } from './components/TokenSearchInput';
import { TokenTypeSwitch } from './components/TokenTypeSwitch';
import { useChains } from './hooks/useChains';
import { useTokenList } from './hooks/useTokenList';
import { Chain } from './types/Chain';

export interface TokensProps {
  children?: ReactNode;
}

export const Tokens: FC<TokensProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const chains = useChains();
  const [chain, setChain] = useState<Chain>(chains.bsc);
  const [searchInputValue, setSearchInputValue] = useState('');
  const { data } = useTokenList(chain);

  return (
    <Box xs={{ background: theme.colors.test100 }}>
      <Helmet>
        <title>Tokens</title>
      </Helmet>

      <Navigation>
        <Box
          xs={{
            background: 'rgba(240, 241, 242, 0.9)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <Container>
            <Flex
              xs={{
                justifyContent: 'space-between',
                paddingTop: 8,
                paddingBottom: 8,
                gap: 8,
                flexDirection: 'column',
              }}
              m={{ flexDirection: 'row' }}
            >
              <Box m={{ width: 420 }}>
                <TokenTypeSwitch
                  value={chain}
                  onChange={(newValue) => setChain(newValue)}
                />
              </Box>

              <Box m={{ width: 420 }}>
                <TokenSearchInput
                  value={searchInputValue}
                  onChange={setSearchInputValue}
                />
              </Box>
            </Flex>
          </Container>
        </Box>
      </Navigation>

      <Main>
        <Container>
          <PageTitle />

          <TokenCards
            chain={chain}
            searchString={searchInputValue}
            tokens={data}
          />

          <Box xs={{ paddingTop: 80, paddingBottom: 80 }}>
            <StayInTouch />
          </Box>
        </Container>

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={true} />
    </Box>
  );
};
