exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    module: {
      rules: [],
    },
    plugins: [
      plugins.define({
        PWD: JSON.stringify(process.env.PWD),
      }),
    ],
    node: {
      global: true,
      __filename: true,
      __dirname: true,
    },
  });
};
