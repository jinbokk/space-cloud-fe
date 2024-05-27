/* eslint-disable @typescript-eslint/no-var-requires */
const variables = require('./tailwind-theme/variables');
const breakpoint = require('./tailwind-theme/breakpoint');
const colors = require('./tailwind-theme/colors');
const fontFamily = require('./tailwind-theme/font-family');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    variables: variables,
    colors: colors,
    screens: breakpoint,
    extend: {
      fontFamily: fontFamily,
      spacing: {
        gutter: variables.gutter,
      },
    },
  },
  plugins: [],
};
