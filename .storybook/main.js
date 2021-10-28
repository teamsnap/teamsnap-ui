module.exports = {
  stories: [
    '../src/**/*.stories.@(tsx|js|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y'
  ]
};
