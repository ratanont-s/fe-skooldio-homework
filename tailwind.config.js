/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ff5a5a",
        green: "#2ecc71",
        teal: "#48b6a3",
        grey: "#9b9b9b",
      },
    },
  },
  plugins: [],
};
