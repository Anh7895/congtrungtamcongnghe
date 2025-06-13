/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        tahoma: ['Tahoma', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
                openSansCondensed: ['"Open Sans Condensed"', 'sans-serif'],

      },
      animation: {
        'slide': 'slide 4s ease-in-out forwards',
      },
      keyframes: {
        slide: {
          '0%': {
            backgroundSize: '0% 100%',
          },
          '100%': {
            backgroundSize: '100% 100%',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],

};