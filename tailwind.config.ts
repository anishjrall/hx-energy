import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        steel: {
          50: "#F7F8F8",
          100: "#ECEEEF",
          200: "#D7DADD",
          300: "#B7BCC2",
          400: "#9AA3AE",
          500: "#7A8494",
          600: "#5C6472",
        },
        charcoal: {
          700: "#2A313C",
          800: "#1B2028",
          900: "#12151B",
        },
        ink: "#0A0C0F",
        copper: {
          50: "#FCF1E9",
          100: "#F6DCC4",
          300: "#E19A5F",
          400: "#D97840",
          500: "#C1642F",
          600: "#A3521F",
          700: "#7E3F18",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1400px",
        prose: "62ch",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      backgroundImage: {
        "schematic-grid":
          "linear-gradient(to right, rgba(154,163,174,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(154,163,174,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        "dash-draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
