/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-music':'calc(100vh - 12rem + 8px)'
      }
    },
  },
  plugins: [],
}