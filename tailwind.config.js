/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./*.{html,js}",], // Pastikan pola ini mencakup file HTML atau JS Anda
  theme: {
    extend: {
      colors: {
          customHeader: '#1f2030', // Tambahkan warna kustom di sini
      },
      fontFamily: {
          nunito: ['Nunito', 'sans-serif'],
          nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
  },
  },
  plugins: [],
}