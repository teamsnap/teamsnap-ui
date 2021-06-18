module.exports = {
  stories: [
    '../dist/**/*.stories.@(ts|js)',
    '../src/**/*.stories.@(tsx|js)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@whitespace/storybook-addon-html',
  ]
};
