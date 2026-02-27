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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          50: "#F8F9FA",
          100: "#F1F3F4",
          200: "#E8EAED",
          300: "#DADCE0",
          400: "#BDC1C6",
          500: "#9AA0A6",
          600: "#80868B",
          700: "#5F6368",
          800: "#3C4043",
          900: "#202124",
        },
        primary: {
          50: "#E8F0FE",
          100: "#D2E3FC",
          200: "#AECBFA",
          300: "#8AB4F8",
          400: "#669DF6",
          500: "#4285F4",
          600: "#1A73E8",
          700: "#1967D2",
          800: "#185ABC",
          900: "#174EA6",
        },
      },
      fontFamily: {
        sans: ['"Google Sans"', '"Inter"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "400" }],
        "display-md": ["2.8rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "400" }],
        "headline-lg": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "400" }],
        "headline-md": ["1.75rem", { lineHeight: "1.3", fontWeight: "400" }],
        "headline-sm": ["1.5rem", { lineHeight: "1.35", fontWeight: "400" }],
        "title-lg": ["1.375rem", { lineHeight: "1.4", fontWeight: "500" }],
        "title-md": ["1rem", { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "500" }],
        "title-sm": ["0.875rem", { lineHeight: "1.45", fontWeight: "500" }],
        "body-lg": ["1rem", { lineHeight: "1.625", fontWeight: "400" }],
        "body-md": ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.01em", fontWeight: "400" }],
        "body-sm": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em", fontWeight: "400" }],
        "label-lg": ["0.875rem", { lineHeight: "1.45", fontWeight: "500" }],
        "label-md": ["0.75rem", { lineHeight: "1.35", letterSpacing: "0.04em", fontWeight: "500" }],
      },
      borderRadius: {
        "xs": "8px",
        "sm": "12px",
        "md": "16px",
        "lg": "20px",
        "xl": "28px",
        "full": "9999px",
      },
      boxShadow: {
        "elevation-1": "0 1px 2px 0 rgba(0,0,0,0.05), 0 1px 3px 0 rgba(0,0,0,0.1)",
        "elevation-2": "0 1px 2px 0 rgba(0,0,0,0.06), 0 2px 6px 2px rgba(0,0,0,0.08)",
        "elevation-3": "0 4px 8px 3px rgba(0,0,0,0.08), 0 1px 3px 0 rgba(0,0,0,0.1)",
      },
      maxWidth: {
        container: "1140px",
      },
    },
  },
  plugins: [],
};
export default config;
