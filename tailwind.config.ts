import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        /* Use hex values so Tailwind generates bg-primary / text-primary etc. (CSS vars in theme can skip generation) */
        primary: "#00509e",
        "primary-hover": "#003f7d",
        "dark-text": "#222222",
        "gray-text": "#767676",
        "light-text": "#ffffff",
        "light-bg": "#f5f9ff",
        "medium-bg": "#d9e8ff",
        "dark-bg": "#1b1b1b",
        "light-border": "#e8ebf1",
        accent: "#ffd700",
        accent2: "#3aafa9",
      },
    },
  },
  plugins: [],
};
export default config;
