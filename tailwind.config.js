/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // --primary-color: #116D6E;
  // --secondary-color: #321E1E;
  // --dark-bg-color: #121212;
  // --light-bg-color: #FFFFFF;
  theme: {
    extend: {
    colors: {
        primary: {
          DEFAULT: "#116D6E",
          50: "#E6F2F2",
          100: "#CCE5E6",
          200: "#99CCCE",
          300: "#66B4B6",
          400: "#339C9E",
          500: "#007E7F",
          600: "#006D6D",
          700: "#005B5C",
          800: "#004A4A",
          900: "#003838",
          950: "#002020", // Example variant primary-950
        },
        secondary: {
          DEFAULT: "#321E1E",
          50: "#D6BABA",
          100: "#C19C9C",
          200: "#A77E7E",
          300: "#8E6060",
          400: "#744242",
          500: "#5A2323",
          600: "#4E1D1D",
          700: "#421616",
          800: "#360F0F",
          900: "#2A0A0A",
          950: "#190E0E", // Example variant secondary-950
        },
        accent: "#ffefd8",
        text: {
          primary: "#222222",
          secondary: "#333333",
        },
        border: {
          primary: "#116D6E",
          secondary: "#321E1E",
        },
        bg: {
          primary: "#116D6E",
          secondary: "#321E1E",
        },
      },
      fontFamily: {
        main: [
          "Menlo",
          "Monaco",
          "Lucida Console",
          "Liberation Mono",
          "DejaVu Sans Mono",
          "Bitstream Vera Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        lg: "1025px",
      },
      borderWidth: {
        "lighten-90": "1.5px", // Adjust the width as needed
      },
      maxHeight: {
        70: "70px", // Define your custom maximum height class
      },
      fontSize: ["responsive", "hover", "focus"],
      // Define custom transition properties
      transitionProperty: {
        "max-h": "max-height",
        bg: "background-color",
      },

      // Define custom transition durations
      transitionDuration: {
        300: "300ms",
        500: "500ms",
      },
    },
  },
  plugins: [],
};
