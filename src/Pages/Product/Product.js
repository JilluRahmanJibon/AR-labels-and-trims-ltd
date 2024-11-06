import React from "react";
import DynamicSlider from "../../Shared/DynamicSlider/DynamicSlider";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Loader/Spinner";

const Product = () =>
{
  const { isLoading, error, data } = useQuery({
    queryKey: [ '/products' ],
    queryFn: () =>
      fetch(`${ process.env.REACT_APP_BASE_URL }/products/`, {
        method: 'GET'
      }).then((res) =>
        res.json(),
      ),
  })

  const { pid } = useParams()
  const { data: product } = useQuery({
    queryKey: [ '/products', pid ], // Include id in the query key
    queryFn: () =>
      fetch(`${ process.env.REACT_APP_BASE_URL }/products/${ pid }`, {
        method: 'GET',
      }).then((res) => res.json()),
    enabled: !!pid, // Ensures the query only runs when `id` is defined
  });

  if (isLoading) return <Spinner />

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
        <ul className="m-0" id="bannerSmallDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bannerSmallDotliId [@media(min-width:450px)]:w-[14px] w-[11px] bottom-0 [@media(min-width:450px)]:mt-[8px] mt-[15px]">
        <GoDotFill className="cursor-pointer [@media(min-width:450px)]:text-[14px] text-[11px]" />
      </div>
    ),
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

 

  return (
    <section className="max-w-[1920px] mx-auto GeologicaFont">
      <div className="mt-[100px] ">
        <DynamicSlider slides={product?.data.image} />
      </div>
      <div className=" py-6 [@media(min-width:850px)]:px-12 px-[0px]">
        <div className="[@media(min-width:850px)]:px-[0px] px-[1rem]">
          <h2 className="[@media(min-width:460px)]:text-[22px] text-[18px] font-semibold [@media(min-width:850px)]:pb-[5px] pb-0 text-gray-800">
            {product?.data?.title}

          </h2>

          <p className="[@media(min-width:850px)]:text-[16px] [@media(min-width:600px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px]">
           {product?.data?.description}
          </p>
        </div>
        <div className="w-full py-6 [@media(min-width:850px)]:px-[0px] px-[1rem]">
          <div className="w-full flex flex-wrap items-center pb-6">
            <h2 className="sm:!text-[30px] [@media(min-width:460px)]:text-[26px] text-[20px] font-semibold text-[#2C3E50]  pr-[10px] ">
              <span className="text-black">Our</span> Products
            </h2>
            <p className="[@media(min-width:595px)]:text-[16px] [@media(min-width:400px)]:text-[14px] text-[13px] [@media(min-width:595px)]:pt-[7px] pt-0 text-left">
              (Delivering Brand Identification Solutions)
            </p>
          </div>
          <div className="border-b border-dashed border-black">
            <div className="w-[70px] h-[3px]  bg-black"></div>
          </div>

          <div className="flex flex-wrap w-[100%] mx-auto justify-center py-[2rem]">
            {data?.data?.map((key) =>
            {
              return (
                <div
                  key={key._id}
                  className="[@media(min-width:450px)]:w-[360px] [@media(min-width:370px)]:w-[330px] w-[300px] h-[260px] [@media(min-width:450px)]:mx-[10px] mx-0 my-[10px]  rounded-[10px] overflow-hidden border-[2px] border-[#ececec] bg-[#ffffff] relative"
                >
                  <Link to={`/products/${ key?._id }`}>
                    {/* multiple image */}
                    <Slider
                      {...settings}
                      className={`w-[100%] h-[220px]  ${ key.image.length > 1 ? "flex" : "!hidden"
                        } items-center overflow-hidden mx-auto`}
                    >
                      {key?.image?.map((key) =>
                      {
                        return (
                          <img
                            key={key.img}
                            src={key.img}
                            className="w-[100%] h-[12rem] object-cover object-center block"
                            alt=""
                          />
                        );
                      })}
                    </Slider>
                    {/* 1 image only */}
                    <img
                      src={key.image[ 0 ].image}
                      alt=""
                      className={`w-[100%] h-[12rem] ${ key.image.length > 1 ? "hidden" : "block"
                        }`} />
                  </Link>
                  <div className="text-center text-black px-[5px] absolute bottom-[10px] left-0 right-0">
                    <p className="text-red-600 [@media(min-width:450px)]:text-[16px] text-[15px]">
                      {key.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function NextButton (props)
{
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] w-[20px] h-[50px] absolute top-[45%] right-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[black] text-[27px]" />
    </div>
  );
}
function PrevButton (props)
{
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] w-[20px] h-[50px] absolute top-[45%] left-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[black] text-[27px]" />
    </div>
  );
}

export default Product;
