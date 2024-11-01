import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import banner from "../../../Assets/banner2.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

// Install modules
const Banner = () => {

  const bannerData = [
    {
      id: 1,
      image: banner,
    },
    {
      id: 2,
      image: banner,
    },
    {
      id: 3,
      image: banner,
    },
    {
      id: 4,
      image: banner,
    },
  ];
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div style={{ bottom: "0px" }}>
        <ul className="m-0" id="bannerDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bannerDotliId w-[17px] bottom-0">
        <GoDotFill className="cursor-pointer text-[17px]" />
      </div>
    ),
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  return (
    <div className="w-full h-[100%] justify-center relative mt-[4.5rem]">
      {/* <DynamicSlider slides={sliderData} /> */}
        <div className="relative flex items-center text-[#fff]">
          <Slider {...settings} className="w-[100%] xl:h-[640px]  flex items-center overflow-hidden mx-auto">
            {bannerData.map((key) => {
              return (
                <div 
                key={key.id}>
                  <img
                    src={key.image}
                    className="w-[100%] block"
                  />
                 
                </div>
              );
            })}
          </Slider>
          </div>
    </div>
  );
};

export default Banner;

function NextButton(props) {
  const { onClick } = props;
  return (
    <div
      className={`bg-white w-[20px] h-[50px] absolute top-[45%] right-0 md2:flex hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[black] text-[27px]" />
    </div>
  );
}
function PrevButton(props) {
  const { onClick } = props;
  return (
    <div
      className={`bg-white w-[20px] h-[50px] absolute top-[45%] left-0 md2:flex hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[black] text-[27px]" />
    </div>
  );
}
