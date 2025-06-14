/** @type {import('tailwindcss').Config} */
export default {
  // Specify the paths to all of the template files in your project
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Specify the dark mode strategy

  theme: {
    extend: {
      // Extend the default theme with backdrop blur utility
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

