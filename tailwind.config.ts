import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, #3b82f6, #60a5fa)",
        "yellow-gradient": "linear-gradient(to right, #fbbf24, #fcd34d)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '2xl': {'max': '1535px'},  
        'xl': {'max': '1279px'},  
        'lg': {'max': '1023px'},  
        'md': {'max': '767px'},  
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [],
};
export default config;
