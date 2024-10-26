/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'chinese-black': '#141414',
        'jet': "#323437",
        'atomic-tangerine': '#FF9357',
        'dark-gray': '#A8A8A8',
        'chrome-aluminum': '#A8A8AB',
        'vanta-black': '#010101',
        'lead': '#202020',
        'vegan-mastermind': '#1EBA53',
        'acid-pops': '#2FE76E',
        'broken-tube': '#050211',
        'waterloo': '#494950',
        'dark-rift': "#050C15"
      },
      backgroundImage: {
        'hero-bg': "url('./public/images/hero-bg.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    fontFamily: {
      "Poppins": ['Poppins']
    }
  },
  plugins: [],
}