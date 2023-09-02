/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#121212',
        accent: '#1ed760',
        subtle: '#b3b3b3',
        subdued: '#a7a7a7'
      }
    }
  },
  plugins: []
};
