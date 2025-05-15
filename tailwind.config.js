/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#1E3A8A', // Dark blue
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gold: {
          50: '#FDF8E9',
          100: '#FBF0D3',
          200: '#F7E1A7',
          300: '#F3D27C',
          400: '#EFC350',
          500: '#D4AF37', // Soft gold
          600: '#B8941F',
          700: '#997A1A',
          800: '#7A6114',
          900: '#5C470F',
        },
        charcoal: {
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#DFDFDF',
          300: '#CFCFCF',
          400: '#B0B0B0',
          500: '#909090',
          600: '#707070',
          700: '#505050',
          800: '#333333', // Charcoal
          900: '#1F1F1F',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          700: '#B91C1C',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
      },
      boxShadow: {
        'elegant': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}