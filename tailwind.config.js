/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     screens:{
      'nav':'1050px'
     }
      
    },
  },
  plugins: [],
};
