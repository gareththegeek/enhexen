/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'grey-50': '#f9f7f6',
      'grey-100': '#f3f0ed',
      'grey-200': '#eae6e1',
      'grey-300': '#d4cec4',
      'grey-400': '#bdb4a8',
      'grey-500': '#837a6d',
      'grey-600': '#686055',
      'grey-700': '#484137',
      'grey-800': '#2c2721',
      'grey-900': '#1e1a15',
      white: '#fff',
      'primary-50': '#f9f0ff',
      'primary-100': '#f0e1ff',
      'primary-200': '#e4ccff',
      'primary-400': '#9767fe',
      'primary-500': '#5d12ff',
      'primary-600': '#3d00cc',
      'primary-700': '#2b0099',
      'primary-800': '#220080',
    },
    extend: {
      flex: {
        2: '2 2 0%',
      },
    },
  },
  plugins: [],
}
