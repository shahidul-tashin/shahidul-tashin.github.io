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
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, -18px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(14px, 12px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        roiPulse: {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "floatSlow 10s ease-in-out infinite",
        "gradient-x": "gradientX 6s ease infinite",
        "roi-pulse": "roiPulse 2.8s ease-in-out infinite",
      },
    },
  },
  daisyui: {
    themes: [
      {
        scanLight: {
          "primary": "#0D9488",
          "secondary": "#D97706",
          "accent": "#7C3AED",
          "neutral": "#2B3440",
          "base-100": "#F5F7F6",
          "base-200": "#EBEEEC",
          "base-300": "#DCE1DE",
          "info": "#0284C7",
          "success": "#059669",
          "warning": "#D97706",
          "error": "#E11D48",
        },
      },
      {
        scanDark: {
          "primary": "#2DD4BF",
          "secondary": "#FBBF24",
          "accent": "#A78BFA",
          "neutral": "#93A1AC",
          "base-100": "#0A1420",
          "base-200": "#0F1C2B",
          "base-300": "#152438",
          "info": "#38BDF8",
          "success": "#34D399",
          "warning": "#FBBF24",
          "error": "#FB7185",
        },
      },
    ],
    darkTheme: "scanDark",
  },
  plugins: [require("daisyui")],
}
