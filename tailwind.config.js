/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // Next.js App directory
    "./pages/**/*.{js,ts,jsx,tsx}",      // Pages directory
    "./components/**/*.{js,ts,jsx,tsx}"  // Components directory
  ],
  theme: {
    extend: {},  // You can add custom colors, spacing, etc. here
  },
  plugins: [
    require('tailwind-scrollbar')        // Enables Tailwind scrollbar classes
  ],
}
