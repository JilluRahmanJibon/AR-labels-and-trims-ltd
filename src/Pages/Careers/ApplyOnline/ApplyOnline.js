import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import ApplyOnlineDetails from "./ApplyOnlineDetails/ApplyOnlineDetails";

const ApplyOnline = () => {
  return (
    <div className="mt-[7rem]">
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={"https://www.adzitrims.com/assets/images/coming-soonbg2.jpg"} />

      {/*  Apply Online section  */}
      <ApplyOnlineDetails />
    </div>
  );
};

export default ApplyOnline;
