/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          mid: "#1A2E42",
          light: "#243B53",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
          pale: "#F6EDDA",
        },
        cream: "#FAF8F4",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        ethiopic: ["var(--font-noto-ethiopic)", "serif"],
      },
    },
  },
  plugins: [],
};
