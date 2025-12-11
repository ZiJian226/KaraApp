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
        primary: '#502380',
        secondary: '#750000',
        dark: '#14123b',
        accent: '#F9E076',
        pink: '#FC94AF',
        gray: '#363636',
      },
    },
  },
  plugins: [],
}
