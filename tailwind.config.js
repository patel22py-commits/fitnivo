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
          lightBg: '#FFF8F9',
          lightPrimary: '#A84860',
          lightSecondary: '#D67990',
          lightAccent: '#F6BAC6',
          lightText: '#301A24',
          lightCard: '#FFFFFF',
          
          darkBg: '#160C12',
          darkBgSecondary: '#22131C',
          darkCard: '#2C1924',
          darkPrimary: '#FCA5B9',
          darkText: '#FFF0F4',
          darkMuted: '#C4A9B3',

          // Remapped to women's favorite romantic rose & berry tones
          sage: {
            50: '#FDF4F6',
            100: '#FBE8EB',
            200: '#F7D0D8',
            300: '#F1AFC0',
            400: '#E6879F',
            500: '#D66583',
            600: '#BD4867',
            700: '#9E3350',
            800: '#7F243D',
            900: '#4D1424',
            950: '#2C0913',
          },
          blush: {
            50: '#FFF5F7',
            100: '#FEEAF0',
            200: '#FCD4E0',
            300: '#F8B0C5',
            400: '#F28AA7',
            500: '#E86389',
            600: '#CF416B',
          },
          berry: {
            50: '#FAF0F3',
            100: '#F4DEE6',
            200: '#EABECF',
            300: '#DE99B3',
            400: '#CE6C90',
            500: '#BA4772',
            600: '#9B335B',
            700: '#7E2548',
            800: '#641C38',
            900: '#461125',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(168, 72, 96, 0.08), 0 2px 6px -1px rgba(168, 72, 96, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(168, 72, 96, 0.12), 0 4px 12px -2px rgba(168, 72, 96, 0.06)',
        'dark-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
