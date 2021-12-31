const colors = require("tailwindcss/colors");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        navbar: "",
        footer: "#191919",
        ...colors
      }
    }
  },

  plugins: [require("daisyui")]
};

module.exports = config;
