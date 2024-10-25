import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import FamilyMember from "./FamilyMember/FamilyMember";
import bgCover from "../../../Assets/aboutUs.jpg";

function ARLabelsFamily() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={bgCover}  />
      {/* family section */}
      <FamilyMember/>
    </main>
  );
}

export default ARLabelsFamily;
