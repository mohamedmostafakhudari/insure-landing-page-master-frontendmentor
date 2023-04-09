/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          dark: "hsl(256, 26%, 20%)",
          veryDark: "hsl(270, 9%, 17%)",
          darkGrayish: "hsl(273, 4%, 51%)",
        },
        blue: {
          grayish: "hsl(216, 30%, 68%)",
        },
        gray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        body: ["'Karla'", "sans-serif"],
        heading: ["'DM Serif Display'", "serif"],
      },
    },
  },
  plugins: [],
};
