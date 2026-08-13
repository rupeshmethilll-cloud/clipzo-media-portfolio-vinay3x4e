import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#050505",
        secondary: "#0D0D0D",
        cardBg: "#111111",
        accent: {
          purple: "#8B5CF6",
          cyan: "#22D3EE",
          blue: "#3B82F6",
        },
        softGray: "#A3A3A3",
        textWhite: "#F5F5F5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "noise-pattern": "url('/assets/noise.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow-pulse": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(139, 92, 246, 0.2), 0 0 20px rgba(34, 211, 238, 0.1)" },
          "100%": { boxShadow: "0 0 25px rgba(139, 92, 246, 0.5), 0 0 45px rgba(34, 211, 238, 0.3)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
