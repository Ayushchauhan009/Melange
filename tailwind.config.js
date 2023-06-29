/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scale 0.5s ease-in-out",
      },
      screens: {
        xxs: "300px",
        xs: "400px",
        xxl: "1400px",
        xxxl: "1562px",
        xl4: "1602px",
        xl5: "1650px",
        xl6: "1700px",
        xl7: "1740px",
      },
    },
  },
  plugins: [],
};
