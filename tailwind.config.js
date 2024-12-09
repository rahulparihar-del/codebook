/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#080808',
      },
      fontSize: {
        'custom-1.3': '1.3rem', // Custom font size
      },
    },
  },
  plugins: [],
}