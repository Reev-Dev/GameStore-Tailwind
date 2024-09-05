/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./*.{html,js}",],
  theme: {
    extend: {
      colors: {
          customHeader: '#1f2030',
          customBody: '#0c0d14',
          secondaryColor: '#6842ff',
      },
      fontFamily: {
          nunito: ['Nunito', 'sans-serif'],
          nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
  },
  },
  plugins: [],
}