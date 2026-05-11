import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand kit
        brand: {
          blue: "#234EA2",
          "blue-dark": "#1B3D80",
          "blue-darker": "#102659",
          "blue-light": "#5B82D4",
          "blue-glow": "#A8C0EE",
          green: "#0B7A3E",
          "green-light": "#2EAE5E",
          charcoal: "#2B2F36",
          ink: "#0E1421",
          paper: "#FAFBFC",
          mist: "#F2F5F9",
        },
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-lato)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,20,33,0.04), 0 8px 24px rgba(14,20,33,0.06)",
        lift: "0 2px 4px rgba(14,20,33,0.06), 0 24px 48px rgba(14,20,33,0.10)",
        ring: "0 0 0 1px rgba(35,78,162,0.12), 0 12px 32px rgba(35,78,162,0.10)",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        gradientShift: "gradientShift 18s ease infinite",
        pulseRing: "pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
