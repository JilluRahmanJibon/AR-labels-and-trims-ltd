import React, { lazy, Suspense } from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import bgCover from "../../../Assets/aboutUs.jpg";

// Lazy-load MissionVisionDetails
const MissionVisionDetails = lazy(() =>
  import("./MissionVisionDetails/MissionVisionDetails")
);

function MissionVision ()
{
  return (
    <main>
      {/* Banner Section */}
      <DynamicBanner webTittle bg={bgCover} />

      {/* Mission & Vision Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <MissionVisionDetails />
      </Suspense>
    </main>
  );
}

export default MissionVision;
