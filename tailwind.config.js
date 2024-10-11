/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {
      colors: {
        primary: '#018496', // Set your desired primary color
      },
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   md2: "846px",
    //   lg: "1024px",
    //   xl: "1280px",
    // },
  },
  plugins: [],
}