module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extends: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        gray: {
          100: "#eeeeee",
          200: "#e0e0e0",
          300: "#bbbbbb",
          400: "#666666",
          500: "#444444",
          600: "#2a2a2a",
          700: "#1e1e1e",
          750: "#1e1e1e",
          800: "#181818",
          900: "#0f0f0f",
        },
        green: {
          600: "#053016",
          700: "#72C894",
          500: "#0F9143",
        },
        slate: {
          900: "#1e1e1e",
        },
        // black: "#000000",
      },
      fontFamily: {
        sans: ["lato", "office code pro"],
        serif: ["lato", "office code pro"],
        mono: ["lato", "office code pro"],
      },
    },
  },

  plugins: [require("tailwindcss/colors")],
};
