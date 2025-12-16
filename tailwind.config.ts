import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Primary Colors
        primary: "#2b2bee",

        // Light Mode Colors
        "background-light": "#f6f6f8",
        "surface-light": "#ffffff",
        "border-light": "#e2e2e8",
        "text-secondary-light": "#6b6b80",

        // Dark Mode Colors
        "background-dark": "#111118",
        "surface-dark": "#1C1C26",
        "border-dark": "#282839",
        "text-secondary": "#9d9db9",

        // Extended utilities
        surface: "#1c1c27",
        "surface-border": "#282839",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
};

export default config;
