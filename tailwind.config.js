const { resolve } = require('path');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  content: [],
  theme: {
    colors: {
      base: '#FFFFFF',
      primary: '#2F76E6',
      secondary: '#D1E2FF',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
