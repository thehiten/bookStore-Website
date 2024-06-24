/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line was correct
  ],
  darkMode: "class", // Move this line outside of content array
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
