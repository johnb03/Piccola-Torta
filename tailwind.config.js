/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./deploy/**/*.{html, js}",
  ],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    extend: {
      
      colors: {
        primaryColor: "#09595D",
        primaryColorLight:"#1b7e7f",
        secondDaryColor: "#FFBD4A",
        BlackLight: "#313131",
        whiteD: "#F9F9F9",
      },
    },
    backgroundImage: {
      gradientBackG: "linear-gradient(90deg, #313131,#1B7E7F)",
      
      
    },
  },
  plugins: [],
};
