module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
    keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(150%)",
            transform: "translateX(150%)",
          },
          animation: {
            "slide-in": "slide-in 0.6s ease-out",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.6s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },  
  plugins: [],
};
