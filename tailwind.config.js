/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ["sm", "md", "lg", "xl", "2xl"]
    },
    {
      pattern: /^gap-/,
      variants: ["sm", "md", "lg", "xl", "2xl"]
    },
    {
      pattern: /^text-/,
      variants: ["xs", "sm", "md", "lg", "xl", "2xl"]
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(250, 250, 250)",
        secondary: "#2e3038",
        link: "#0683ff"
      }
    }
  },
  plugins: []
};
