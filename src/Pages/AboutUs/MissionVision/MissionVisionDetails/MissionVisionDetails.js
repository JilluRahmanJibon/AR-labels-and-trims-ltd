import React, { useState } from "react";
import CompanyImg from "../../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";

function MissionVisionDetails() {
  const [clickAction, setClickAction] = useState(true);

  const Details = {
    misson:
      "To become a reliable apparel trims & accessories manufacturer in Bangladesh with 'one stop solution' by giving best class services, customer focused partnership with continuous improvement, innovation and market driven strategies.",
    vision:
      "Become one of the largest and most sought after apparel trims & accessories manufacturer in Bangladesh with a reputation of high quality products and best class services.",
  };

  return (
    <div className="bg-[#edededed] GeologicaFont">
      <main className="xl:!w-[1230px] [@media(min-width:420px)]:w-[96%] w-[98%] mx-auto  py-[3rem] px-5">
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold">
            Our Mission & Vision
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          </div>
        </div>
        <div className="w-full flex">
          <div
            className={`w-[50%] flex justify-center items-center cursor-pointer ${
              clickAction ? "bg-white" : "bg-[#edededed]"
            } rounded-t-[6px] [@media(min-width:750px)]:py-[20px] [@media(min-width:420px)]:py-[12px] py-[8px] [@media(min-width:750px)]:text-[16px] [@media(min-width:500px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px]`}
            onClick={() => setClickAction(true)}
          >
            <span>Mission</span>
          </div>
          <div
            className={`w-[50%] flex justify-center items-center cursor-pointer ${
              clickAction ? "bg-[#edededed]" : "bg-white"
            } rounded-t-[6px] [@media(min-width:750px)]:py-[20px] [@media(min-width:420px)]:py-[12px] py-[8px] [@media(min-width:750px)]:text-[16px] [@media(min-width:500px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px]`}
            onClick={() => setClickAction(false)}
          >
            <span>Vision</span>
          </div>
        </div>
        <img src={CompanyImg} className="w-full" />
        <div className="bg-white rounded-b-[6px] [@media(min-width:420px)]:pb-[2rem] pb-[5px] [@media(min-width:420px)]:pt-[10px] pt-[5px] [@media(min-width:420px)]:px-[10px] px-[5px]">
          <p className="xl:!text-[15px] md:!text-[14px] [@media(min-width:400px)]:text-[13px] text-[12px] text-justify">
            {clickAction ? Details.misson : Details.vision}
          </p>
        </div>
      </main>
    </div>
  );
}

export default MissionVisionDetails;
