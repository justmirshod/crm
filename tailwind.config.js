/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#5932EA",
        dark: "black",
        light_gray: "#9197B3",
        default: "white",
        dark_gray: "#7E7E7E",
        light_green: "#00AC4F",
        ligth_pink: "#FFB1D9",
        light_blue: "#A6E7D8",
        blue: "#00B087",
        light_red: "#FFC5C5",
        red: "#DF0404",
        light_white: "#FAFBFF",
        bar: "#F2EFFF",
      },
    },
  },
  plugins: [],
};
