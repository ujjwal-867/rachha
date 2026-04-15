/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseMist: '#FFF0F3',   // Neutral Pink
        royalGold: '#D4AF37',  // Primary Gold
        pureWhite: '#FFFFFF',  // Secondary White
        deepGold: '#AA8A2E',   // Darker shade for hover
        charcoal: '#3D3522',   // Text color
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // primary
        sans: ['Montserrat', 'sans-serif'], // secondary
      },
    },
  },
  plugins: [],
}

