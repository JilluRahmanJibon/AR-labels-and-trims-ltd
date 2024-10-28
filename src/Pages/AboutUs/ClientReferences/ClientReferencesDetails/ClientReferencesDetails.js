import React from "react";

function ClientReferencesDetails() {
  return (
    <div className="bg-[#fff] GeologicaFont">
      <main className="xl:w-[1290px] w-[100%] mx-auto  py-[3rem] [@media(min-width:400px)]:px-5 px-[12px] overflow-hidden">
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold">
            Client References
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          </div>
        </div>
        <img
          src={
            "https://www.adzitrims.com/sul-web-cms-adzi/upload/cr_image_upload__1548563468_1548563468.jpg"
          }
          className="w-full !rounded-[6px] shadow-[0_0px_9px_1px_#00000024]"
        />
        <img
          src={
            "https://www.adzitrims.com/sul-web-cms-adzi/upload/company_image_upload__1548580052_1548580052.jpg"
          }
          className="w-full !rounded-[6px] shadow-[0_0px_9px_1px_#00000024] [@media(min-width:500px)]:mt-[25px] mt-[15px]"
        />
      </main>
    </div>
  );
}

export default ClientReferencesDetails;
