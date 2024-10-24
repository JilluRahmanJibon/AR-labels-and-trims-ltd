import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import EthicsValuesDetails from "./EthicsValuesDetails/EthicsValuesDetails";

function EthicsValues() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} />
      {/* ethics values section */}
      <EthicsValuesDetails />
    </main>
  );
}

export default EthicsValues;
