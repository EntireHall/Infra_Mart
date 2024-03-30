/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chakra': ['Chakra Petch', 'sans-serif'],
        'grotesk' :['Schibsted Grotesk','sans-serif']
      },
    },
  },
  plugins: [],
};
