import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import ClientReferencesDetails from "./ClientReferencesDetails/ClientReferencesDetails";
import bgCover from "../../../Assets/aboutUs.jpg";

function ClientReferences() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={bgCover}  />
      {/* Client References section */}
      <ClientReferencesDetails />
    </main>
  );
}

export default ClientReferences;
