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
      },
    },
  },
  plugins: [],
};
export default config;
