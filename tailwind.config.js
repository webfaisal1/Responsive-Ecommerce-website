/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "980px",
        xl: "1200px",
        "2xl": "1500px",
      },
    },
  },
  plugins: [],
};
