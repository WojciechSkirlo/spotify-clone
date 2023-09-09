/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.6875rem', '1.125rem'], // 11px
      sm: ['0.875rem', '1.375rem'], // 14px
      base: ['1rem', '1.6rem'], // 16px
      lg: ['1.125rem', '1.125rem'], // 18px
      xl: ['1.5rem', '1.5rem'], // 24px,
      '2xl': ['4.5rem', '4.5rem'] // 72px
    },
    extend: {
      colors: {
        black: '#000000',
        'cod-gray': {
          light: '#1a1a1a',
          DEFAULT: '#121212'
        },
        'mine-shaft': {
          light: '#2a2a2a',
          DEFAULT: '292929',
          dark: '#242424'
        },
        white: '#ffffff',
        'silver-chalice': '#a7a7a7',
        malachite: '#1ed760',
        carnation: '#f15e6c',
        sunshade: '#ffa42b',
        'dodger-blue': '#3d91f4',
        'dove-gray': '#727272',
        crimson: '#e91429',
        'blue-ribbon': '#0d72ea'
      },
      spacing: {
        7.5: '1.875rem'
      }
    }
  },
  plugins: []
};
