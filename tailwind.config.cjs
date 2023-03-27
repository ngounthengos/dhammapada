/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio:{
        "portrait": '9 / 18',
        '4/3': '4 / 3',
      },
      fontFamily:{
        "sans":"Krasar",
        "pali":"Moulpali"
      }
    },
  },
  plugins: [],
}
