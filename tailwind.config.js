/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        primary: "#772ab3",
        secondary: "#adb2b1",
        foreground: "#ffffff",
      },
      fontFamily: {
        Mplus1: '"M PLUS 1", sans-serif',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
