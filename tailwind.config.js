/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6b9080",    // Lys (Light)
        secondary: "#455e53",  // Middels (Middle)
        dark: "#283831",       // Mørk (Dark)
        light: "#F9F7F7",      // Keeping original light color for contrast
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 