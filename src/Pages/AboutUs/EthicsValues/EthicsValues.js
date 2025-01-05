import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import EthicsValuesDetails from "./EthicsValuesDetails/EthicsValuesDetails";


function EthicsValues ()
{
  return (
    <main>
      {/* Dynamic banner */}
      <DynamicBanner webTittle={true} bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg" />

      {/* Ethics and values section */}
      <EthicsValuesDetails />
    </main>
  );
}

export default EthicsValues;
