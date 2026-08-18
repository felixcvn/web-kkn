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
        cream: {
          DEFAULT: "#FAF6E8",
          dark: "#F2ECDA",
          light: "#FCFAF2",
        },
        mint: {
          DEFAULT: "#9EE2DB",
          light: "#D4F7F3",
          dark: "#72CFC6",
        },
        teal: {
          DEFAULT: "#58B5AA",
          light: "#8FD6CE",
          dark: "#3B998E",
        },
        darkteal: {
          DEFAULT: "#288584",
          dark: "#1A5B5A",
          light: "#42A09E",
        },
        sage: {
          DEFAULT: "#58B5AA",
          dark: "#288584",
          light: "#D4F7F3",
          muted: "#9EE2DB",
        },
        peach: {
          DEFAULT: "#9EE2DB",
          soft: "#D4F7F3",
        },
        pink: {
          soft: "#FAF6E8",
          muted: "#FCFAF2",
        },
        lavender: {
          muted: "#9EE2DB",
          soft: "#D4F7F3",
        },
        softblack: {
          DEFAULT: "#163A39",
          muted: "#2C5453",
          light: "#487372",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "28px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(40, 133, 132, 0.08)",
        card: "0 14px 40px -15px rgba(40, 133, 132, 0.12)",
        hover: "0 22px 50px -12px rgba(40, 133, 132, 0.22)",
        floating: "0 25px 50px -12px rgba(22, 58, 57, 0.18)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
