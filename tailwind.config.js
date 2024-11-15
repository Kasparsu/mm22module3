/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#9900CC',
        'secondary': '#D699EB'
      },
      fontFamily: {
        primary: ['Kenyan Coffee', 'sans-serif']
      }
    },
  },
  plugins: [],
}

