/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(220, 15%, 95%)',
        accent: 'hsl(140, 70%, 50%)',
        primary: 'hsl(240, 80%, 60%)',
        surface: 'hsl(0, 0%, 100%)',
        textPrimary: 'hsl(220, 15%, 15%)',
        textSecondary: 'hsl(220, 15%, 40%)',
        anxiety: 'hsl(120, 50%, 60%)',
        depression: 'hsl(240, 50%, 60%)',
        trauma: 'hsl(160, 50%, 60%)',
        pink: 'hsl(320, 50%, 70%)',
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px',
      },
      spacing: {
        'lg': '20px',
        'md': '12px',
        'sm': '8px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(220, 15%, 15%, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.22,1,0.36,1)',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
