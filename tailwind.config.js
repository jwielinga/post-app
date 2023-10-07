/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(99, 87, 177, 255)",
        white: "rgba(254, 254, 255, 255)",
        neutral: "rgba(246, 246, 246, 255)",
      },
      backgroundSize: {},
    },
    plugins: [],
  },
};
