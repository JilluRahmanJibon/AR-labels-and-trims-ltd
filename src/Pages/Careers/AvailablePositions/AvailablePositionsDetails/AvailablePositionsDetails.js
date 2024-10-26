import React, { useState } from "react";

const AvailablePositionsDetails = () => {
  const [availablePosition, setavailablePosition] = useState(true)
  const AvailablePositionsData = [
    {
      id: 1,
      tittle: "SL",
      childlist: [
        { id: 1, description: "01" }
      ],
      width: [{ id: 1, size: "240px" }, { id: 2, size: "210px" }]
    },
    {
      id: 2,
      tittle: "Job Tittle",
      childlist: [
        { id: 1, description: "Managing Director" }
      ],
      width: [{ id: 1, size: "360px" }, { id: 2, size: "330px" }]
    },
    {
      id: 3,
      tittle: "No. Of Positions",
      childlist: [
        { id: 1, description: "10" }
      ],
      width: [{ id: 1, size: "360px" }, { id: 2, size: "330px" }]
    },
    {
      id: 4,
      tittle: "Deadline",
      childlist: [
        { id: 1, description: "25-12-2024" }
      ],
      width: [{ id: 1, size: "240px" }, { id: 2, size: "210px" }]
    },
  ];
  
  return (
    <div className="bg-[#fff] GeologicaFont">
      <main className="xl:w-[1240px] w-[100%] mx-auto  py-[3rem] px-5  overflow-hidden">
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold">
            Available Job Positions
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          </div>
        </div>

        {/* No Available Position */}
        <main className="max-h-[130px] overflow-x-auto flex [@media(min-width:1100px)]:text-[15px] text-[14px] shadow-[0px_0px_6px_0px_#c6c6c6] ">
          {AvailablePositionsData.map((key) => {
            return (
              <div className={`[@media(min-width:1100px)]:min-w-[${key.width[0].size}] min-w-[${key.width[1].size}]  ${availablePosition ? "" : "hidden"}`}>
                {/* Tittle */}
                <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
                  <p className="pl-[20px] py-[15px] font-[500] text-white">
                    {key.tittle}{" "}
                  </p>
                </div>
                {key.childlist.map((key2) => {
                  return (
                    <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]">
                      {key2.description}
                    </p>
                  );
                })}
              </div>
            );
          })}

          {/* <div className="[@media(min-width:1100px)]:min-w-[240px] min-w-[210px]">
            <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
              <p className="pl-[20px] py-[15px] font-[500] text-white">SL.</p>
            </div>
            <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]">
              01
            </p>
          </div>
          <div className="[@media(min-width:1100px)]:min-w-[360px] min-w-[330px]">
            <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
              <p className="pl-[20px] py-[15px] font-[500] text-white">
                Job Tittle
              </p>
            </div>
            <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]">
              Managing Director
            </p>
          </div>
          <div className="[@media(min-width:1100px)]:min-w-[360px] min-w-[330px]">
            <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
              <p className="pl-[20px] py-[15px] font-[500] text-white">
                No. Of Positions
              </p>
            </div>
            <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]">
              10
            </p>
          </div>
          <div className="[@media(min-width:1100px)]:min-w-[240px] min-w-[210px]">
            <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
              <p className="pl-[20px] py-[15px] font-[500] text-white">
                Deadline
              </p>
            </div>
            <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]">
              25-12-2024
            </p>
          </div> */}
        </main>
        {/* No Position Available */}
        <main className={`${availablePosition ? "hidden" : "flex"} max-h-[130px] overflow-x-auto [@media(min-width:1100px)]:text-[15px] text-[14px] shadow-[0px_0px_6px_0px_#c6c6c6] relative`}>
          <div className="[@media(min-width:1100px)]:min-w-[240px] min-w-[210px]">
            {/* Tittle */}
            <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
              <p className="pl-[20px] py-[15px] font-[500] text-white">SL.</p>
            </div>
            {/* `````` */}
            <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]"></p>
          </div>
          <div className="[@media(min-width:1100px)]:min-w-[360px] min-w-[330px]">
            {/* Tittle */}
            <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
              <p className="pl-[20px] py-[15px] font-[500] text-white">
                Job Tittle
              </p>
            </div>
            {/* `````` */}
            <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]"></p>
          </div>
          <div className="[@media(min-width:1100px)]:min-w-[360px] min-w-[330px]">
            {/* Tittle */}
            <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
              <p className="pl-[20px] py-[15px] font-[500] text-white">
                No. Of Positions
              </p>
            </div>
            {/* `````` */}
            <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]"></p>
          </div>
          <div className="[@media(min-width:1100px)]:min-w-[240px] min-w-[210px]">
            {/* Tittle */}
            <div className="w-full [@media(min-width:1100px)]:text-[16px] text-[15px] bg-[#018496] text-white border-r-[1px] border-r-[#fff]">
              <p className="pl-[20px] py-[15px] font-[500] text-white">
                Deadline
              </p>
            </div>
            {/* `````` */}
            <p className="w-[100%] h-[54px] border-r-[1px] border-r-[#00000038] px-[20px] py-[15px]"></p>
          </div>
          <div className="[@media(min-width:1100px)]:w-[1200px] w-[1080px] bg-white absolute bottom-0 left-0">
            <p className="px-[20px] py-[15px]">
              Sorry! There is no available job circular right now. Please keep
              in touch.
            </p>
          </div>
        </main>
      </main>
    </div>
  );
};

export default AvailablePositionsDetails;
