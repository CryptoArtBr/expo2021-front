const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/atoms/**/*.stories.mdx',
    '../src/components/atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/molecules/**/*.stories.mdx',
    '../src/components/molecules/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/organisms/**/*.stories.mdx',
    '../src/components/organisms/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/forms/**/*.stories.mdx',
    '../src/components/forms/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/experiments/**/*.stories.mdx',
    '../src/components/experiments/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  presets: [path.resolve(__dirname, './next-preset.js')],
}
