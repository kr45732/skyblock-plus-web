const config = {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        navbar: "#b91c1c",
        footer: "#191919"
      }
    }
  },
  daisyui: {
    base: false,
    themes: false,
    utils: false
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'), require('flowbite/plugin')]
};

module.exports = config;
