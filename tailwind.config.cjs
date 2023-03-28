/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sans":"Kboeung",
        "pali":"Moulpali",
        "title":"Krasar"
      },
      colors: {
        "main":"#00FA95"
      }
    },
  },
  plugins: [],
}


// aspectRatio:{
//   "portrait": '9 / 16',
//   '4/3': '4 / 3',
// },
// fontFamily:{
//   "sans":"Krasar",
//   "pali":"Moulpali"
// }