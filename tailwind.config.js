/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'nunito',
      },
      colors: {
        primary: '#A47DE4',
      },
    },
  },
  plugins: [],
}
