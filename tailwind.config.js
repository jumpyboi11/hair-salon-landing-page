/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F5F2EB',
        'charcoal': '#1A1A1A',
        'rose': '#B76E79',
        'moss': '#4A5D4E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        drama: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
