/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'gradiente_seyte_1':'#343449',
        'gradiente_seyte_2':'#2b4f63',
        'gradiente_seyte_3':'#22687c',
      }
    },
  },
  plugins: [],
}

