/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'company': 'Courgette',
      'gothic': 'Gothic_A1',
      'gothic-black': 'Gothic_A1_black',
      'gothic-bold': 'Gothic_A1_bold'
    },
    extend: {
      backdropBlur: {
        xsm: '2px'
      },
      spacing: {
        '7/8': '87.5%',
        '3/8': '37.5%',
        '5/16': '31.25%'
      },
      lineHeight: {
        'extra-tight': '1.15'
      }
    },
    minHeight: {
      '3/8': '37.5%'
    }
  },
  plugins: [],
}
