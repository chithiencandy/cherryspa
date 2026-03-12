/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'c-white': '#FFFFFF',
        'c-offwhite': '#FAF9F7',
        'c-gold': '#C19A6B',
        'c-gold-light': '#F5E8C7',
        'c-gold-dark': '#A67B48',
        'c-brown-light': '#D9C7B8',
        'c-text-dark': '#2C2825',
        'c-text-light': '#666360',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        soft: '8px',
        lg: '16px',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0, 0, 0, 0.05)',
        hover: '0 15px 50px rgba(0, 0, 0, 0.08)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
