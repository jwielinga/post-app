/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(99, 87, 177, 255)",
        secondary: "rgba(40,255,144,255)",
        white: "rgba(254, 254, 255, 255)",
        neutral: "rgba(246, 246, 246, 255)",
      },
      backgroundImage: {
        "gradient-10": "linear-gradient(25deg, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "100%": "100%",
        20: "20rem",
      },
    },
    plugins: [],
  },
};
