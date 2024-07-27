/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: '#22333b',
        white_smoke: '#f2f4f3',
        beaver: '#a9927d',
        walnut_brown: '#5e503f',
        black: '#0a0908',
      },
    },
  },
  plugins: [],
};