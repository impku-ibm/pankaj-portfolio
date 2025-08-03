/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS/React files in src
    "./public/index.html",         // Optional: if you're using any Tailwind in HTML
  ],
  theme: {
    extend: {animation: {
    fadeIn: 'fadeIn 1s ease-out',
  },
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },},
  },
  plugins: [],
  theme: {
  extend: {
    backdropBlur: {
      xs: '2px',
    },
  },
}
}


