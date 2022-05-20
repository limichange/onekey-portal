module.exports = {
  plugins: [],
  presets: [
    [
      'babel-preset-gatsby',
      {
        reactRuntime: 'automatic',
        reactImportSource: '@emotion/react',
      },
    ],
  ],
};
