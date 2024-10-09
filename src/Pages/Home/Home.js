import React from "react";
import LandFooter from "./LandFooter/LandFooter";
import Banner from "./Banner/Banner";
import LandAbout from "./LandAbout/LandAbout";
import Branding from "./Branding/Branding";

const Home = () => {
  return (
    <main>
      {/* this is banner section  */}
      <section>
        <Banner />
      </section>

      {/* Branding section  */}
      <section>
        <Branding />
      </section>
      <section>
        <div className="relative w-full text-white bg-[#1E2121]">
          <div className="xl:w-[1180px] sm:w-[100%] w-[98%] h-[100%] flex flex-wrap justify-around items-center mx-auto GeologicaFont py-[40px]">
            <div className="flex flex-col items-center text-center w-[160px] h-[115px]">
              <p className="text-[40px] font-bold ">144m+</p>
              <p className="text-[15px] w-full leading-[17px] mx-auto">
                units produced annually
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-[160px] h-[115px]">
              <p className="text-[40px] font-bold">71+</p>
              <p className="text-[15px] w-full sm:leading-[22px] sm3:leading-[19px] leading-[17px] mx-auto">
                counties shipped to in the last 12 months
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-[160px] h-[115px] ">
              <p className="text-[40px] font-bold">40+</p>
              <p className="text-[15px] w-full sm:leading-[22px] sm3:leading-[19px] leading-[17px] mx-auto">
                years of experience
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Us section  */}
      <section>
        <LandAbout />
      </section>

      {/* footer section for landing page on the bottom */}
      <section>
        <LandFooter />
      </section>
    </main>
  );
};

export default Home;
