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
          DEFAULT: '#0B6A50',
          dark: '#084f3c',
          light: '#0f8a69'
        },
        accent: {
          DEFAULT: '#F4743B',
          light: '#FF9F67'
        },
        background: {
          cream: '#FFF9F3',
          paper: '#FAFAFA'
        },
        card: '#FFFFFF',
        text: {
          heading: '#1A2B26',
          body: '#62736D'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
