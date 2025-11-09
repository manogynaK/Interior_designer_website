/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'primary': '#ffffff',
        'secondary': '#1a1a1a',
        'accent': '#E1AD01',        // Rich Gold
        'accent-hover': '#F0C14B',   // Slightly lighter gold for hover
        'accent-light': '#F5D06E',   // Light gold for highlights
        'accent-lighter': '#FAE4A7', // Very light gold
        'accent-lightest': '#FDF5D9', // Subtle gold tint
        'heading-gold': '#C99900',   // Slightly darker gold for headings
        'light-gray': '#f8f8f8',
        'gray-50': '#f9f9f9',
        'gray-100': '#f0f0f0',
        'gray-200': '#e0e0e0',
        'gray-300': '#c8c8c8',
        'gray-400': '#a0a0a0',
        'gray-500': '#787878',
        'gray-600': '#585858',
        'gray-700': '#404040',
        'gray-800': '#282828',
        'gray-900': '#181818',
        // Dark mode colors
        'dark-primary': '#121212',
        'dark-secondary': '#f5f5f5',
        'dark-accent': '#FCDB6D',      // Brighter gold for dark mode
        'dark-accent-hover': '#FDEB9E', // Lighter gold for hover
        'dark-accent-dark': '#F7C319',  // Base gold for contrast
        'dark-accent-darker': '#d4a515', // Darker shade for depth
        'dark-light-gray': '#1e1e1e',
        'dark-gray-50': '#1a1a1a',
        'dark-gray-100': '#2a2a2a',
        'dark-gray-200': '#3a3a3a',
        'dark-gray-300': '#4a4a4a',
        'dark-gray-400': '#6a6a6a',
        'dark-gray-500': '#8a8a8a',
        'dark-gray-600': '#aaaaaa',
        'dark-gray-700': '#cacaca',
        'dark-gray-800': '#e0e0e0',
        'dark-gray-900': '#f0f0f0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
