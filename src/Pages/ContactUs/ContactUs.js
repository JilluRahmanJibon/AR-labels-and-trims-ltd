import React from "react";

import ContactMap from "./ContactMap/ContactMap";
import OurNewsLetter from "../Home/OurNewsLetter/OurNewsLetter";
import ContactInfo from "./ContactInfo/ContactInfo";

const ContactUs = () => {
  return (
    <div className="mt-[7rem]">
      {/*  Contact Information section  */}
      <ContactInfo />

      {/*  Map section  */}
      <ContactMap />

      {/*  Our News Letter section  */}
      <OurNewsLetter />
    </div>
  );
};

export default ContactUs;
