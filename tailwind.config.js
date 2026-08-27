/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
          subtle: '#EEF2FF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8FAFC',
          muted: '#F1F5F9',
        },
        content: {
          primary: '#0F172A',
          secondary: '#64748B',
          tertiary: '#94A3B8',
        },
        border: {
          DEFAULT: '#E2E8F0',
          subtle: '#F1F5F9',
          dark: '#CBD5E1',
        },
        role: {
          student: '#2563EB',
          faculty: '#7C3AED',
          hod: '#D97706',
          parent: '#059669',
          admin: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(15, 23, 42, 0.03)',
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'card-hover': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'elevated': '0 20px 40px -8px rgba(37, 99, 235, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'glow-primary': '0 0 35px -5px rgba(37, 99, 235, 0.25)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
