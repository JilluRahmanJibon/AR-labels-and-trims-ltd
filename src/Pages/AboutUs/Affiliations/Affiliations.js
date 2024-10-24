import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import AffiliationsDetails from "./AffiliationsDetails/AffiliationsDetails";

function Affiliations() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} />
      {/* Affiliations section */}
      <AffiliationsDetails />
    </main>
  );
}

export default Affiliations;
