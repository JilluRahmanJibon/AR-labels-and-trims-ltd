import React from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import AvailablePositionsDetails from "./AvailablePositionsDetails/AvailablePositionsDetails";

const AvailablePositions = () =>
{
  return (
    <div className="mt-[7rem]">
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={"https://arltl.com/web-cms-arltl/uploads/career-bg.jpg"} />

      {/*  Available Positions section  */}
      <AvailablePositionsDetails />
    </div>
  );
};

export default AvailablePositions;
