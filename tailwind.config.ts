/* eslint-disable @typescript-eslint/no-var-requires */
// const variables = require('./tailwind-theme/variables');
// const breakpoint = require('./tailwind-theme/breakpoint');
// const minWidth = require('./tailwind-theme/min-width');
// const maxWidth = require('./tailwind-theme/max-width');
// const colors = require('./tailwind-theme/colors');
// const fontFamily = require('./tailwind-theme/font-family');
// const typography = require('./tailwind-theme/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // variables: variables,
    // colors: colors,
    // screens: breakpoint,
    // extend: {
    //   fontFamily: fontFamily,
    //   // typography: typography,
    //   spacing: {
    //     gutter: '20px',
    //   },
    // },
  },
  plugins: [],
};
