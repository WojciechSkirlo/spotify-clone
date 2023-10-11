/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.6875rem', '1.125rem'], // 11px, 18px
      sm: ['0.875rem', '1.25rem'], // 14px, 20px
      base: ['1rem', '1.375rem'], // 16px, 22px
      lg: ['1.125rem', '1.125rem'], // 18px, 18px
      xl: ['1.5rem', '1.5rem'], // 24px, 24px
      '2xl': ['2rem', '2rem'], // 32px, 32px
      '3xl': ['4.5rem', '4.5rem'], // 72px, 72px
      '4xl': ['6rem', '6rem'] // 96px, 96px
    },
    boxShadow: {
      md: '0 8px 8px rgba(0, 0, 0, .3)',
      DEFAULT: '0 8px 24px rgba(0, 0, 0, .5)',
      lg: '0 16px 24px rgba(0, 0, 0, .3), 0 6px 8px rgba(0, 0, 0, .2)',
      cover: '0 4px 60px rgba(0,0,0,.5)'
    },
    screens: {
      md: '824px',
      lg: '1000px',
      xl: '1420px',
      '2xl': '1640px',
      '3xl': '1848px',
      '4xl': '2052px',
      '5xl': '2256px'
    },
    extend: {
      fontFamily: {
        'circular-sp': ['CircularSp', 'sans-serif'],
        'circular-sp-title': ['CircularSpTitle', 'sans-serif']
      },
      colors: {
        black: '#000000',
        'cod-gray': {
          300: '#1a1a1a',
          400: '#181818',
          500: '#121212'
        },
        'mine-shaft': {
          300: '#2a2a2a',
          400: '#292929',
          500: '#282828',
          600: '#242424'
        },
        white: '#ffffff',
        'silver-chalice': '#a7a7a7',
        malachite: '#1ed760',
        carnation: '#f15e6c',
        sunshade: '#ffa42b',
        'dodger-blue': '#3d91f4',
        'dove-gray': '#727272',
        crimson: '#e91429',
        'blue-ribbon': '#0d72ea',
        tundora: '#4d4d4d',
        nobel: '#b3b3b3'
      },
      spacing: {
        7.5: '1.875rem'
      }
    }
  },
  plugins: []
};
