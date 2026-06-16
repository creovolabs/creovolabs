import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#ffffff",
        cream: "#fff7e9",
        muted: "rgba(17, 17, 17, 0.6)",
        accent: "#ff6600",
        surface: "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        nav: "0 8px 32px rgba(0, 0, 0, 0.12)",
        glow: "0 0 60px rgba(255, 102, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
