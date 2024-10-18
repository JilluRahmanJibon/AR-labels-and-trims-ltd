import React from "react";
import img1 from "../../../../Assets/AboutUs/1.webp";
import img2 from "../../../../Assets/AboutUs/2.webp";
import img3 from "../../../../Assets/AboutUs/3.webp";
import img4 from "../../../../Assets/AboutUs/4.webp";
import img5 from "../../../../Assets/AboutUs/5.webp";
import img6 from "../../../../Assets/AboutUs/6.webp";

function AboutUs() {
  return (
    <main className="xl:w-[1230px] w-[96%] mx-auto py-[2rem] px-5 grid sm:!grid-cols-3 [@media(min-width:400px)]:grid-cols-2 grid-cols-1 GeologicaFont">
      <div className="w-[150px] [@media(min-width:400px)]:h-[140px] h-[120px] mx-auto flex flex-col justify-center text-center items-center mt-[15px]">
        <img src={img1} className="sm:w-[86px] [@media(min-width:400px)]:w-[76px] w-[70px] mx-auto" />
        <p className="leading-[19px] h-[55px] pt-[1rem]">Maintain integrity</p>
      </div>
      <div className="w-[150px] [@media(min-width:400px)]:h-[140px] h-[120px] mx-auto flex flex-col justify-center text-center items-center mt-[15px]">
        <img src={img2} className="sm:w-[58px] [@media(min-width:400px)]:w-[48px] mx-auto" />
        <p className="leading-[19px] h-[55px] pt-[1rem]">Take ownership</p>
      </div>
      <div className="w-[150px] [@media(min-width:400px)]:h-[140px] h-[120px] mx-auto flex flex-col justify-center text-center items-center mt-[15px]">
        <img src={img3} className="sm:w-[67px] [@media(min-width:400px)]:w-[57px] w-[51px] mx-auto" />
        <p className="leading-[19px] h-[55px] pt-[1rem]">Keep agile</p>
      </div>
      <div className="w-[150px] [@media(min-width:400px)]:h-[140px] h-[120px] mx-auto flex flex-col justify-center text-center items-center mt-[15px]">
        <img src={img4} className="sm:w-[67px] [@media(min-width:400px)]:w-[57px] w-[51px] mx-auto" />
        <p className="leading-[19px] h-[55px] pt-[1rem]">Exceed expectations</p>
      </div>
      <div className="w-[150px] [@media(min-width:400px)]:h-[140px] h-[120px] mx-auto flex flex-col justify-center text-center items-center mt-[15px]">
        <img src={img6} className="sm:!w-[66px] [@media(min-width:400px)]:w-[56px] w-[50px] mx-auto" />
        <p className="leading-[19px] h-[55px] pt-[1rem]">Remain humble</p>
      </div>
      <div className="w-[150px] [@media(min-width:400px)]:h-[140px] h-[120px] mx-auto flex flex-col justify-center text-center items-center mt-[15px]">
        <img src={img5} className="sm:!w-[67px] [@media(min-width:400px)]:w-[57px] w-[51px] mx-auto" />
        <p className="leading-[19px] h-[55px] pt-[1rem]">Continuous innovation</p>
      </div>
    </main>
  );
}

export default AboutUs;
