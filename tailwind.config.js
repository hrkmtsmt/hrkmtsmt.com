const { resolve } = require('path');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      base: '#FFFFFF',
      primary: '#2F76E6',
      secondary: '#D1E2FF',
      white: '#FFFFFF',
    },
    dropShadow: {
      regular: '0 0 1rem rgba(47, 118, 230, 0.2)',
    },
    extend: {
      fontFamily: {
        qualion: '"QualionRound-Regular", sans-serif',
        'qualion-bold': '"QualionRound-Bold", sans-serif',
      },
    },
  },
  plugins: [],
};
