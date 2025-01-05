import React, { Suspense, lazy } from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";


// Lazy load components
const AboutSkils = lazy(() => import("./AboutSkils/AboutSkils"));
const OurCompanyDetails = lazy(() => import("./OurCompanyDetails/OurCompanyDetails"));

function OurCompany ()
{
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg" />
      {/*  skils and company details sections */}
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSkils />
        <OurCompanyDetails />
      </Suspense>
    </main>
  );
}

export default OurCompany;
