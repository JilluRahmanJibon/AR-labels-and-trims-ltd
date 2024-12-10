import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";

// Import brand logos only once at the top
import brandLogo1 from "../../../Assets/brand/brandLogo4.png";
import brandLogo2 from "../../../Assets/brand/brandLogo8.png";
import brandLogo3 from "../../../Assets/brand/brandLogo3.png";
import brandLogo4 from "../../../Assets/brand/brandLogo1.png";
import brandLogo5 from "../../../Assets/brand/brandLogo5.png";
import brandLogo6 from "../../../Assets/brand/brandLogo6.png";
import brandLogo7 from "../../../Assets/brand/brandLogo7.png";
import brandLogo8 from "../../../Assets/brand/brandLogo2.png";
import brandLogo9 from "../../../Assets/brand/brandLogo9.png";
import brandLogo10 from "../../../Assets/brand/brandLogo11.png";
import brandLogo11 from "../../../Assets/brand/brandLogo10.png";

// Memoize brand logo data to avoid recreation on every render
const brandLogoData = [
  { id: 1, image: brandLogo1 },
  { id: 2, image: brandLogo2 },
  { id: 3, image: brandLogo3 },
  { id: 4, image: brandLogo4 },
  { id: 5, image: brandLogo5 },
  { id: 6, image: brandLogo6 },
  { id: 7, image: brandLogo7 },
  { id: 8, image: brandLogo8 },
  { id: 9, image: brandLogo9 },
  { id: 10, image: brandLogo10 },
  { id: 11, image: brandLogo11 },
];

const LogoItem = React.memo(({ keyData }) =>
{
  return (
    <div
      className={`[@media(min-width:625px)]:w-[65px] [@media(min-width:400px)]:w-[55px] w-[40px] [@media(min-width:625px)]:mr-[45px] [@media(min-width:400px)]:mr-[35px] mr-[25px] shadow-[0px_0px_6px_0px_#0000000f]`}
    >
      <img src={keyData.image} className="w-full" alt="brand logo" />
    </div>
  );
});

const Branding = () =>
{
  const logoItems = useMemo(() => brandLogoData.map((item) => <LogoItem key={item.id} keyData={item} />), []);

  return (
    <main>
      <section data-aos="fade-up" className="text-gray-600 body-font GeologicaFont">
        <div className="xl:w-[1230px] w-[100%] [@media(min-width:400px)]:px-5 px-0 [@media(min-width:400px)]:pt-[2rem] pt-[1.5rem] [@media(min-width:625px)]:pb-[2rem] pb-[0.5rem] mx-auto">
          <div className="w-[95%] mx-auto flex flex-wrap justify-center items-center">
            <div className="[@media(min-width:600px)]:w-[550px] w-[100%] text-center md:m-0 m-auto">
              <h1 className="sm:!text-[28px] [@media(min-width:460px)]:text-[26px] text-[20px] font-semibold text-center text-gray-800 mb-[8px]">
                Sustainable branding <br />
                from stitch to store
              </h1>
              <p className="leading-[22px] [@media(min-width:400px)]:pb-[5px] pb-[1px] md:text-[15px] sm:text-[14px] text-[13px]">
                Looking to achieve your sustainability and branding targets? We’ll help you get there with our range of eco-friendly packaging and trims.
              </p>
              <p className="leading-[22px] [@media(min-width:400px)]:pb-[10px] pb-[5px] md:text-[15px] sm:text-[14px] text-[13px]">
                As your branding partner, we’ll design, develop and deliver your products globally through an infrastructure that benefits you.
              </p>
              <button className="md:text-[15px] sm:text-[14px] text-[13px] text-white hover:text-primary bg-primary border-[2px] border-primary [@media(min-width:400px)]:py-2 py-[7px] [@media(min-width:400px)]:px-6 px-[18px] focus:outline-none hover:bg-transparent rounded-[50px] transition-[0.3s] mt-[5px]">
                Our sustainability commitment
              </button>
            </div>
          </div>
          <div className="w-full [@media(min-width:400px)]:h-[110px] h-[90px] flex items-center mt-[1rem] relative">
            <Marquee className="z-0">{logoItems}</Marquee>
            <div className="[@media(min-width:550px)]:w-[100px] [@media(min-width:400px)]:w-[80px] w-[50px] [@media(min-width:400px)]:h-[110px] h-[90px] absolute top-0 left-0 bg-gradient-to-r from-[#fff] z-[10]"></div>
            <div className="[@media(min-width:550px)]:w-[100px] [@media(min-width:400px)]:w-[80px] w-[50px] [@media(min-width:400px)]:h-[110px] h-[90px] absolute top-0 right-0 bg-gradient-to-l from-[#fff] z-[10]"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branding;
