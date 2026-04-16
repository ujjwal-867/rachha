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
        deepGold: '#a57b22',   // Darker shade for hover
        charcoal: '#3D3522',   // Text color 
        gbrown: '#35220e',     // Brown color
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // primary
        sans: ['Montserrat', 'sans-serif'], // secondary
      },
    },
  },
  plugins: [],
}

