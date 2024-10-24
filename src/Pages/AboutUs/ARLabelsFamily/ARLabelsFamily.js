import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import FamilyMember from "./FamilyMember/FamilyMember";

function ARLabelsFamily() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} />
      {/* family section */}
      <FamilyMember/>
    </main>
  );
}

export default ARLabelsFamily;
