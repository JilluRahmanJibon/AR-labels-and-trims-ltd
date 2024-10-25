import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import AffiliationsDetails from "./AffiliationsDetails/AffiliationsDetails";
import bgCover from "../../../Assets/aboutUs.jpg";

function Affiliations() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={bgCover} />
      {/* Affiliations section */}
      <AffiliationsDetails />

    </main>
  );
}

export default Affiliations;
