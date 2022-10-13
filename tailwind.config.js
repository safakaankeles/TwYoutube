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
    },
    extend: {
      width: {
        128: "550px",
      },
      height: {
        400: "3600px",
        320: "1280px",
      },
    },
  },
  plugins: [],
};
