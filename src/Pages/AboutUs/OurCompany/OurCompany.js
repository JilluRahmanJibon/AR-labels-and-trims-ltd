import React from "react";
import AboutSkils from "./AboutSkils/AboutSkils";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import OurCompanyDetails from "./OurCompanyDetails/OurCompanyDetails";
import bgCover from "../../../Assets/aboutUs.jpg";

function OurCompany() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={bgCover} />
      {/*  skils section  */}
      <AboutSkils />
      {/*  our company details section */}
      <OurCompanyDetails />
    </main>
  );
}

export default OurCompany;
