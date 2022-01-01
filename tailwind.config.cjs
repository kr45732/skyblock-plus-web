const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
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
  plugins: [require("daisyui")]
};

module.exports = config;
