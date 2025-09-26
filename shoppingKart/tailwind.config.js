/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos de React
  ],
  theme: {
    extend: {
        fontFamily: {
            josefin: ['Josefin Sans', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
