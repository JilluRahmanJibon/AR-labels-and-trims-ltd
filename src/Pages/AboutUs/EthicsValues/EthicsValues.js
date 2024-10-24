import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import EthicsValuesDetails from "./EthicsValuesDetails/EthicsValuesDetails";
import bgCover from "../../../Assets/aboutUs.jpg";

function EthicsValues() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={bgCover}  />
      {/* ethics values section */}
      <EthicsValuesDetails />
    </main>
  );
}

export default EthicsValues;
