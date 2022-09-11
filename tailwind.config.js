/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    colors: {
      dark: "#191919",
      darkLight: "#636363",
      white: "#fff",
      gray: "#999999",
      grayLight: "#F1F1F1",
      orange: "#d87d4a",
      orangeLight: "#fbaf85",
    },

    extend: {
      spacing: {
        defaultWidth: "1158px",
      },
    },
  },
  plugins: [],
};
