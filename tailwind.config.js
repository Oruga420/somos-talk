/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f6f9',
          100: '#d8e3ec',
          200: '#b4ccdc',
          300: '#8ab0c7',
          400: '#4f87a9',
          500: '#2f6f97',
          600: '#215273',
          700: '#1b405a',
          800: '#143046',
          900: '#0d1f2d',
        },
        accent: {
          50: '#edfcf8',
          100: '#c7f5e9',
          200: '#94ebd6',
          300: '#5fe0c1',
          400: '#30d2b0',
          500: '#00a398',
          600: '#00877f',
          700: '#006b66',
          800: '#004f4c',
          900: '#003432',
        },
        secondary: {
          50: '#f5f7f9',
          100: '#e1e6ed',
          200: '#c7d2dc',
          300: '#aabac7',
          400: '#7a97ab',
          500: '#637c8f',
          600: '#4c667a',
          700: '#385165',
          800: '#243a4c',
          900: '#152332',
        }
      },
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
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
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
