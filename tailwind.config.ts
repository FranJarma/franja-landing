import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        background: "#0B0B0B",
        foreground: "#FFFFFF",
        accent: "#00FF9C",
        muted: "rgba(255,255,255,0.6)",
        line: "rgba(255,255,255,0.12)",
      },
      letterSpacing: {
        "hero-tight": "-0.08em",
      },
      boxShadow: {
        accent: "0 0 0 1px rgba(0,255,156,0.45)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sweep: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.7s ease-out forwards",
        sweep: "sweep 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
