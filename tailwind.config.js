/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem',
    },
    extend: {
       colors:{
        brand:{
          1:'#facf00',
          2:'#ffd400'
        },
        dark:{
          1:'#000000',
          2:'#231f20'
        },
        member:'#005baa',
        abu:{
          1:'#1F1F1F',
          2:'#454547',
          3:'#363636'
        }
       }
    },
  },
  plugins: [],
}

