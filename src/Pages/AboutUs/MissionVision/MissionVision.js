import React, { lazy, Suspense } from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";


// Lazy-load MissionVisionDetails
const MissionVisionDetails = lazy(() =>
  import("./MissionVisionDetails/MissionVisionDetails")
);

function MissionVision ()
{
  return (
    <main>
      {/* Banner Section */}
      <DynamicBanner webTittle bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg" />

      {/* Mission & Vision Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <MissionVisionDetails />
      </Suspense>
    </main>
  );
}

export default MissionVision;
