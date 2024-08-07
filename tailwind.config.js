/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
    colors: {
      "bluemain": "#0A77BE",
      "bluesec": "#3C41B0",
      "white": "#fff",
      "lightgray": "#d9d9d9",
      "black": "#000",
      "darkgray": "#8c8c8c"
    }
  },
  plugins: [],
}

