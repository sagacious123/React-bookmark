const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'navbg': '#252b46',
      // 'primaryblue': '#5368df'
    }),
    extend: {
      colors: {
        'primaryblue': '#5368df'
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
        '11/10': '110%'
      },
      inset: {
        '84': '22rem',
        '86': '23.3rem',
        '4/50': '8%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}:after`
        })
      })
    })
  ],
}
