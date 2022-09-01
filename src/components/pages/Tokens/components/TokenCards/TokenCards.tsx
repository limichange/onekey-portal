import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { Box, Button, I18n } from '../../../../base';
import { Token } from '../../hooks/useTokenList';
import { Chain } from '../../types/Chain';
import { TokenCard } from '../TokenCard';
import { TokenCardPlaceholder } from '../TokenCardPlaceholder';
import { TokenNotFound } from '../TokenNotFound';

export interface TokenCardsProps {
  children?: ReactNode;
  tokens?: Token[];
  searchString: string;
  chain: Chain;
}

export type TokenCardsStatus = 'normal' | 'none' | 'loading';

export const TokenCards: FC<TokenCardsProps> = (props) => {
  const { children, tokens, searchString, chain } = props;
  const [length, setLength] = useState(3 * 4 * 2);

  let status: TokenCardsStatus = 'loading';

  const tokensFiltered = useMemo(
    () =>
      tokens
        ? tokens.filter(
            (token) =>
              searchString === undefined ||
              searchString === '' ||
              token.symbol
                .toLocaleLowerCase()
                .includes(searchString.toLocaleLowerCase()),
          )
        : [],
    [searchString, tokens],
  );

  // if tokens is null, it is loading
  if (!tokens) {
    status = 'loading';

    // the tokens isn't null, loading is over
  } else if (tokens) {
    status = 'normal';

    // we have data, but the filter result is null, so it's none status
    if (tokensFiltered.length <= 0) {
      status = 'none';
    }
  }

  useEffect(() => {
    setLength(3 * 4 * 2);
  }, [searchString]);

  return (
    <Box>
      <Box
        xs={{
          display: 'grid',
          gridTemplateColumns: `repeat(1, 1fr);`,
          gridGap: 24,
        }}
        m={{
          gridTemplateColumns: `repeat(2, 1fr);`,
        }}
        l={{
          gridTemplateColumns: `repeat(3, 1fr);`,
        }}
        xxl={{
          gridTemplateColumns: `repeat(4, 1fr);`,
        }}
      >
        {status === 'normal' &&
          tokensFiltered
            .slice(0, length)
            .map((token: Token) => (
              <TokenCard chain={chain} key={token.id} {...token} />
            ))}

        {status === 'loading' &&
          new Array(16)
            .fill(1)
            .map((_, index) => <TokenCardPlaceholder key={index} />)}
      </Box>

      {status === 'none' && <TokenNotFound />}

      {status === 'normal' && length < tokensFiltered.length && (
        <Button
          onClick={() => {
            setLength((value) => value + 3 * 4 * 2);
          }}
          xs={{ minWidth: 280, margin: '50px auto' }}
        >
          <I18n name="action__see_more" />
        </Button>
      )}

      {children}
    </Box>
  );
};
