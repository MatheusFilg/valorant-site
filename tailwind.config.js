/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-nunito)',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#727275',
          300: '#9e9ea0',
          400: '#2c2c31',
          500: '#56565a',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd0',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
        },
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
      },
    },
  },
  plugins: [],
})
