/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        gry:'#707070',
        gry2:'#fff',
        silver:'silver',
        gry3:'#ddd',
        gry4:'#373a3c',
        red:'#cb2e25',
        blue:'#1c7cd5',
        blue2:'#5bc0de',
        black:'#000',
       },
       width: {
   1440:'93rem',
   450:'28rem',
   405:'25rem',
   1136:'73rem',
   848:'53rem',
       },
       height:{
         1024:'64rem',
         415:'26rem',
         523:'29rem',
         964:'60rem',
         366:'23rem',
       },
       padding:{
         495:'31rem',
         102:'5.75rem',
         817:'51rem',
       },
       margin:{
         953:'61rem',
         467:'29rem',
         770:'48rem',
       },
       gap:{
         12:'4.85rem',
       },
    },
  },
  plugins: [],
}

