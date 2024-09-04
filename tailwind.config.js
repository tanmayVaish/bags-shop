/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "800px",
        sm: "950px",
        md: "1024px",
        lg: "1320px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    colors: {
      primary: "#E9F8FC",
      secondary: "#ECF9FF",

      text_primary: "#222222",
      text_secondary: "#888888",
      text_tertiary: "#525252",
      text_quaternary: "#172332",

      bg_gray: "#FAFAFA",

      border_primary: "#E3E3E3",

      dark_bottom: "#292929",
      black: "#000000",
      white: "#ffffff",
      wheat: "#FAFAFA",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8F8F8F",
      "gray-light": "#d3dce6",
      cream: "#FFD9D1",
    },
  },
  plugins: [],
};
