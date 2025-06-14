/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        white: "#ffffff", // Fixed from "ffff" to standard white
        black: "#212529",
        helper: "#8490ff",
        bg: "#F6F8FA",
        footer_bg: "#0a1435",
        btn: "rgb(98 84 243)", // Modern RGB syntax
        border: "rgba(98, 84, 243, 0.5)", // RGBA syntax
        hr: "#ffffff",
        // For gradient, you'll use these directly in classes
        gradient: {
          start: "#8490ff",
          end: "#62bdfc", // rgb(98 189 252) converted to hex
        },
      },
      boxShadow: {
        DEFAULT:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        support: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
      backgroundImage: {
        gradient: "linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)",
      },
    },
  },
  plugins: [],
};
