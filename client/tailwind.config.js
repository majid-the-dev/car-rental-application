/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5897fb',
        secondary: '#edf1f7',
        tertiary: '#e5eaf2',
        textDefault: '#212529',
        red: '#d23787',
        green: '#29b474',
        purple: '#8051d4'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

