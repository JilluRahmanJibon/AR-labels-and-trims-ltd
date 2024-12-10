import React from "react";
import arImage from "../../../Assets/ar-image.jpg"; // Ensure the image path is correct

const LandAbout = () =>
{
  return (
    <section className="py-6 md:py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        {/* Image Section */}
        <div className="sm:w-[400px] w-[300px] max-h-[400px]  flex-shrink-0">
          <img
            src={arImage} // Ensure the actual image URL is used
            alt="About Us"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:mt-0 mt-4 p-4 md:text-left text-center GeologicaFont leading-snug text-gray-700">
          <h2 className="font-semibold text-gray-800 text-[20px] md:text-[26px] sm:text-[28px] mb-2 md:mb-4">
            About AR-Labels & Trims Ltd.
          </h2>
          <p className="text-[14px] md:text-[16px] mb-4">
            AR-Labels & Trims Ltd. is a modern, state-of-the-art apparel trims
            and accessories manufacturer. Established in 2012 under the Indet
            Group, we began production in 2016 with a commitment to providing
            high-quality products to Bangladesh’s export-oriented garment
            industries.
          </p>
          <p className="text-[14px] md:text-[16px]">
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
