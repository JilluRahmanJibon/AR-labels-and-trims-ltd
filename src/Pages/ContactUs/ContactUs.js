import React from "react";

import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import ContactMap from "./ContactMap/ContactMap";
import OurNewsLetter from "../Home/OurNewsLetter/OurNewsLetter";
import ContactInfo from "./ContactInfo/ContactInfo";

const ContactUs = () => {
  return (
    <div className="mt-[7rem]">
      {/*  banner section  */}
      <DynamicBanner webTittle={false} tittle={"Contact Us"} bg={"https://www.adzitrims.com/assets/images/coming-soonbg.jpg"} />

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
