/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        brand: "rgb(156, 201, 111)",
        primary: "rgb(156, 201, 111)",
        bgcolor: "#151a15",
        txt: "white",
        scndtxt: "black",
      },
    },
  },
  plugins: [],
}