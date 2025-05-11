/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        primary: "#9999FF",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
    },

      


    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'work-sans': ['Work Sans', 'sans-serif'],
      pacifico: ['Pacifico', 'cursive'],
    },
container:{
  center: true,
  padding:{
    DEFAULT: '1rem',
    sm: '3rem',
  }
}

    },
  },
  plugins: [],
}

