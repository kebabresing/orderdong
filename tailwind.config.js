/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orderdong: {
          DEFAULT: '#ea580c',
          hover: '#c2410c',
          soft: '#fff7ed',
          border: '#fed7aa',
          ring: '#fdba74',
          dark: '#18181b'
        },
        amber: {
          accent: '#d97706'
        },
        crimson: {
          DEFAULT: '#dc2626'
        },
        ink: {
          DEFAULT: '#18181b',
          soft: '#52525b',
          mute: '#71717a',
          light: '#a1a1aa'
        },
        surface: '#f4f4f5'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Mulish"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
