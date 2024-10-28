import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import AvailablePositionsDetails from "./AvailablePositionsDetails/AvailablePositionsDetails";

const AvailablePositions = () => {
  return (
    <div className="mt-[7rem]">
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={"https://www.adzitrims.com/assets/images/coming-soonbg2.jpg"} />

      {/*  Available Positions section  */}
      <AvailablePositionsDetails />
    </div>
  );
};

export default AvailablePositions;
