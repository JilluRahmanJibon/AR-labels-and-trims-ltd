import React, { Suspense } from "react";


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
        <DynamicBanner webTittle={true} bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg" />
      </Suspense>

      {/* Family Section */}
      <Suspense fallback={<div>Loading family members...</div>}>
        <FamilyMember />
      </Suspense>
    </main>
  );
}

export default ARLabelsFamily;
