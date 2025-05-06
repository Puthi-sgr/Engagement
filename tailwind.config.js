/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FDF8F3",
          100: "#FAF0E6",
          200: "#F5E1CC",
          300: "#F0D2B3",
          400: "#EBC399",
          500: "#E6B480",
          600: "#D4AF37", // Primary gold color
          700: "#C19668",
          800: "#AF875C",
          900: "#9C7850",
        },
        pink: {
          50: "#FFF0F5",
          100: "#FFE4EE",
          200: "#FFD4E5",
          300: "#FFC0D9",
          400: "#FFB6C1", // Baby pink
          500: "#FF9BB2",
          600: "#FF799B",
          700: "#FF5C86",
          800: "#FF3D6F",
          900: "#FF1F59",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        "alex-brush": ["Alex Brush", "cursive"],
        "odar-mean-chey": ["Cormorant Garamond", "serif"],
        moul: ["Moul, serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
