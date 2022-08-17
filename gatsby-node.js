exports.onCreateWebpackConfig = ({ getConfig, actions, loaders, plugins }) => {
  const { setWebpackConfig } = actions;
  const existingConfig = getConfig();

  existingConfig.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/)
    ) {
      rule.test = /\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/;
      rule.exclude = /\.inline\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/;
    }

    return rule;
  });

  const urlLoader = loaders.url({
    name: 'static/[name].[hash:8].[ext]',
  });

  const inlineLoader = {
    loader: 'url-loader',
    options: {
      limit: 999999999,
    },
  };

  const svgrLoader = {
    loader: '@svgr/webpack',
    options: {
      dimensions: false,
    },
  };

  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [svgrLoader, urlLoader],
        },
        {
          test: /\.inline.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/,
          issuer: /\.[jt]sx?$/,
          use: [inlineLoader],
        },
      ],
    },
    plugins: [
      plugins.define({
        PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL || '/'),
        API_URL: JSON.stringify(
          process.env.API_URL || 'https://fiat.onekeytest.com',
        ),
      }),
    ],
  });
};
