/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}", // <-- include all your src files
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        leagueSpartan: ["var(--font-league-spartan)", "sans-serif"],
        hind: ["var(--font-hind)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
