/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0D0D0D",
        card: "#121212",
        foreground: "#F5F5F5",
        muted: "#8A8A8A",
        brand: {
          deep:    "#8B0000",
          DEFAULT: "#DC2626",
          bright:  "#EF4444",
        },
        border: {
          DEFAULT: "#3F1111",
          hover:   "#6B1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "glow-pulse": "glowPulse 4s ease-in-out infinite alternate",
        "float":      "float 6s ease-in-out infinite",
        "spin-slow":  "spin 20s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%":   { opacity: "0.3", transform: "scale(1)" },
          "100%": { opacity: "0.7", transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(139,0,0,0.25), rgba(220,38,38,0.08), transparent 70%)",
      },
    },
  },
  plugins: [],
};
