import React from "react";
import brandLogo1 from "../../../Assets/brand/brandLogo1.png";
import brandLogo2 from "../../../Assets/brand/brandLogo2.png";
import brandLogo3 from "../../../Assets/brand/brandLogo3.png";
import brandLogo4 from "../../../Assets/brand/brandLogo4.png";
import brandLogo5 from "../../../Assets/brand/brandLogo5.png";
import brandLogo6 from "../../../Assets/brand/brandLogo6.png";
import brandLogo7 from "../../../Assets/brand/brandLogo7.png";
import brandLogo8 from "../../../Assets/brand/brandLogo8.png";
import brandLogo9 from "../../../Assets/brand/brandLogo9.png";
import brandLogo10 from "../../../Assets/brand/brandLogo10.png";
import brandLogo11 from "../../../Assets/brand/brandLogo11.png";
import Marquee from "react-fast-marquee";

const Branding = () => {
  return (
    <main>
      <section className="text-gray-600 body-font GeologicaFont">
        <div className="xl:w-[1230px] w-[100%] px-5 py-[2rem] mx-auto">
          <div className="w-[95%] mx-auto flex flex-wrap justify-center items-center">
            <div className="md:w-1/2 sm:w-[460px] w-[100%] text-center md:m-0 m-auto">
              <h1 className="text-gray-900 text-[29px] font-[600] mb-[8px]">
                Sustainable branding <br />
                from stitch to store
              </h1>

              <p className="leading-[22px] pb-[5px] text-[15px]">
                Looking to achieve your sustainability and branding targets?
                We’ll help you get there with our range of eco-friendly
                packaging and trims.
                
                
              </p>
              <p className="leading-[22px] pb-[8px] text-[15px]">
              As your branding partner, we’ll design, develop and deliver your
                products globally through an infrastructure that benefits you.
                The result? A sustainable supply chain. Consistent and impactful
                branding. High quality. Innovative materials.
              </p>
              <button className="text-[15px] text-white hover:text-primary bg-primary border-[2px] border-primary py-2 px-6 focus:outline-none hover:bg-transparent rounded-[50px] transition-[0.3s] mt-[5px]">
                Our sustainability commitment
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branding;
