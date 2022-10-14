/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      youtubeBg: "#212121",
      searchBg: "#121212",
      borderCl: "#303030",
      placeHolderCl: "#888888",
      buttonBg: "#323232",
      textcolor: "#d1d1d1",
      pickTextColor: "#FBFAFA",
      navHoverBg: "#383838",
      fadeTextCl: "#AAAAAA",
      suggestionsCl: "#3B3939",
      videosBgCl: "#181818",
    },

    extend: {
      spacing: {
        90: "360px",
        50: "200px",
        120: "480px",
        150: "600px",
        180: "720px",
        210: "1673px",
        240: "960px",
        350: "2000px",
      },
      width: {
        128: "530px",
        1960: "1960px",
      },
      height: {
        400: "3600px",
        320: "1280px",
      },
    },
  },
  plugins: [],
};
