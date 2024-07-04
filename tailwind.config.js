/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "index.html",
    "js",
    "home.html",
    "blog.html",
    "cotizador.html",
    "app.js",
    "index.js",
    "menu.html",
  ],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    extend: {
      
      colors: {
        primaryColor: "#09595D",
        secondDaryColor: "#FFBD4A",
        BlackLight: "#313131",
        whiteD: "#F9F9F9",
      },
    },
    backgroundImage: {
      gradientBackG: "linear-gradient(90deg, #313131,#1B7E7F)",
      heroBackground: "url('/public/image/hero-image.png') ",
      imageDivBG: "url(/public/image/picaderas.jpg)",
      
    },
  },
  plugins: [],
};
