/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          lightBg: '#FAFAF7',
          lightPrimary: '#244E42',
          lightSecondary: '#8AA995',
          lightAccent: '#E9BFA9',
          lightText: '#202A26',
          lightCard: '#FFFFFF',
          
          darkBg: '#101714',
          darkBgSecondary: '#19231E',
          darkCard: '#202C25',
          darkPrimary: '#91C5A7',
          darkText: '#F5F7F4',
          darkMuted: '#AAB8AF',

          sage: {
            50: '#F4F7F5',
            100: '#E6ECE8',
            200: '#CAD7CE',
            300: '#AABEB0',
            400: '#8AA995',
            500: '#648871',
            600: '#4B6B57',
            700: '#385242',
            800: '#244E42',
            900: '#17342C',
          },
          blush: {
            50: '#FDF8F6',
            100: '#FAF0EB',
            200: '#F5E0D6',
            300: '#E9BFA9',
            400: '#DDA285',
            500: '#CC7F5D',
            600: '#B25D39',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 78, 66, 0.06), 0 2px 6px -1px rgba(36, 78, 66, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(36, 78, 66, 0.1), 0 4px 12px -2px rgba(36, 78, 66, 0.06)',
        'dark-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
