import { FC, ReactNode } from 'react';

import { Interpolation, Theme, useTheme } from '@emotion/react';

import { Box, Divider, Flex, Span } from '../../../../base';

export interface TokenCardPlaceholderProps {
  children?: ReactNode;
}

export const TokenCardPlaceholder: FC<TokenCardPlaceholderProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  const buttonStyle: Interpolation<Theme> = {
    flex: 1,
    textAlign: 'center',
    padding: 16,
    ...theme.text.medium400,
  };

  return (
    <Box
      xs={{
        color: theme.colors.test500,
        background: theme.colors.white,
        borderRadius: theme.borderRadius.xxl,
        opacity: 0.8,
      }}
    >
      <Box
        xs={{
          padding: 24,
        }}
      >
        <Flex xs={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Span xs={theme.text.medium500}>*****</Span>
            <Box xs={{ paddingTop: 4 }}>
              <Span
                xs={{
                  color: theme.colors.test300,
                  ...theme.text.normal400,
                }}
              >
                **************
              </Span>
            </Box>
          </Box>

          <Box
            xs={{
              borderRadius: '100%',
              width: 48,
              height: 48,
              background: theme.colors.test100,
            }}
          />
        </Flex>
      </Box>

      <Divider color={theme.colors.test200} />

      <Flex
        xs={{
          alignItems: 'stretch',
        }}
      >
        <Box xs={{ ...buttonStyle }}>***</Box>

        <Divider
          xs={{ height: 'auto' }}
          direction="v"
          color={theme.colors.test200}
        />

        <Box xs={{ ...buttonStyle }}>***</Box>
      </Flex>

      {children}
    </Box>
  );
};
