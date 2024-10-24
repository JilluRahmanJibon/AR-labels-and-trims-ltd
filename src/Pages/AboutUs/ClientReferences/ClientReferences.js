import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import ClientReferencesDetails from "./ClientReferencesDetails/ClientReferencesDetails";

function ClientReferences() {
  return (
    <main>
      {/*  banner section  */}
      <DynamicBanner webTittle={true} />
      {/* Client References section */}
      <ClientReferencesDetails />
    </main>
  );
}

export default ClientReferences;
