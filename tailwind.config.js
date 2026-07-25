/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="scanDark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        scanLight: {
          "primary": "#0E8E86",
          "secondary": "#D98E3F",
          "accent": "#0E8E86",
          "neutral": "#2B3440",
          "base-100": "#F5F7F6",
          "base-200": "#EBEEEC",
          "base-300": "#DCE1DE",
          "info": "#3FA9A0",
          "success": "#3FA9A0",
          "warning": "#D98E3F",
          "error": "#C24E4E",
        },
      },
      {
        scanDark: {
          "primary": "#4FD1C5",
          "secondary": "#E8A33D",
          "accent": "#4FD1C5",
          "neutral": "#93A1AC",
          "base-100": "#0A1420",
          "base-200": "#0F1C2B",
          "base-300": "#152438",
          "info": "#4FD1C5",
          "success": "#4FD1C5",
          "warning": "#E8A33D",
          "error": "#E27878",
        },
      },
    ],
    darkTheme: "scanDark",
  },
  plugins: [require("daisyui")],
}
