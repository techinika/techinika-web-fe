module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   mainBg: "",
    //   backgroundColor: "",
    //   textCOlor: "#2844CC",
    //   white:"#fffff"
    // },
    extend: {
      backgroundColor: {
        main: "#269DF8",
        mainBlue: "#2844CC",
        mainBg: "#F8F8F8",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
      },
      colors: {
        main: "#269DF8",
        mainBlue: "#2844CC",
        mainBg: "#F8F8F8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
