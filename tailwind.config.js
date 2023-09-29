/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-background": "hsl(185, 41%, 84%)",
        "output-bg": "#00474B",
        "reset-bg": "#26C2AE",
        "btn-active": "#9FE8DF",
        "input-bg": "#F3F9FA",
        "percent-btn": "#00474B",
      },
      colors: {
        "span-color": "#7F9D9F",
        "money-color": "#26C2AE",
        "reset-btn-color": "#00474B",
        "input-txt": "#00474B",
        "h2-color": "#5E7A7D",
        "btn-active-color": "#9FE8DF",

      },
    },
  },
  plugins: [],
};
