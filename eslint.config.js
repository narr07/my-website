import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({
  ...tailwind.configs['flat/recommended'],
  formatters: {
    css: true,
    html: true,
    markdown: false,
  },
  vue: {
    overrides: {
      'style/no-tabs': 'off',
    },
  },
  typescript: true,
  settings: {
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['classnames', 'clsx', 'ctl'],
      config: 'tailwind.config.js', // returned from `loadConfig()` utility if not provided
      cssFiles: [
        '**/*.css',
        '!**/node_modules',
        '!**/.*',
        '!**/dist',
        '!**/build',
      ],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
      classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
    },
  },
})