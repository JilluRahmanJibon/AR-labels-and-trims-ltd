import React from "react";
import CompanyImg from "../../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";

function EthicsValuesDetails() {
  return (
    <div className="bg-[#fff] GeologicaFont">
      <main className="xl:w-[1230px] w-[96%] mx-auto  py-[3rem] px-5  overflow-hidden">
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

        <div className="rounded-[6px] shadow-[0_0px_9px_1px_#00000024]">
        <img src={CompanyImg} className="w-full !rounded-[13px]" />
          <p className="xl:!text-[15px] md:!text-[14px] [@media(min-width:400px)]:text-[13px] text-[12px] text-justify bg-white px-[10px] py-[5px] rounded-b-[6px]">
            <b>Ethics & Values:</b>
            <ul className="py-[5px]">
              <li>1. High quality.</li>
              <li>2. Best services.</li>
              <li>3. Honesty & Empathy.</li>
            </ul>
            We believe that the above ethics &
            values combined with our below working principles are very important
            to maintain & achieving Adzi Mission & Vision. These ethics, values
            & working principles will help us to build a strong & consistent
            organization to achieve our goals. Key principles: 1. People are the
            back bone of our company. 2. Honesty & integrity is the key for
            success. 3. Customers are the partners of our organization. 4. Team
            work is the foundation for success. 5. Compassion is the fuel for
            growth. 6. Quality is the base for long term success. QUALITY
            POLICY: Adzi Trims Ltd is committed to provide products of high
            quality manufactured in socially complied environment. In Pursuit of
            this we: Create an environment of integrity & high ethics.
            Established Objectives to help communicate organizational direction
            & drive improvements. Meet or Exceed Customer, Regulatory & Statuary
            Requirements. Instill a culture of Positive approach where we
            unselfishly help each other. Continually improve our operations &
            performance by providing regular training to our people. A key way
            to achieve this is by operating a Quality Management System (QMS) in
            accordance with the requirements of ISO 9001: 2015 ENVIRONMENTAL
            POLICY: The management is committed to managing environmental issues
            as an integral part of the business. We will do so by adhering to
            the following principles: Compliance: We will meet all applicable
            regulatory requirements (national) and will implement programs and
            procedures to assure compliance. Compliance with environment
            standards will be a key ingredient in the training and performance
            reviews. Resource Management, Prevention of Pollution and Risk
            Reduction: We will identify and prevent or minimize pollution in all
            areas attributed to our operations, wherever feasible. We will
            employ management systems and procedures specifically designed to
            prevent activities or conditions that pose a threat to human health,
            safety, or the environment and as we as being prepared for
            emergencies. We will minimize use of energy. The Quality Policy will
            be the framework for setting up of Quality Objectives.
            Communication: We will communicate our commitment (Policy) to
            interested parties. We will solicit their input in meeting our
            environmental goals. Continual Improvement: We will measure our
            progress as best we can. We will review our progress at least on an
            annual basis. We will continue to seek out ways to improve our
            environmental performance using this policy as the basis upon which
            we set our objectives and targets.
          </p>
        </div>
      </main>
    </div>
  );
}

export default EthicsValuesDetails;
