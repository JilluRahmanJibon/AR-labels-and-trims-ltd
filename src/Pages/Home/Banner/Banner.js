import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

// Install modules
const Banner = () =>
{

  const bannerData = [
    {
      id: 1,
      image: "http://test.arltl.com/static/media/ar-image.a22264bd26421aab3d1f.jpg",
    },
    {
      id: 2,
      image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/slider_image_upload_site_banner_slider_1571200303_1571200303.jpg",
    },
    {
      id: 3,
      image: "http://test.arltl.com/static/media/ar-image.a22264bd26421aab3d1f.jpg",
    },
    {
      id: 4,
      image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/slider_image_upload_site_banner_slider_1546504364_1546504364.jpg",
    },
    {
      id: 5,
      image: "http://test.arltl.com/static/media/ar-image.a22264bd26421aab3d1f.jpg",
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
      <div className="bannerDotliId [@media(min-width:650px)]:w-[17px] w-[12px] bottom-0">
        <GoDotFill className="cursor-pointer [@media(min-width:650px)]:text-[17px] text-[12px]" />
      </div>
    ),
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div className=" max-w-[1920px] mx-auto w-full h-[100%] justify-center relative mt-[6.5rem]">
      {/* <DynamicSlider slides={sliderData} /> */}
      <div className="relative flex items-center text-[#fff]">
        <Slider {...settings} className="w-[100%] xl:h-[610px]  [@media(min-width:650px)]:flex hidden items-center overflow-hidden mx-auto">
          {bannerData.map((key) =>
          {
            return (
              <img
                key={key.id}
                src={key.image}
                className="w-[100%] block"
                alt=""
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

function NextButton (props)
{
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[40%] right-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className=" text-[27px]" />
    </div>
  );
}
function PrevButton (props)
{
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[40%] left-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className=" text-[27px]" />
    </div>
  );
}

