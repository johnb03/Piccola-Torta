/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./deploy/src/**/*.html",
    "./deploy/html/**.html",
    "./deploy/**.html",
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
      heroBackground: "url('/deploy/public/image/hero-image.png') ",
      imageDivBG: "url(/deploy/public/image/picaderas.jpg)",
      
    },
  },
  plugins: [],
};
