import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "logo-pop": "logoPop 0.6s ease-out",
        "loading-bar": "loadingBar 1.2s ease-in-out forwards",
        "fade-out": "fadeOut 0.6s ease-out 1.6s forwards",
      },
      keyframes: {
        logoPop: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "70%": { transform: "scale(1.15)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        loadingBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeOut: {
          "to": { opacity: "0", visibility: "hidden" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
