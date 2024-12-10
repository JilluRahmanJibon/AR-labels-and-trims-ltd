import React from "react";
import CompanyImg from "../../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";

// Sample data for ethics, values, and principles
const ethicsValuesData = [
  "High quality.",
  "Best services.",
  "Honesty & Empathy.",
];

const principlesData = [
  "People are the backbone of our company.",
  "Honesty & integrity is the key for success.",
  "Customers are the partners of our organization.",
  "Teamwork is the foundation for success.",
  "Compassion is the fuel for growth.",
  "Quality is the base for long-term success.",
];

const qualityPolicyData = [
  "We will create an environment of integrity & high ethics.",
  "Established Objectives to help communicate organizational direction & drive improvements.",
  "Meet or Exceed Customer, Regulatory & Statutory Requirements.",
  "Continually improve our operations & performance by providing regular training to our people.",
];

const environmentalPolicyData = [
  "Compliance: Meet all applicable regulatory requirements.",
  "Resource Management: Minimize pollution and resource waste.",
  "Prevent Pollution: Minimize human health and safety risks.",
  "Continual Improvement: Seek ways to improve environmental performance.",
];

function EthicsValuesDetails ()
{
  return (
    <div className="bg-[#fff] GeologicaFont">
      <main className="xl:w-[1230px] w-[96%] mx-auto py-[3rem] px-5 overflow-hidden">
        {/* Section Header */}
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold">
            Ethics & Values
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          </div>
        </div>

        {/* Vision and Ethics Section */}
        <div className="rounded-[6px] shadow-[0_0px_9px_1px_#00000024]">
          <img src={CompanyImg} className="w-full !rounded-[13px]" alt="Company Vision" />
          <div className="text-[12px] md:text-[14px] lg:text-[15px] bg-white px-[10px] py-[5px] rounded-b-[6px] text-justify">
            {/* Ethics & Values */}
            <h4 className="font-semibold text-black mb-[10px]">Ethics & Values:</h4>
            <ul className="py-[5px]">
              {ethicsValuesData.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>
            <p>
              We believe that the above ethics & values combined with our below working principles are very important to maintain & achieving Adzi Mission & Vision.
            </p>
            <h4 className="font-semibold mt-4">Working Principles:</h4>
            <ul className="py-[5px]">
              {principlesData.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>

            <h4 className="font-semibold mt-4">Quality Policy:</h4>
            <ul className="py-[5px]">
              {qualityPolicyData.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>

            <h4 className="font-semibold mt-4">Environmental Policy:</h4>
            <ul className="py-[5px]">
              {environmentalPolicyData.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EthicsValuesDetails;
