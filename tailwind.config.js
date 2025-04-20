/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8E9',
          100: '#FCF2D3',
          200: '#F9E5A7',
          300: '#F5D77A',
          400: '#F2CA4E',
          500: '#CEAB42',
          600: '#B38C28',
          700: '#8B6D1F',
          800: '#634E16',
          900: '#3A2F0D',
        },
        cream: {
          50: '#FEFDFB',
          100: '#FDFAF2',
          200: '#FCF7E8',
          300: '#FAF3DE',
          400: '#F8F0D5',
          500: '#F6EDCB',
          600: '#F4E9C2',
          700: '#F2E6B8',
          800: '#F0E3AF',
          900: '#EEE0A5',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 1s ease-out forwards',
        'scroll': 'scroll 2s ease-in-out infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      scale: {
        '102': '1.02',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};