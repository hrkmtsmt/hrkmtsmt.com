const { resolve } = require('path');
const colorsPath = resolve(__dirname, 'src/styles/colors.ts');
const colors = require(colorsPath);

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  content: [],
  theme: {
    colors: colors,
  },
  plugins: [],
};
