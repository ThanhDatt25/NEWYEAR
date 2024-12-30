import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FFB800", // Vibrant yellow-gold
        secondary: "#FF5E5E", // Bright red
        accent: "#FF007A", // Pink
      },
    },
  },
  plugins: [],
};
export default config;
