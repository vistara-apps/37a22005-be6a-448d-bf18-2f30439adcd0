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
        // CareCircles Design System
        bg: "var(--bg)",
        surface: "var(--surface)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        
        primary: "var(--primary)",
        accent: "var(--accent)",
        pink: "var(--pink)",
        
        // Category colors
        anxiety: "var(--anxiety)",
        depression: "var(--depression)",
        trauma: "var(--trauma)",
        
        // Semantic colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        
        // Extended palette
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        
        // Legacy support (will be phased out)
        background: "var(--bg)",
        foreground: "var(--text-primary)",
        border: "#e5e7eb",
        input: "#f3f4f6",
        ring: "var(--pink)",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        "safe": "env(safe-area-inset-bottom)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "inner-sm": "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s cubic-bezier(0.22,1,0.36,1)",
        "slide-up": "slide-up 0.3s cubic-bezier(0.22,1,0.36,1)",
        "slide-in-right": "slide-in-right 0.3s cubic-bezier(0.22,1,0.36,1)",
        "bounce-gentle": "bounce-gentle 2s infinite",
        "pulse-soft": "pulse-soft 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;