/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040d1a',
          900: '#0A192F',
          850: '#0f203c',
          800: '#112240',
          700: '#1d3557',
          600: '#233554',
          500: '#3a506b',
        },
        gold: {
          300: '#fde047',
          400: '#fbbf24',
          500: '#D4AF37',
          600: '#b8860b',
          700: '#926a06',
        },
        tealAccent: {
          400: '#2dd4bf',
          500: '#0D9488',
          600: '#0f766e',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'glow-teal': '0 0 25px -5px rgba(13, 148, 136, 0.3)',
        'glow-navy': '0 0 35px -5px rgba(10, 25, 47, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
