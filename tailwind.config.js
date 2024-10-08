/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {
      colors: {
        primary: '#018496', // Set your desired primary color
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      md2: "846px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // Sroty Section
      msm: "530px",
      mnsm: "450px",
      story: "896px",
      story1: "755px",
      story2: "605px",
      story3: "455px",
      story4: "675px",
      story4: "400px",
      
      storyS1: "1325px",
      // Top Product Section
      tablet: "1325px",
      tablet2: "1125px",
      tablet3: "850px",
      tablet4: "580px",
      tablet5: "376px",
      tablet6: "350px",
      
      // Top Brand Section
      sbrand: "1061px",
      sbrand2: "810px",
      sbrand3: "555px",
      sbrand4: "376px",

      // Home Banner
      banner1: "1325px",
      banner2: "1236px",
      banner3: "1190px",
      banner4: "1061px",
      banner5: "1000px",
      banner6: "930px",
    },
  },
  plugins: [],
}