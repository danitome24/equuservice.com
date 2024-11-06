/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          50: "#f9f9f9",
          100: "#efefef",
          200: "#e6e6e6",
          300: "#dbdbdb",
          400: "#d1d1d1",
          500: "#c7c7c7",
          600: "#bdbdbd",
          700: "#b3b3b3",
          800: "#a8a8a8",
          900: "#9e9e9e",
          950: "#949494",
          DEFAULT: "#f9f9f9",
        },
        "base-dark": {
          50: "#808080",
          100: "#757575",
          200: "#6b6b6b",
          300: "#616161",
          400: "#575757",
          500: "#4d4d4d",
          600: "#424242",
          700: "#383838",
          800: "#2e2e2e",
          900: "#242424",
          950: "#1a1a1a",
          DEFAULT: "#1a1a1a",
        },

        accent: {
          50: "#ffffff",
          100: "#c7c7c7",
          200: "#b3b3b3",
          300: "#949494",
          400: "#707070",
          500: "#545454",
          600: "#3d3d3d",
          700: "#292929",
          800: "#1c1c1c",
          900: "#141414",
          950: "#000000",
          DEFAULT: "#000000",
          light: "#ffffff",
          dark: "#000000",
        },
        // primary: {
        //   50: "#f1fcf1",
        //   100: "#e0f9df",
        //   200: "#c2f1c1",
        //   300: "#92e491",
        //   400: "#5acf59",
        //   500: "#34b433",
        //   DEFAULT: "#228B22",
        //   600: "#228b22",
        //   700: "#207521",
        //   800: "#1e5d1f",
        //   900: "#1a4d1b",
        //   950: "#092a0b",
        // },
        primary: {
          50:  "#fff8f2",   // Naranja muy claro, casi blanco
          100: "#ffedd8",   // Naranja muy suave y pastel
          200: "#ffdab1",   // Naranja pastel, cálido
          300: "#ffc180",   // Naranja claro
          400: "#ffa957",   // Naranja suave
          500: "#ff9230",   // Naranja equilibrado (ligeramente más claro que el original)
          DEFAULT: "#ffa226", // Naranja de Equuservice
          600: "#e58f23",   // Naranja oscuro
          700: "#c67a1e",   // Naranja más profundo
          800: "#a6671a",   // Naranja intenso y oscuro
          900: "#804e14",   // Naranja muy oscuro, con un tono terroso
          950: "#4a2a0b"    // Naranja extremadamente oscuro, casi marrón
        },
        secondary: {
          50: "#edfaff",
          100: "#d6f2ff",
          200: "#b5eaff",
          300: "#83dfff",
          400: "#48cbff",
          DEFAULT: "#1eadff",
          500: "#1eadff",
          600: "#068fff",
          700: "#007bff",
          800: "#085ec5",
          900: "#0d519b",
          950: "#0e315d",
        },
        cta: {
          50: "#ffffe7",
          100: "#feffc1",
          200: "#fffd86",
          300: "#fff441",
          400: "#ffe60d",
          DEFAULT: "#ffd700",
          500: "#ffd700",
          600: "#d19e00",
          700: "#a67102",
          800: "#89580a",
          900: "#74480f",
          950: "#442604",
        },
      },
      screens: {
        midmd: "880px",
      },
      boxShadow: {
        aesthetic: "0 3px 10px rgb(0,0,0,0.2)",
        dark: "inset 0 1px 0 0 #ffffff0d",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
