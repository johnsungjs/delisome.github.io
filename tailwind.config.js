/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '0px',
    },
    extend: {
      colors: {
        primary: '#1b1f2a',
        secondary: '#d3d5d6',
        tertiary: '#7576d9',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

