import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        White: "#FFFFFF",
        Black: "#303841",
        Gray: "#777777",
        Yellow: "#F6C90E",
        YellowHover: "#e2b708",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        background: {
          "0%": { transform: "translateX(0) scaleX(4)" },
          "100%": { transform: "translateX(-300%) scaleX(4)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 500ms ease-in both",
        "zoom-in": "zoomIn 500ms ease-in both",
        "fade-in-left": "fadeInLeft 500ms ease-out both",
        "zoom-out": "zoomOut 750ms ease-out both",
        background: "background 80s ease-out both infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
