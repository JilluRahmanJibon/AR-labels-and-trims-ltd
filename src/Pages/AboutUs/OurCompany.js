import React from "react";
import AboutSkils from "./AboutSkils/AboutSkils";
import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";

function OurCompany() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} />
      {/*  skils section  */}
      <AboutSkils />
    </main>
  );
}

export default OurCompany;
