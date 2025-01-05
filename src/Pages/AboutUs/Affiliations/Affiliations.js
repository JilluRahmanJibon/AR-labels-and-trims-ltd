import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import AffiliationsDetails from "./AffiliationsDetails/AffiliationsDetails";


function Affiliations ()
{
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg" />
      {/* Affiliations section */}
      <AffiliationsDetails />

    </main>
  );
}

export default Affiliations;
