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
        // Grayscale palette
        'flagstone': '#ABADAC',
        'tin': '#787776',
        'lucky-grey': '#5D5B5B',
        'iron': '#444140',
        'balsamic': '#22201E',
        'petroleum': '#22201E',
        
        // Light theme
        'primary': '#FFFFFF',
        'secondary': '#22201E',
        'accent': '#5D5B5B',
        'muted': '#787776',
        'border': '#ABADAC',
        'card': '#FFFFFF',
        'card-foreground': '#22201E',
        'popover': '#FFFFFF',
        'popover-foreground': '#22201E',
        'input': '#ABADAC',
        'ring': '#5D5B5B',
        'background': '#FFFFFF',
        'foreground': '#22201E',
        
        // Dark theme
        'dark': {
          'primary': '#22201E',
          'secondary': '#ABADAC',
          'accent': '#787776',
          'muted': '#5D5B5B',
          'border': '#444140',
          'card': '#22201E',
          'card-foreground': '#ABADAC',
          'popover': '#22201E',
          'popover-foreground': '#ABADAC',
          'input': '#444140',
          'ring': '#787776',
          'background': '#22201E',
          'foreground': '#ABADAC',
        },
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
