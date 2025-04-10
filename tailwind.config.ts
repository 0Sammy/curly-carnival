import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px'
      },
      colors: {
        primaryGreen: "#10d078",
        darkGreen: "#0c824c",
        veryLightGreen: "#cbf4e1",
        deepBlack: "#121212",
      },
    },
  },
  plugins: [],
};
export default config;
