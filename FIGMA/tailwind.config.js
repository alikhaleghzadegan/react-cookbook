module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#848383",
        black_900_b2: "#000000b2",
        bluegray_100_33: "#d9d9d933",
        gray_900_cc: "#1b1b1bcc",
        gray_900: "#1b1b1b",
        lime_700_33: "#a8c43333",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
      },
      fontFamily: {
        hotpizza: "Hot Pizza",
        arial: "Arial",
        arapey: "Arapey",
        montserrat: "Montserrat",
        rockd: "Rock 3D",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
      borderRadius: {
        radius30: "30px",
        radius50: "50px",
        radius501: "50%",
        radius995: "99.5px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
