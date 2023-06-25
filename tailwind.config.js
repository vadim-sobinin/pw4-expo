/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
    './src/**/**/**/*.{js,jsx,ts,tsx}',
    './src/ui/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      light: {
        gray: {
          700: '#131313',
          400: '#696969',
          300: '#9B9B9B',
          250: '#D0D1D0',
          200: '#DEDEDE',
          150: '#F4F5F4',
          100: '#FFFFFF',
        },
        primary: {
          link: '#B8DE64',
          DEFAULT: '#02FF3A',
          pressed: '#75C537',
        },
      },
      dark: {
        gray: {
          700: '#FFFFFF',
          400: '#DEDEDE',
          300: '#9B9B9B',
          250: '#696969',
          200: '#303030',
          150: '#1b1b1b',
          100: '#131313',
        },

        primary: {
          link: 'B8DE64',
          DEFAULT: '#91C521',
          pressed: '#7AA818',
        },
      },
      error: '#C2534C',
    },
    extend: {},
  },
  plugins: [],
};
