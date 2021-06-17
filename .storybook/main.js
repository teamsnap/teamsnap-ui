const path = require("path");

module.exports = {
  stories: [
    '../dist/**/*.stories.@(ts|js)',
    '../src/**/*.stories.@(tsx|js)',
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-docs'
  ]
};
