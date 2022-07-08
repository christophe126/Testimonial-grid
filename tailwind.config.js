/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif']
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        15: '15',
        23: '23',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
