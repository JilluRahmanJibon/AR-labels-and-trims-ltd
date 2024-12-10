import React, { Suspense } from "react";
import bgCover from "../../../Assets/aboutUs.jpg";

const DynamicBanner = React.lazy(() =>
  import("../../../Shared/DynamicBanner/DynamicBanner")
);
const FamilyMember = React.lazy(() =>
  import("./FamilyMember/FamilyMember")
);

function ARLabelsFamily ()
{
  return (
    <main>
      {/* Banner Section */}
      <Suspense fallback={<div>Loading banner...</div>}>
        <DynamicBanner webTittle={true} bg={bgCover} />
      </Suspense>

      {/* Family Section */}
      <Suspense fallback={<div>Loading family members...</div>}>
        <FamilyMember />
      </Suspense>
    </main>
  );
}

export default ARLabelsFamily;
