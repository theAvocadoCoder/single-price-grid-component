/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'cyan': '#2ab2af',
        'bright-yellow': '#c0df34',
        'light-gray':'#e5eff5',
        'grayish-blue':'#98a6bd',
      },
      fontFamily: {
        karla: ['"Karla"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
