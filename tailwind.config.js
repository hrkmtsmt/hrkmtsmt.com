const { resolve } = require('path');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  content: [],
  theme: {
    colors: {
      base: '#FFFFFF',
      main: '#F5F9FF',
      primary: '#2F76E6',
      secondary: '#D1E2FF',
      white: '#FFFFFF',
      black: '#202020'
    },
    dropShadow: {
      regular: '0 0 1rem rgba(47, 118, 230, 0.2)'
    },
    extend: {
      fontFamily: {
        qualion:
          '"QualionRound-Regular", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif'
      }
    }
  },
  plugins: []
};
