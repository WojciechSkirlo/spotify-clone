/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.6875rem', '1.125rem'], // 11px
      sm: ['0.875rem', '1.375rem'], // 14px
      base: ['1rem', '1.625rem'], // 16px
      lg: ['1.125rem', '1.125rem'], // 18px
      xl: ['1.5rem', '1.5rem'], // 24px,
      '2xl': ['4.5rem', '4.5rem'] // 72px
    },
    extend: {
      colors: {
        'dark-gray': '#121212',
        accent: '#1ed760',
        subtle: '#b3b3b3',
        subdued: '#a7a7a7'
      },
      spacing: {
        7.5: '1.875rem'
      }
    }
  },
  plugins: []
};
