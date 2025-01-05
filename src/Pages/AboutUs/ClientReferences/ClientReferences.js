import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import ClientReferencesDetails from "./ClientReferencesDetails/ClientReferencesDetails";


function ClientReferences ()
{
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg" />
      {/* Client References section */}
      <ClientReferencesDetails />
    </main>
  );
}

export default ClientReferences;
