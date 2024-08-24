/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        // Add more custom font families as needed
      },
      screens: {
        laptop: "1440px",
      },
    },
  },
  plugins: [],
};
