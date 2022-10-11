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
    },
    extend: {
      width: {
        128: "550px",
      },
    },
  },
  plugins: [],
};
