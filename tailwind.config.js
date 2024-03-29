/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        latoLight: "LatoLight",
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      screens: {
        'xs': '350px', // добавлен новый брейкпоинт для маленьких экранов
        'ms': '1200px'

      },
    },
  },
  plugins: [],
}