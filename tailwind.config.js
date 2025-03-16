/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryblue : "#5046E4",
        secondaryblue : "#DADCFC",
        primarywhite : "#FFFFFF",
        secondarywhite: "#F9FAFB", 
      }
    },
  },
  plugins: [],
}