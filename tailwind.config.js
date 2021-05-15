module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bunker: {
          50: "#f3f4f4",
          100: "#e8e8e8",
          200: "#c5c6c6",
          300: "#a3a3a4",
          400: "#5d5f5f",
          500: "#181a1b",
          600: "#161718",
          700: "#121414",
          800: "#0e1010",
          900: "#0c0d0d",
        },
        codGray: {
          50: "#f3f3f3",
          100: "#e7e7e7",
          200: "#c3c3c3",
          300: "#9e9f9f",
          400: "#565656",
          500: "#0d0e0e",
          600: "#0c0d0d",
          700: "#0a0b0b",
          800: "#080808",
          900: "#060707",
        },
      },
      screens: {
        lg: "980px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
