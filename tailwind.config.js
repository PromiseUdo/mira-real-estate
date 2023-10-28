/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Work_Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "160%",
          fontWeight: "500",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "180%",
          fontWeight: "500",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "180%",
          fontWeight: "500",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "180%",
          fontWeight: "500",
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: "180%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {},
    },
    colors: {
      ...colors,
      zee: {
        "overlay-bg": "var(--overlay-bg)",
        "gray-50": "var(--gray-50)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-800": "var(--gray-800)",
        "gray-900": "var(--gray-900)",
        "teal-20": "var(--teal-20)",
        "teal-40": "var(--teal-40)",
        "teal-60": "var(--teal-60)",
        "teal-80": "var(--teal-80)",
        "teal-100": "var(--teal-100)",
        "dark-teal-20": "var(--dark-teal-20)",
        "dark-teal-40": "var(--dark-teal-40)",
        "dark-teal-60": "var(--dark-teal-60)",
        "dark-teal-80": "var(--dark-teal-80)",
        "dark-teal-100": "var(--dark-teal-100)",
        "yellow-20": "var(--yellow-20)",
        "yellow-40": "var(--yellow-40)",
        "yellow-60": "var(--yellow-60)",
        "yellow-80": "var(--yellow-80)",
        "yellow-100": "var(--yellow-100)",
        "red-50": "var(--red-50)",
        "red-100": "var(--red-100)",
        "red-200": "var(--red-200)",
        "red-300": "var(--red-300)",
        "red-400": "var(--red-400)",
        "red-500": "var(--red-500)",
        "red-600": "var(--red-600)",
        "red-700": "var(--red-700)",
        "red-800": "var(--red-800)",
        "red-900": "var(--red-900)",
        "green-50": "var(--green-50)",
        "green-100": "var(--green-100)",
        "orange-50": "var(--orange-50)",
        "orange-100": "var(--orange-100)",
        "blue-50": "var(--blue-50)",
        "blue-100": "var(--blue-100)",
        "purple-50": "var(--purple-50)",
        "purple-100": "var(--purple-100)",
        "shades-black": "var(--shades-black)",
        "shades-gray-4": "var(--shades-gray-4)",
        "shades-gray-3": "var(--shades-gray-3)",
        "shades-gray-2.5": "var(--shades-gray-25)",
        "shades-gray-2": "var(--shades-gray-2)",
        "shades-gray-1": "var(--shades-gray-1)",
        "shades-gray-5": "var(--shades-gray-5)",
        "shades-gray-6": "var(--shades-gray-6)",
        "shades-white": "var(--shades-white)",
        "shades-bg": "var(--shades-bg)",
        border: "var(--border)",
        shadow: "var(--shadow)",
        main: "#285F74",
        white: "#FFFFFF",
        yellow: "#EEE82C",
        black: "#121212",
        gray: "#91A1B4",
        fgray: "#92A2B4",
        darkgray: "#435061",
        footer: "#00A0AF",
        footergray: "#3B4756",
        tgray: "#979797",
        fqgray: "#435156",
        border: "#D4DFE3",
        teal: "#EDF5F5",
        bgray: "#F7F7F7",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
