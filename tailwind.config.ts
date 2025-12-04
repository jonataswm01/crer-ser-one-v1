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
        background: {
          DEFAULT: "#FDFCF8",
        },
        primary: {
          DEFAULT: "#A67B5B",
          light: "#Cfb096",
        },
        accent: {
          DEFAULT: "#D4A373",
        },
        aurora: {
          pink: "#E6C8CA",
          purple: "#E0D6EB",
        },
        text: {
          main: "#4A403A",
          muted: "#8C8178",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      backdropBlur: {
        glass: "12px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(166, 123, 91, 0.1)",
        "glass-lg": "0 20px 60px 0 rgba(166, 123, 91, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;

