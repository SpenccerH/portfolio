/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand': '#F7F5F2',
        'subgray': '#B3B3B3',
        'darkgray': '#716B61',
      }
    },
  },
  plugins: [],
}

