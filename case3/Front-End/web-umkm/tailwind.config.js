/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: { 700: "#efa00b" },
        black: { "900_00": "#00000000", "900_11": "#00000011" },
        blue_gray: { 900: "#2d2d2d" },
        gray: {
          50: "#f9f9f9",
          300: "#dadada",
          600: "#6e6e6e",
          900: "#591f0a",
          "900_19": "#591f0a19",
          "900_7f": "#591f0a7f",
        },
        orange: { 900: "#d65108" },
        white: {
          a700: "#ffffff",
          a700_3f: "#ffffff3f",
          a700_7f: "#ffffff7f",
          a700_bf: "#ffffffbf",
        },
      },
      boxShadow: { xs: "0 10px 25px 0 #00000011" },
      fontFamily: { oswald: "Oswald", archivo: "Archivo" },
      backgroundAttachment: {
        fixed: "fixed",
      },
    },
  },
  plugins: [],
};
