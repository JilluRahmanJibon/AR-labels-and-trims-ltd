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
  const allTeam = [
    {
      id: 1,
      image: brandLogo1,
    },
    {
      id: 2,
      image: brandLogo2,
    },
    {
      id: 3,
      image: brandLogo3,
    },
    {
      id: 4,
      image: brandLogo4,
    },
    {
      id: 5,
      image: brandLogo5,
    },
    {
      id: 6,
      image: brandLogo6,
    },
    {
      id: 7,
      image: brandLogo7,
    },
    {
      id: 8,
      image: brandLogo8,
    },
    {
      id: 9,
      image: brandLogo9,
    },
    {
      id: 10,
      image: brandLogo10,
    },
    {
      id: 11,
      image: brandLogo11,
    },
  ];
  return (
    <main>
      <section className="text-gray-600 body-font GeologicaFont">
        <div className="xl:w-[1230px] w-[100%] px-5 pb-[2rem] mx-auto">
          <div className="[@media(min-width:610px)]:w-[550px] w-[100%] text-center mx-auto relative">
            <h1 className="text-gray-900 [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-medium [@media(min-width:400px)]:mb-[8px] mb-[0px] relative z-[10]">
              Sustainable branding from <br />
              stitch to store
            </h1>

            <p className="[@media(min-width:400px)]:leading-[22px] leading-[18px] [@media(min-width:600px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px] relative z-[10]">
              Looking to achieve your sustainability and branding targets? We’ll
              help you get there with our range of eco-friendly packaging and
              trims.
              <br className="" />
              As your branding partner, we’ll design, develop and deliver your
              products globally through an infrastructure that benefits you. The
              result? A sustainable supply chain. Consistent and impactful
              branding. High quality. Innovative materials.
            </p>
            <button className="text-white [@media(min-width:600px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px] hover:text-primary bg-primary border-[2px] border-primary py-2 [@media(min-width:400px)]:px-6 px-[20px] focus:outline-none hover:bg-transparent rounded-[50px] transition-[0.3s] mt-[10px] relative z-[10]">
              Our sustainability commitment
            </button>
          </div>

          <div className="relative flex h-[120px] mt-[1rem]">
            <Marquee className="relative">
              {allTeam.map((key) => {
                return (
                  <div
                  key={key.id}
                    className={`[@media(min-width:610px)]:w-[76px] [@media(min-width:450px)]:w-[60px] w-[45px] [@media(min-width:450px)]:mr-[40px] mr-[25px] relative`}
                  >
                    <img src={key.image} className="w-full h-full " alt="" />
                  </div>
                );
              })}
            </Marquee>
            <div className="[@media(min-width:450px)]:w-[100px] w-[50px] h-[120px] absolute left-0 top-0 bg-gradient-to-r from-white to-[#ffffff1c] z-30"></div>
            <div className="[@media(min-width:450px)]:w-[100px] w-[50px] h-[120px] absolute right-0 top-0 bg-gradient-to-r from-[#ffffff1c] to-white z-30"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branding;
