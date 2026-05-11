/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b4324',
        cream: '#fdfbf7',
        card: '#ffffff',
        muted: {
          foreground: '#64748b'
        }
      }
    },
  },
  plugins: [],
}