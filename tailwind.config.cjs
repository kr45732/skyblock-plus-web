const colors = require("tailwindcss/colors");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        ...colors
      }
    }
  },

  plugins: []
};

module.exports = config;
