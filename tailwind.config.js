/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};