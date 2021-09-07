module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.vue',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textColor: '#2F455C',
        textColorTwo: '#A2A2A2', 
        primary: '#21D0B2',
        colorThree: '#E4E4E4',
        colorFour: '#21D0B2',
        colorFive: '#FF0000'
      }
    },
    fontFamily: {
      'Poppins': ['Poppins'],
  },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}
