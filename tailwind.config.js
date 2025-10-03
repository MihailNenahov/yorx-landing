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
        yorx: {
          primary: '#8B5CF6', // Purple from logo
          secondary: '#06B6D4', // Cyan from logo
          accent: '#F59E0B', // Orange accent
          dark: '#1F2937',
          light: '#F8FAFC'
        }
      },
      backgroundImage: {
        'gradient-yorx': 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
        'gradient-yorx-reverse': 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}
