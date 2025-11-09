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
        // Light mode colors - Elephant Grey Theme
        'primary': '#f8f9fa',         // Off-white
        'secondary': '#2c3e50',       // Dark slate
        'accent': '#6c757d',          // Medium grey
        'accent-hover': '#5a6268',    // Slightly darker grey for hover
        'accent-light': '#a0aec0',    // Light grey for highlights
        'accent-lighter': '#cbd5e0',  // Very light grey
        'accent-lightest': '#edf2f7', // Subtle grey tint
        'heading-grey': '#4a5568',    // Darker grey for headings
        'light-gray': '#f1f5f9',
        'gray-50': '#f8fafc',
        'gray-100': '#f1f5f9',
        'gray-200': '#e2e8f0',
        'gray-300': '#cbd5e1',
        'gray-400': '#94a3b8',
        'gray-500': '#64748b',
        'gray-600': '#475569',
        'gray-700': '#334155',
        'gray-800': '#1e293b',
        'gray-900': '#0f172a',
        'dark': '#0f172a',
        'dark-gray': '#1e293b',

        // Dark mode colors - Pure Grey Theme
        'dark-primary': '#121212',     // Dark grey
        'dark-secondary': '#e0e0e0',   // Light grey
        'dark-accent': '#9e9e9e',      // Medium grey
        'dark-accent-hover': '#bdbdbd',// Light grey for hover
        'dark-accent-dark': '#757575', // Darker grey
        'dark-accent-darker': '#424242',// Even darker grey
        'dark-gray-100': '#1a1a1a',
        'dark-gray-200': '#2a2a2a',
        'dark-gray-300': '#3a3a3a',
        'dark-gray-400': '#5a5a5a',
        'dark-gray-500': '#7a7a7a',
        'dark-gray-600': '#9a9a9a',
        'dark-gray-700': '#bababa',
        'dark-gray-800': '#dadada',
        'dark-gray-900': '#f5f5f5',
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
