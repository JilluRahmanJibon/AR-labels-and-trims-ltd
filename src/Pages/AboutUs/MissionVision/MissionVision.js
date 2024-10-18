import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import MissionVisionDetails from "./MissionVisionDetails/MissionVisionDetails";

function MissionVision() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} />

      {/*  mission & vision section  */}
      <MissionVisionDetails/>
    </main>
  );
}

export default MissionVision;
