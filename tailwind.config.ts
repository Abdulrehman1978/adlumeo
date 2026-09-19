import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0C0D10",
        background: "#08090B",
        "primary-container": "#CCFF00",
        primary: "#FFFFFF",
        "on-primary": "#0A0D00",
        "surface-container-low": "#121419",
        "surface-container": "#181A20",
        "surface-container-high": "#23262F",
        "surface-container-highest": "#2E323D",
        "surface-bright": "#3A3F4C",
        "on-surface": "#E8E9ED",
        "on-surface-variant": "#9CA1B0",
        secondary: "#FF3E24",
        "secondary-container": "#D6280E",
        parchment: "#F5F4F0",
        "parchment-subtle": "#ECEAE2",
        "parchment-ink": "#111215",
        amber: {
          brand: "#E59858",
          dark: "#382619",
          surface: "#140E0A",
        },
      },
      fontFamily: {
        "display-hero": ["var(--font-syne)", "sans-serif"],
        "headline-xl": ["var(--font-syne)", "sans-serif"],
        "headline-lg": ["var(--font-syne)", "sans-serif"],
        "headline-md": ["var(--font-syne)", "sans-serif"],
        "headline-sm": ["var(--font-syne)", "sans-serif"],
        "body-xl": ["var(--font-hanken)", "sans-serif"],
        "body-md": ["var(--font-hanken)", "sans-serif"],
        "body-sm": ["var(--font-hanken)", "sans-serif"],
        caption: ["var(--font-hanken)", "sans-serif"],
        "label-technical": ["var(--font-jetbrains)", "monospace"],
        "label-metric": ["var(--font-jetbrains)", "monospace"],
        "serif-editorial": ["var(--font-newsreader)", "serif"],
      },
      spacing: {
        margin: "3.5rem",
        "margin-mobile": "1.25rem",
        gutter: "1.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.75rem",
        "space-xl": "3.5rem",
      },
      borderRadius: {
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
