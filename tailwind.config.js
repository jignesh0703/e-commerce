/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px',
        '4xl': '1920px', // You can adjust the value here as needed
      },
    },
  },
  plugins: [],
}

