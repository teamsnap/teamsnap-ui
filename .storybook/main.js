const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    // Add loader rules to work with the overall CSS handling upgrades.
    config.module.rules.push(
      {
        test: /^((?!\.module).)*scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.module\.\S+$/,
        use: ['style-loader', 'css-loader?modules=true', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      }
    );

    return config;
  },
};
