/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '576px'},
      },
      fontFamily:{
        jersey: ['"Jersey 25"']
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
        fadeOut: 'fadeOut 3s ease-in-out',
      },

      // that is actual animation
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut:{
          '0%': {opacity: 1},
          '100%': {opacity: 0}
        }
      }),
    },
  },
  plugins: [],
}