/* eslint-disable global-require,import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
  ],
};
