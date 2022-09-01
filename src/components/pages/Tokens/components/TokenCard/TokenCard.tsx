import { FC, ReactNode } from 'react';

import { Interpolation, Theme, useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import LazyLoad from 'react-lazyload';

import { Box, Divider, Flex, I18n, Img, Link, Span } from '../../../../base';
import { Token } from '../../hooks/useTokenList';
import { Chain } from '../../types/Chain';
import { addToWallet } from '../../utils/addToWallet';

export interface TokenCardProps extends Token {
  children?: ReactNode;
  chain: Chain;
}

export const TokenCard: FC<TokenCardProps> = (props) => {
  const { children, logoUri, symbol, name, decimals, address, chain } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  const buttonStyle: {
    xs: Interpolation<Theme>;
    s: Interpolation<Theme>;
  } = {
    xs: {
      cursor: 'pointer',
      flex: 1,
      textAlign: 'center',
      paddingTop: 16,
      paddingBottom: 16,
      textTransform: 'capitalize',
      color: theme.colors.test500,
      ...theme.text.medium300,
      ':hover': {
        opacity: 0.6,
      },
    },
    s: { ...theme.text.medium400 },
  };

  return (
    <Box
      xs={{
        color: theme.colors.test500,
        background: theme.colors.white,
        borderRadius: theme.borderRadius.xxl,
        transition: theme.transitions.allEaseInOut,
        ':hover': {
          boxShadow: theme.shadow.hover,
        },
      }}
    >
      <Box xs={{ padding: 18 }} s={{ padding: 24 }}>
        <Flex xs={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Span xs={theme.text.medium400} s={theme.text.medium500}>
              {symbol}
            </Span>

            <Box s={{ paddingTop: 4 }}>
              <Span
                xs={{
                  color: theme.colors.test300,
                  ...theme.text.normal300,
                }}
                s={theme.text.normal400}
              >
                {name}
              </Span>
            </Box>
          </Box>

          <LazyLoad debounce once offset={200}>
            <Img
              src={logoUri}
              xs={{
                borderRadius: '100%',
                width: 48,
                height: 48,
              }}
            />
          </LazyLoad>
        </Flex>
      </Box>

      <Divider color={theme.colors.test200} />

      <Flex
        xs={{
          alignItems: 'stretch',
        }}
      >
        <Link xs={{ flex: 1 }} to={`${chain.base}/token/${address}`}>
          <Box {...buttonStyle}>
            <I18n name="action__view" />
          </Box>
        </Link>

        <Divider
          xs={{ height: 'auto' }}
          direction="v"
          color={theme.colors.test200}
        />

        <Box
          {...buttonStyle}
          onClick={() => {
            addToWallet(
              {
                name,
                address,
                symbol,
                decimals,
                logoURI: logoUri,
              },
              chain.chainId,
              t('content__switch_network', {
                value: chain.type,
              }),
            );
          }}
        >
          <I18n name="action__add_to_onekey" />
        </Box>
      </Flex>

      {children}
    </Box>
  );
};
