import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: "#0F5132",
          dark: "#114B2F",
          deep: "#0A3521",
        },
        crimson: {
          DEFAULT: "#D31A2B",
          dark: "#C8102E",
          hover: "#B01221",
          soft: "#FDE8EB",
        },
        roseBg: {
          DEFAULT: "#FDF6F5",
          alt: "#FAF2F0",
        },
        mintBg: {
          DEFAULT: "#F2F8F5",
          border: "#D8ECE1",
        },
        check: {
          circle: "#E6F4EA",
          icon: "#1E8E3E",
        },
        gold: {
          badge: "#F59E0B",
          hover: "#D97706",
        },
        discount: {
          green: "#15803D",
        },
        borderSoft: "#F0E4E2",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cta: "0 4px 14px rgba(211, 26, 43, 0.35)",
        ctaHover: "0 6px 20px rgba(211, 26, 43, 0.45)",
        card: "0 2px 6px rgba(0, 0, 0, 0.03)",
        cardHover: "0 4px 12px rgba(0, 0, 0, 0.06)",
        badge: "0 2px 8px rgba(245, 158, 11, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
