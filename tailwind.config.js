/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-patten':"url('/src/assets/home/chef-service.jpg')",
        'featured':"url('/src/assets/home/featured.jpg')"
      },
      fontFamily:{
        cinzel:[ "Cinzel", "serif"],
      },
    },
  },
   plugins: [
    require('daisyui'),
  ],
}

