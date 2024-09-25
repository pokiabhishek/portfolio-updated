/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm-max':{'max': '767px'},
        'xl-max':{'max':'1280px'},
      }
    },
  },
  plugins: [],
}

