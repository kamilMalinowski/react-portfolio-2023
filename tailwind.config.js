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
        secondary: '#7DE4AC',
      },
      backgroundImage: {
        'bg-primary': "url('https://www.kamil--m.com/next/assets/code-bg.jpg')",
      }
    },
  },
  plugins: [],
}
