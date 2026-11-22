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
        base: "#1A1818",
        surface: "#211E1E",
        "surface-elevated": "#292525",
        text: {
          primary: "#FFFFFF",
          muted: "#D1C9BE",
          dim: "#9E958C",
        },
        hairline: "rgba(255, 255, 255, 0.08)",
        "hairline-strong": "rgba(255, 255, 255, 0.16)",
        door: {
          navy: "#1F2E3D",
          plum: "#3B2235",
          sage: "#2E3D34",
          rust: "#4A2E22",
          teal: "#1E353B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "24px",
        "card-lg": "32px",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(180, 110, 60, 0.15)",
        "door-open": "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
