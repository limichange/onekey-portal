import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
import { Box, Container, Main, SEO } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { PageTitle } from './components/PageTitle';
import { TokenCards } from './components/TokenCards';
import { TokenSearchInput } from './components/TokenSearchInput';
import { TokenTypeSwitch } from './components/TokenTypeSwitch';
import { useSelectState } from './hooks/useSelectState';
import { useTokenList } from './hooks/useTokenList';

export interface TokensProps {
  children?: ReactNode;
}

export const Tokens: FC<TokensProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const [searchInputValue, setSearchInputValue] = useState('');
  const { currentActiveChain } = useSelectState();
  const { data } = useTokenList(currentActiveChain);
  const { t } = useTranslation();

  return (
    <Box xs={{ background: theme.colors.test100 }}>
      <SEO
        title={oneLine(t('menu__token_list'))}
        description={oneLine(t('menu__token_list_desc'))}
      />

      <Navigation>
        <Box
          xs={{
            background: 'rgba(240, 241, 242, 0.9)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <Container>
            <Box
              xs={{
                display: 'grid',
                paddingTop: 8,
                paddingBottom: 8,
                gridGap: 8,
              }}
            >
              <TokenTypeSwitch />

              <Box
                xs={{ display: 'grid', gridGap: 24 }}
                m={{ gridTemplateColumns: `repeat(2, 1fr)` }}
                l={{ gridTemplateColumns: `repeat(3, 1fr)` }}
                xxl={{ gridTemplateColumns: `repeat(4, 1fr)` }}
              >
                <TokenSearchInput
                  value={searchInputValue}
                  onChange={setSearchInputValue}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Navigation>

      <Main>
        <Container>
          <PageTitle />

          {currentActiveChain && (
            <TokenCards
              chain={currentActiveChain}
              searchString={searchInputValue}
              tokens={data}
            />
          )}

          <Box xs={{ paddingTop: 80, paddingBottom: 80 }}>
            <StayInTouch />
          </Box>
        </Container>

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />
    </Box>
  );
};
