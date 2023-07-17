/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        permanent: ["Permanent Marker", "cursive"],
        foldit: ["Foldit", "cursive"]
      },
      colors: {
        primary: "rgb(250, 250, 250)",
        secondary: "#2e3038",
        link: "#0683ff"
      }
    }
  },
  plugins: []
};
