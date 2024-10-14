import React from "react";
import AboutHome from "./AboutHome/AboutHome";
import AboutSkils from "./AboutSkils/AboutSkils";
import OurNewsLetter from "./OurNewsLetter/OurNewsLetter";

function AboutUs() {
  return (
    <main>
      {/*  banner section  */}
      <AboutHome />
      {/*  skils section  */}
      <AboutSkils />
      {/*  our news letter section  */}
      <OurNewsLetter />
    </main>
  );
}

export default AboutUs;
