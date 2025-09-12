import { Birthstone } from "next/font/google";

const config = {
  darkMode: 'class',
  content: [    
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: 'var(--background)',
        darkHover: 'var(--foreground)',
        darkTheme: '#131a1c',
        lightBg: '#ffffff',
        darkBg: '#131a1c',
        lightText: '#000000',
        darkText: '#ffffff',
        primary: '#ff7536',
        secondary: '#c6846e',
        shadow: '#c2e3ee',
      },
      boxShadow: {
        'glow-rose': '0 0 15px rgba(244, 128, 69, 0.6)',
        'glow-blue': '0 0 15px rgba(134, 191, 246, 0.5)',
      },
      fontFamily: {
        Outfit: ["outfit", "sans-serif"],
        Ovo: ["ovo", "serif"],
        Newsreader: ["newsreader", "serif"],
        Quintessential: ["quintessential", "serif"],
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};

export default config;