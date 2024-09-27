// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // dark gray
        secondary: '#3b82f6', // blue
        accent: '#f59e0b', // orange
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 4px 0px #00000040',
      },
    },
  },
  plugins: [],
};
