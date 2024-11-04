// src/components/SwiperSlider.jsx
import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

const DynamicSlider = ({ slides }) => {
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
  //   Small Dot
  let settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div style={{ bottom: "0px" }}>
        <ul className="m-0" id="bannerSmallDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bannerSmallDotliId [@media(min-width:450px)]:w-[14px] w-[11px] bottom-0 ">
        <GoDotFill className="cursor-pointer [@media(min-width:450px)]:text-[14px] text-[11px]" />
      </div>
    ),
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  return (
    <div className=" max-w-[1920px] mx-auto w-full h-[100%] justify-center relative mt-[6.5rem]">
      <div className="relative [@media(min-width:450px)]:flex hidden   items-center text-[#fff]">
        {/* multiple image */}
        <Slider
          {...settings}
          className={`w-[100%] xl:h-[610px]  ${
            slides.length > 1 ? "flex" : "!hidden"
          } items-center overflow-hidden mx-auto`}
        >
          {slides.map((key) => {
            return (
              <img key={key.id} src={key?.img} className="w-[100%] block" />
            );
          })}
        </Slider>
        {/* 1 image only */}
        <img
          src={slides[0].img}
          alt="product image"
          className={`w-[100%] xl:h-[610px] ${
            slides.length > 1 ? "hidden" : "block"
          }`}
        />
      </div>
      {/* Small Dot */}
      <div className="relative [@media(min-width:450px)]:hidden flex  items-center text-[#fff]">
        {/* multiple image */}
        <Slider
          {...settings2}
          className={`w-[100%] xl:h-[610px]  ${
            slides.length > 1 ? "flex" : "!hidden"
          } items-center overflow-hidden mx-auto`}
        >
          {slides.map((key) => {
            return (
              <img key={key.id} src={key?.img} className="w-[100%] block" />
            );
          })}
        </Slider>

        {/* 1 image only */}
        <img
          src={slides[0].img}
          alt="product image"
          className={`w-[100%] xl:h-[610px] ${
            slides.length > 1 ? "hidden" : "block"
          }`}
        />
      </div>
    </div>
  );
};

function NextButton(props) {
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[45%] right-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className=" text-[27px]" />
    </div>
  );
}
function PrevButton(props) {
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[45%] left-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className=" text-[27px]" />
    </div>
  );
}

export default DynamicSlider;
