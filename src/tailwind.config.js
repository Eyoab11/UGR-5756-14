/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/about.html',
    './dist/contact.html',
    './dist/homepage.html',
    './dist/resume.html',
    './dist/skills.html',
  ],
  theme: {
    screens: {
      sm: '0px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}

