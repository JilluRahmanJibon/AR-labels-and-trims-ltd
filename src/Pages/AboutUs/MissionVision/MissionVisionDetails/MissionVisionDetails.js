import React, { useState, useMemo } from "react";
import CompanyImg from "../../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";

function MissionVisionDetails ()
{
  const [ isMission, setIsMission ] = useState(true);

  const details = useMemo(() => ({
    mission:
      "To become a reliable apparel trims & accessories manufacturer in Bangladesh with 'one stop solution' by giving best class services, customer focused partnership with continuous improvement, innovation and market driven strategies.",
    vision:
      "Become one of the largest and most sought after apparel trims & accessories manufacturer in Bangladesh with a reputation of high quality products and best class services.",
  }), []);

  return (
    <div className="bg-white GeologicaFont">
      <main className="xl:w-[1230px] w-[96%] mx-auto py-[3rem] px-5">
        {/* Header Section */}
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="text-[19px] sm:text-[22px] md:text-[27px] lg:text-[30px] font-semibold">
            Our Mission & Vision
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="w-[18px] h-[2px] sm:w-[21px] sm:h-[3px] bg-[#FA0472]"></div>
            <div className="w-[19px] h-[5px] mx-[5px] sm:w-[22px] sm:h-[6px] bg-[#018496]"></div>
            <div className="w-[18px] h-[2px] sm:w-[21px] sm:h-[3px] bg-[#FA0472]"></div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="w-full flex flex-col rounded-[6px] shadow-[0_0px_9px_1px_#00000024]">
          <div className="flex">
            {[ "Mission", "Vision" ].map((type, index) => (
              <div
                key={type}
                className={`w-[50%] flex justify-center items-center cursor-pointer ${ (isMission && index === 0) || (!isMission && index === 1)
                    ? "bg-[#018496] text-white"
                    : "bg-white"
                  } rounded-t-[6px] py-[8px] sm:py-[12px] md:py-[20px] text-[13px] sm:text-[14px] md:text-[15px]`}
                onClick={() => setIsMission(index === 0)}
              >
                <span>{type}</span>
              </div>
            ))}
          </div>

          {/* Company Image */}
          <img
            src={CompanyImg}
            alt="Company"
            loading="lazy"
            className="w-full rounded-b-[13px]"
          />

          {/* Content */}
          <div className="bg-white rounded-b-[6px] px-[5px] sm:px-[10px] py-[5px] sm:pb-[2rem] sm:pt-[10px]">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] text-justify">
              {isMission ? details.mission : details.vision}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MissionVisionDetails;
