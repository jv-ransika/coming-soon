/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-delay': 'fadeIn 1s ease-in-out 0.3s both',
        'fade-in-delay-2': 'fadeIn 1s ease-in-out 0.6s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      colors: {
        'obsidian': {
          '50': '#f7f7f9',
          '100': '#eeeef2',
          '200': '#d9d9e3',
          '300': '#b9b9ca',
          '400': '#9393ab',
          '500': '#747490',
          '600': '#5f5f77',
          '700': '#4e4e61',
          '800': '#424252',
          '900': '#393946',
          '950': '#202026',
        }
      }
    },
  },
  plugins: [],
}