/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  pluginSearchDirs: false,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
}

// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};