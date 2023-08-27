/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        kiri: ["0px 65px 10px"],
      },
      colors: {
        tema1: ["#95204D"],
        tema2: ["#ffd4db"],
        tema3: ["#F1C175"],
        tema4: ["#f7e1e5"],
      },
      fontFamily: {
        Adlam: ["ADLaM Display"],
      },
      animation: {
        Nav1: "animNav 1.5s ease-in-out infinite",
        Nav2: "animNav2 1.5s ease-in-out infinite",
      },
      keyframes: {
        animNav: {
          "0%, 100%": { transform: "scaleX(0.6)" },
          "50%": { transform: "scaleX(1)" },
        },
        animNav2: {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(.6)" },
        },
      },
    },
  },
  plugins: [],
};
