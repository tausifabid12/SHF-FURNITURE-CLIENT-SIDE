/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#ea3f30",
          primary: "#D1D5DB",

          secondary: "#26e134",

          accent: "#f1f1f1",

          neutral: "#232131",

          "base-100": "#ffffff",

          info: "#7EBDF1",

          success: "#58E997",

          warning: "#975107",

          error: "#F76B69",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
