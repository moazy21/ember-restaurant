/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        char: '#141210',
        coal: '#1D1A15',
        cream: '#F4EDE1',
        sand: '#E7DCC8',
        ember: '#D9622B',
        emberdeep: '#A8431B',
        smoke: '#8A8378',
        line: '#2B261F'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 70px -24px rgba(0,0,0,0.7)',
        card: '0 14px 36px -16px rgba(0,0,0,0.6)'
      }
    }
  },
  plugins: []
};
