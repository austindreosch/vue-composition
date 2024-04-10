/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flash: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        }
      },
      animation: {
        flash: 'flash .5s linear',
      }
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
    },
  },
  plugins: [],
}