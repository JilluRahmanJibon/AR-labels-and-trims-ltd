import React from "react";
import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import CertificationsData from "./CertificationsData/CertificationsData";

const Certifications = () => {
  return (
    <div className="mt-[7rem]">
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={"https://www.adzitrims.com/assets/images/page-header-bg.jpg"} />

      {/*  Apply Online section  */}
      <CertificationsData />
    </div>
  );
};

export default Certifications;
