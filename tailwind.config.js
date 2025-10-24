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
        'accent': '#6366f1',
        'light-gray': '#f8fafc',
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af',
        'gray-500': '#6b7280',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
        // Dark mode colors
        'dark-primary': '#0f0f0f',
        'dark-secondary': '#f8fafc',
        'dark-accent': '#8b5cf6',
        'dark-light-gray': '#1a1a1a',
        'dark-gray-50': '#1a1a1a',
        'dark-gray-100': '#2d2d2d',
        'dark-gray-200': '#3a3a3a',
        'dark-gray-300': '#4a4a4a',
        'dark-gray-400': '#6a6a6a',
        'dark-gray-500': '#8a8a8a',
        'dark-gray-600': '#aaaaaa',
        'dark-gray-700': '#cccccc',
        'dark-gray-800': '#e5e5e5',
        'dark-gray-900': '#f8fafc',
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
