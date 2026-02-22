/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B3FBF',
        secondary: '#CDFD02',
        accent: '#6B2D91',
      },
    },
  },
  plugins: [],
}
