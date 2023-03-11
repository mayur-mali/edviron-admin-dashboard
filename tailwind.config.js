/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "custom-gray": "#4C4C4C",
        "custom-gray-light": "#808080",
        "custom-green": "#B4CD93",
      },
    },
  },
  plugins: [],
};
