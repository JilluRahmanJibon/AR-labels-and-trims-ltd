import React, { memo } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

// Static button components - memoized
const NextButton = memo(({ onClick }) =>
{
  return (
    <div
      className={`bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[40%] right-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[27px]" />
    </div>
  );
});

const PrevButton = memo(({ onClick }) =>
{
  return (
    <div
      className={`bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[40%] left-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[27px]" />
    </div>
  );
});

// Optimized main Banner component
const Banner = () =>
{
  const bannerData = [

    {
      id: 1,
      image: "https://arltl.com/web-cms-arltl/uploads/banner-1.jpg",
    },

    {
      id: 2,
      image: "https://arltl.com/web-cms-arltl/uploads/banner-2.jpg",
    },
    {
      id: 3,
      image: "https://arltl.com/web-cms-arltl/uploads/banner-3.jpg",
    },
    {
      id: 4,
      image: "https://arltl.com/web-cms-arltl/uploads/banner-4.jpg",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    appendDots: dots => (
      <div style={{ bottom: "0px" }}>
        <ul className="m-0" id="bannerDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (index) => (
      <div className="bannerDotliId [@media(min-width:650px)]:w-[17px] w-[12px] bottom-0">
        <GoDotFill className="cursor-pointer [@media(min-width:650px)]:text-[17px] text-[12px]" />
      </div>
    ),
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div className="max-w-[1920px] mx-auto w-full h-full justify-center relative pt-[3.5rem]">
      <div className="relative flex items-center text-[#fff]">
        <Slider {...settings} className="w-full xl:h-[650px] [@media(min-width:550px)]:flex hidden items-center overflow-hidden mx-auto">
          {bannerData.map(({ id, image }) => (
            <img
              key={id}
              src={image}
              className="w-full max-h-[650px] object-cover object-center block"
              alt={`Banner ${ id }`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
