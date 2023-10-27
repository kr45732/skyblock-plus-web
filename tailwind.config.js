const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require("daisyui"), require('@tailwindcss/typography'),
  plugin(function ({ addUtilities }) {
    addUtilities({
      '.no-scrollbar::-webkit-scrollbar': {
        'display': 'none'
      }
    })
  })
  ],
}

