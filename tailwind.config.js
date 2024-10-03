/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",  // This checks all JS/TS files in the pages directory
      "./components/**/*.{js,ts,jsx,tsx}",  // This checks all JS/TS files in the components directory
  ],
  theme: {
      extend: {},
  },
  plugins: [],
};

