/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        '1-auto': '1'
      },
      fontFamily: {
        poppins: ['Poppins']
      },
      backgroundImage: {
        'shadow-card':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.08) 43.23%, #0000008c 65.62%)'
      }
    }
  },
  plugins: []
}
