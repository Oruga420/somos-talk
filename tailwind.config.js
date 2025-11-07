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
          50: '#ffffff',
          100: '#f9fbfd',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
        secondary: {
          50: '#e6faf7',
          100: '#c1f2eb',
          200: '#8ee6dc',
          300: '#5ad9cb',
          400: '#32cebc',
          500: '#12c3b0',
          600: '#0ea291',
          700: '#0b8174',
          800: '#086158',
          900: '#04453f',
        },
        accent: {
          50: '#eef3f8',
          100: '#d5e1ed',
          200: '#afc6dc',
          300: '#86a9c7',
          400: '#5486ad',
          500: '#2f638f',
          600: '#204c71',
          700: '#15385a',
          800: '#0f2741',
          900: '#0a1b2e',
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
