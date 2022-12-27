/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('/src/assets/landing-background.png')",
        'landing-page-blur': "url('/src/assets/landing-background-blur.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin')],
};
