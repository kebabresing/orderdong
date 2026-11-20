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
          DEFAULT: '#1659b7',
          hover: '#124a9a',
          soft: '#eff5fd',
          border: '#bcd3f0',
          ring: '#cfe3ff'
        },
        caramel: {
          DEFAULT: '#c39155',
          soft: '#fdf8f2'
        },
        crimson: {
          DEFAULT: '#bf1926'
        },
        ink: {
          DEFAULT: '#1f1f1f',
          soft: '#555555',
          mute: '#867e80',
          light: '#9b9b9b'
        },
        surface: '#f6f6f6'
      },
      fontFamily: {
        sans: ['"Mulish"', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
