/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      gridTemplateColumns: {
        // Bento grid explicit columns
        'bento-1': 'repeat(1, minmax(0, 1fr))',
        'bento-3': 'repeat(3, minmax(0, 1fr))',
      },
      gridAutoRows: {
        // Bento grid explicit row heights
        '18rem': '18rem',
        '20rem': '20rem',
      },
    },
  },
  plugins: [],
} 