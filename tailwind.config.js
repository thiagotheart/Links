/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan files in the app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // (Optional) Include pages if still used
    "./components/**/*.{js,ts,jsx,tsx}", // (Optional) Include reusable components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
