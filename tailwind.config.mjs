/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans], 
        caveat: ["var(--font-caveat)", ...fontFamily.sans],// Ajoutez Roboto
        montserrat_Alternates: ["var(--font-montserrat_Alternates)", ...fontFamily.sans],// Ajoutez Roboto
      },
    },
  },
  plugins: [],
};
