/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        tomato : '#ff6347',

        primary : {
          50 : "#ffd60a",
          500 : "#ffb703",
          900 : "#fb8500",
        }
      }
    },
  },
  plugins: [],
}