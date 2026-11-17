/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6B4423',
          light: '#6B44231a',
          hover: '#5A381B',
          ring: '#6B44234d'
        },
        cream: {
          DEFAULT: '#F3E9DB',
          deep: '#EADFC8',
          soft: '#F8F2E9'
        },
        ink: {
          DEFAULT: '#1A1614',
          soft: '#5C4A3A',
          mute: '#A08972'
        },
        surface: '#FAF6F0'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

