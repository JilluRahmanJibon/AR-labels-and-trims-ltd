import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import MissionVisionDetails from "./MissionVisionDetails/MissionVisionDetails";
import bgCover from "../../../Assets/aboutUs.jpg";

function MissionVision() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true}  bg={bgCover} />

      {/*  mission & vision section  */}
      <MissionVisionDetails/>
    </main>
  );
}

export default MissionVision;
