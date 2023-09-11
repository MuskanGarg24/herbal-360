/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

