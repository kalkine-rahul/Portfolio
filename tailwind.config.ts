import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // ✅ include app dir for App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // in case you use Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",   // safe to keep if you store extra code in src
  ],
  darkMode: "class", // ✅ needed for toggle
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
