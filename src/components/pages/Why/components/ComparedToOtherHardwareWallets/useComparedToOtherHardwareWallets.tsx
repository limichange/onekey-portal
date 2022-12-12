import { Interpolation, Theme, useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export type SupportItem = {
  content: string | boolean;
  message?: string | number;
  style?: {
    xs?: Interpolation<Theme>;
    m?: Interpolation<Theme>;
  };
};

export function useComparedToOtherHardwareWallets() {
  const { t } = useTranslation();
  const theme = useTheme();
  const priceStyle = {
    xs: {
      color: theme.colors.test500,
      ...theme.text.medium100,
    },
    m: theme.text.medium500,
  };

  const data: {
    name: string;
    support: {
      OneKey: SupportItem;
      Trezor: SupportItem;
      Ledger: SupportItem;
    };
  }[] = [
    {
      name: t('title__price'),
      support: {
        OneKey: {
          content: t('content__start_from', {
            value: '$58',
          }),
          style: priceStyle,
        },
        Trezor: { content: '$70-250', style: priceStyle },
        Ledger: { content: '$89-175', style: priceStyle },
      },
    },
    {
      name: t('content__safety_chip'),
      support: {
        OneKey: { content: true },
        Trezor: { content: false },
        Ledger: { content: true },
      },
    },
    {
      name: `100% ${t('title__open_source')}`,
      support: {
        OneKey: { content: true },
        Trezor: { content: true },
        Ledger: {
          content: t('title__partly_open_source'),
          style: {
            xs: {
              color: theme.colors.test300,
              ...theme.text.normal100,
            },
            m: theme.text.normal400,
          },
        },
      },
    },
    {
      name: t('content__supports_more_than_1000_crypto_assets'),
      support: {
        OneKey: { content: true },
        Trezor: { content: true },
        Ledger: { content: true },
      },
    },
    {
      name: t('content__nft_assets_and_portfolios'),
      support: {
        OneKey: { content: true },
        Trezor: { content: false },
        Ledger: { content: false },
      },
    },
    {
      name: t('content__cross_chain_exchange'),
      support: {
        OneKey: { content: true },
        Trezor: { content: true },
        Ledger: { content: true },
      },
    },
    {
      name: t(
        'content__anti_phishing_scam_and_malicious_contract_authorization_interception',
      ),
      support: {
        OneKey: { content: true },
        Trezor: { content: false },
        Ledger: { content: false },
      },
    },
    {
      name: t('content__use_app_independently_without_hardware'),
      support: {
        OneKey: { content: true },
        Trezor: { content: false },
        Ledger: { content: false },
      },
    },
    {
      name: t('content__bluetooth'),
      support: {
        OneKey: { content: true, message: 1 },
        Trezor: { content: false },
        Ledger: {
          content: t('content__supported_by_some_models'),
          style: {
            xs: {
              color: theme.colors.test300,
              ...theme.text.normal100,
            },
            m: theme.text.normal400,
          },
        },
      },
    },
    {
      name: t('content__browser_plug_in'),
      support: {
        OneKey: { content: true },
        Trezor: { content: false },
        Ledger: { content: false },
      },
    },
    {
      name: t('title__mobile_app'),
      support: {
        OneKey: { content: true },
        Trezor: { content: false },
        Ledger: { content: true },
      },
    },
    {
      name: t('content__optical_communication_and_biometrics'),
      support: {
        OneKey: { content: true, message: 2 },
        Trezor: { content: false },
        Ledger: { content: false },
      },
    },
  ];

  return {
    head: {
      OneKey: 'OneKey',
      Trezor: 'Trezor',
      Ledger: 'Ledger',
    },
    data,
  };
}
