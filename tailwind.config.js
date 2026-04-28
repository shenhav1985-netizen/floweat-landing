/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: { 100: '#F8F2E6', 200: '#EDE0C8', 300: '#DFC9A8' },
        gold: { 300: '#E8C99A', 400: '#C9A96E', 500: '#A07840', 600: '#7A5A2A' },
        brown: { 100: '#C4A882', 300: '#8B5E3C', 600: '#5C3A1E', 700: '#3D2010', 900: '#1A0A04' },
      },
      fontFamily: {
        serif: ['"Frank Ruhl Libre"', 'serif'],
        sans: ['Assistant', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
