import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customLightBlue: 'rgb(56 195 204)', // Light blue
        customDarkBlue: 'rgb(18 50 68)', // Medium blue
        customBlue3: 'rgb(70, 130, 180)',  // Deep blue
      },
    },
  },
  plugins: [],
} satisfies Config;
