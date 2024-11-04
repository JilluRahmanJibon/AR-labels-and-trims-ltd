import React from "react";
import arImage from "../../../Assets/ar-image.jpg"; // Replace with actual image path

const LandAbout = () => {
  return (
    <section className=" [@media(min-width:460px)]:py-12 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="md:w-[450px] w-full">
          <img
            src={arImage} // Replace with the actual image URL
            alt="About Us"
            className="rounded-lg w-[97%] mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:mt-0 mt-1  p-[10px] md:text-left text-center GeologicaFont">
          <h2 className="sm:!text-[28px] md:!text-[26px] [@media(min-width:460px)]:text-[22px] text-[18px] font-[600] text-gray-800 md:mb-4 mb-1">
            About AR-Labels & Trims Ltd.
          </h2>
          <p className="text-gray-700 md:!text-[15px] [@media(min-width:460px)]:text-[14px] text-[13px]">
            AR-Labels & Trims Ltd. is a modern, state-of-the-art apparel trims
            and accessories manufacturer. Established in 2012 under the Indet
            Group, we began production in 2016 with a commitment to providing
            high-quality products to Bangladesh’s export-oriented garment
            industries.
          </p>
          <p className="text-gray-700 mt-[10px] [@media(min-width:460px)]:text-[15px] text-[14px]">
            Our mission is to deliver world-class accessories with advanced
            technologies, supported by a professional team, short lead times,
            and competitive pricing. We are dedicated to ensuring customer
            satisfaction and maintaining the highest standards of integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandAbout;
