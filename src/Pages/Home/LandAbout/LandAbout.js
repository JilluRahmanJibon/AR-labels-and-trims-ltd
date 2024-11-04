import React from "react";
import arImage from "../../../Assets/ar-image.jpg"; // Ensure the image path is correct

const LandAbout = () =>
{
  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="md:w-[450px] w-full">
          <img
            src={arImage} // Ensure the actual image URL is used
            alt="About Us"
            className="rounded-lg w-[97%] mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:mt-0 mt-4 p-2 md:text-left text-center GeologicaFont">
          <h2 className="font-semibold text-gray-800 text-[18px] md:text-[26px] sm:text-[28px] mb-1 md:mb-4">
            About AR-Labels & Trims Ltd.
          </h2>
          <p className="text-gray-700 text-[13px] md:text-[15px] mt-2">
            AR-Labels & Trims Ltd. is a modern, state-of-the-art apparel trims
            and accessories manufacturer. Established in 2012 under the Indet
            Group, we began production in 2016 with a commitment to providing
            high-quality products to Bangladesh’s export-oriented garment
            industries.
          </p>
          <p className="text-gray-700 mt-4 text-[14px] md:text-[15px]">
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
