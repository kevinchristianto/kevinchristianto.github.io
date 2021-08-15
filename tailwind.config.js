module.exports = {
  purge: [
    "./**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Gowun Batang', 'serif'],
      'body': ['Georama', 'sans-serif'],
    },
    extend: {
      colors: {
        'accent': {
          DEFAULT: '#E94560',
          '50': '#FFFFFF',
          '100': '#FFFBFC',
          '200': '#F9CED5',
          '300': '#F4A0AE',
          '400': '#EE7387',
          '500': '#E94560',
          '600': '#E01B3B',
          '700': '#B3152F',
          '800': '#851023',
          '900': '#580A17'
        },
      }
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
      transform: ['hover'],
      backgroundColor: ['active'],
      ringWidth: ['hover'],
      letterSpacing: ['group-hover'],
      filter: ['group-hover'],
      grayscale: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
