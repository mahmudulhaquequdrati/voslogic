/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dm: "DM Sans, sans-serif",
        Ar: "AR One Sans, sans-serif",
        Tw: "Titillium Web, sans-serif",
      },
    },
  },
  plugins: [],
};
