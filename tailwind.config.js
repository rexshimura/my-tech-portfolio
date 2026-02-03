/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // In v4, dark mode often works best when defined in CSS, 
  // but adding this line ensures compatibility:
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}