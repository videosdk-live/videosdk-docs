module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // extends: {
    fontFamily: {
      sans: ["lato", "office code pro"],
      serif: ["lato", "office code pro"],
      mono: ["lato", "office code pro"],
    },
    fontSize: {
      xs: ".72rem",
      lg: "30px",
    },
    screens: {
      xs: { min: "230px", max: "639px" },
      sm: { min: "640px", max: "780px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "781px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
  },
  darkMode: "class",
  plugins: [],
};