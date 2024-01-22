/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // MEMBUAT CUSTOM SPACING
      spacing: {
        13: '3.25rem',
      }
    },
  },
  plugins: [],
}

