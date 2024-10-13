module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainBlue: "#17327b",
        mainYellow: "#fbdb5a",
        bg: "aliceblue",
      },
      backgroundImage: {
        causeBg: "url('/dots-bg.jpg')",
      },
      fontFamily: {
        main: ["Space Grotesk", "Jua", "sans-serif"],
      },
      colors: {
        main: "#269DF8",
        mainBlue: "#2844CC",
        mainBg: "#F8F8F8",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
