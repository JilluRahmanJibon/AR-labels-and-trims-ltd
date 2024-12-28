import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

const DynamicSlider = ({ slides }) =>
{
  if (!slides.length)
  {
    return <div>No slides available</div>;
  }

  const commonSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  const largeDotSettings = {
    ...commonSettings,
    appendDots: (dots) => (
      <div style={{ bottom: "0px" }}>
        <ul className="m-0" id="bannerDotId">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bannerDotliId w-[17px] bottom-0">
        <GoDotFill className="cursor-pointer text-[17px]" />
      </div>
    ),
  };

  const smallDotSettings = {
    ...commonSettings,
    appendDots: (dots) => (
      <div style={{ bottom: "0px" }}>
        <ul className="m-0" id="bannerSmallDotId">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bannerSmallDotliId [@media(min-width:450px)]:w-[14px] w-[11px] bottom-0">
        <GoDotFill className="cursor-pointer [@media(min-width:450px)]:text-[14px] text-[11px]" />
      </div>
    ),
  };

  return (
    <div className="max-w-[1920px] mx-auto w-full h-full justify-center relative  ">
      {/* Large device Slider */}
      <div className="relative [@media(min-width:450px)]:flex hidden items-center text-[#fff]">
        {slides.length > 1 ? (
          <Slider {...largeDotSettings} className="w-full max-h-max object-bottom flex items-center overflow-hidden mx-auto">
            {slides.map((slide, index) => (
              <img key={slide.id || index} src={slide?.img} alt={`slide-${ index }`} className="w-full lg:h-[40rem] h-[25rem] block" />
            ))}
          </Slider>
        ) : (
          <img src={slides[ 0 ]?.img} alt="single product" className="w-full xl:h-[610px]  block" />
        )}
      </div>

      {/* Mobile device Slider */}
      <div className="relative [@media(min-width:450px)]:hidden flex items-center text-[#fff]">
        {slides.length > 1 ? (
          <Slider {...smallDotSettings} className="w-full xl:h-[610px] flex items-center overflow-hidden mx-auto">
            {slides.map((slide, index) => (
              <img key={slide.id || index} src={slide?.img} alt={`slide-${ index }`} className="w-full block" />
            ))}
          </Slider>
        ) : (
          <img src={slides[ 0 ]?.img} alt="single product" className="w-full xl:h-[610px] block" />
        )}
      </div>
    </div>
  );
};

function NextButton ({ onClick })
{
  return (
    <div
      className="bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[45%] right-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]"
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[27px]" />
    </div>
  );
}

function PrevButton ({ onClick })
{
  return (
    <div
      className="bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[45%] left-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[27px]" />
    </div>
  );
}

export default DynamicSlider;
