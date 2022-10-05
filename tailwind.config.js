/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#101010',
      base: {
        light: '#FFFFFF',
        dark: '#101010'
      },
      main: {
        light: '#F7FAFF',
        dark: '#202020'
      },
      primary: {
        100: '#F1F7FF',
        200: '#D1E3FF',
        300: '#5A9AFF',
        400: '#2F76E6', // main
        500: '#2863C0',
        600: '#214A8B',
        700: '#1F3B66',
        800: '#1A2435',
        900: '#12181F'
      },
      font: {
        primary: {
          light: '#202020',
          dark: '#F0F0F0'
        },
        secondary: {
          light: '',
          dark: ''
        }
      }
    },
    dropShadow: {
      light: '0 0 1rem rgba(47, 118, 230, 0.2)',
      dark: '0 0 1rem rgba(18, 24, 31, 0.96)'
    },
    fontFamily: {
      'qualion-regular': [
        '"QualionRound-Regular"',
        '"Helvetica Neue"',
        'Arial',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'Meiryo',
        'sans-serif'
      ],
      'qualion-bold': [
        '"QualionRound-Bold"',
        '"Helvetica Neue"',
        'Arial',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'Meiryo',
        'sans-serif'
      ]
    }
  },
  plugins: []
};
