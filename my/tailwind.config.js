/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
    width: {
   1440:'93rem',
   1728:'90rem',
   450:'28rem',
   405:'25rem',
   1136:'73rem',
   848:'53rem',
   650:'33rem'
       },
       height:{
         1024:'64rem',
         415:'26rem',
         523:'29rem',
         964:'60rem',
         366:'23rem',
         350:'20rem',
       },
       padding:{
         495:'31rem',
         102:'5.75rem',
         817:'40rem',
         770:'33rem',
         800:'38rem',
       },
       margin:{
        840:'38rem',
       },
       borderRadius: {
        250:"16rem",
       },
       maxWidth: {
        210:"10rem",
       },
    },
  },
  plugins: [],
}

