/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(180deg, rgba(6,5,5,0.7) 0%, rgba(6,5,5,0.7) 35%), url('./src/assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
