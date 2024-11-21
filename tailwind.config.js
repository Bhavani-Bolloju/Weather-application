/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            barlow: ['Barlow', 'sans-serif'],
         },
         gridTemplateColumns: {
            card: '30px 1fr',
            icons: '25px 1fr',
         },
      },
   },
   plugins: [],
}
