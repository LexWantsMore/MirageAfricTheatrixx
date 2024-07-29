/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    backgroundImage: {
      hero: 'url(src/assets/back2.jpg)',
      grid: 'url(src/assets/back5.jpg)',
    },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#293f36',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '3b88c5d',
        },
        'teal-accent-400': '#4fd1c5', // Add this line
        'teal-900': '#234e52',        // Add this line
      },
    },
  },
  plugins: [],
};
