/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12102a",
      },
      fontFamily: {},
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "3rem",
        },
      },
   keyframes: {
        'bounce-rotate': {
          '0%': {
            transform: 'translate(-50%, -50%) translateY(0)',
          },
          '20%': {
            transform: 'translate(-50%, -50%) translateY(-100px)',
          },
          '40%': {
            transform: 'translate(-50%, -50%) translateY(0)',
          },
          '60%': {
            transform: 'translate(-50%, -50%) rotate(0deg)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg)',
          },
        },
      },
      animation: {
        'bounce-rotate': 'bounce-rotate 4s ease-in-out infinite',
      },
      
    },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
      },
  },
  plugins: [],
};
