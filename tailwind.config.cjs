const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Galano Grotesque", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#146EB4",
      },
    },
  },
};
