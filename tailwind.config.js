/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jersey: ['"Jersey 25"']
      },
      animation: {
        fade: 'fadeIn 3s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}