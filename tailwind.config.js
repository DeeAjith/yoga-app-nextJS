/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3498db", // Primary color (Blue)
          light: "#5DADE2", // Light variant of primary
        },
        secondary: "#e67e22", // Secondary color (Orange)
        accent: "#ffefd8", // Highlight or accent color (Green)
        text: {
          primary: "#333333", // Primary text color (Dark Gray)
          secondary: "#666666", // Secondary text color (Medium Gray)
        },
        border: {
          primary: "#3498db", // Border color using primary color
          secondary: "#e67e22", // Border color using secondary color
        },
        bg: {
          primary: "#FFFFFF", // Background color (White)
          secondary: "#F5F5F5", // Secondary background color (Light Gray)
        },
        success: "#27ae60", // Success color (Green)
        error: "#e74c3c", // Error color (Red)
        warning: "#f1c40f", // Warning color (Yellow)
        info: "#3498db", // Information color (Blue)
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
