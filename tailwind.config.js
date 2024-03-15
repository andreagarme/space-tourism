/** @type {import('tailwindcss').Config} */
/**
 En tailwind, los títulos por defecto son serif y el resto de fuentes son sans.
 Para los colores, se debe de colocar siempre en extend en lugar de en el theme para que no 
 se eliminen los colores por defecto.
 */

module.exports = {
  content: [    "./src/**/*.{html,ts}",],
  darkmode: "class",
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
        serif: ['Bellefair', 'serif'],
      },
      colors: {
        primary:"#0B0D17",
        secondary: "#D0D6F9",
      }
    },
  },
  plugins: [],
}

