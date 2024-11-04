import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

const AdminDashboardAllProduct = () => {
  // Product Delete Action
  const [handleDeleteCrumb, sethandleDeleteCrumb] = useState();

  const products = [
    {
      id: "1",
      title: "Woven Labels",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052299_1541052299.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052299_1541052299.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052299_1541052299.jpg",
        },
      ],
    },
    {
      id: "2",
      title: "Printed Fabric Labels",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546506827_1546506827.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546506827_1546506827.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546506827_1546506827.jpg",
        },
      ],
    },
    {
      id: "3",
      title: "Screen Printed Labels",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546507720_1546507720.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546507720_1546507720.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546507720_1546507720.jpg",
        },
      ],
    },
    {
      id: "4",
      title: "Heat Transfer Labels",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052388_1541052388.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052388_1541052388.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052388_1541052388.jpg",
        },
      ],
    },
    {
      id: "5",
      title: "Paper Items (Price Ticket, Hangtags)",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1571196260_1571196260.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1571196260_1571196260.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1571196260_1571196260.jpg",
        },
      ],
    },
    {
      id: "6",
      title: "Paper Packaging",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052442_1541052442.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052442_1541052442.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052442_1541052442.jpg",
        },
      ],
    },
    {
      id: "7",
      title: "Adhesive Labels/Tags",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052514_1541052514.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052514_1541052514.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052514_1541052514.jpg",
        },
      ],
    },
    {
      id: "8",
      title: "Barcode Labels & Stickers",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546508362_1546508362.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546508362_1546508362.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546508362_1546508362.jpg",
        },
      ],
    },
    {
      id: "9",
      title: "Rubber & Silicone Patch",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052616_1541052616.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052616_1541052616.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052616_1541052616.jpg",
        },
      ],
    },
    {
      id: "10",
      title: "Jacron, PU & Leather Patch (Eco-Friendly)",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541053907_1541053907.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541053907_1541053907.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541053907_1541053907.jpg",
        },
      ],
    },
    {
      id: "11",
      title: "Seal Cord/Plastic Clips/Loops",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052685_1541052685.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052685_1541052685.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052685_1541052685.jpg",
        },
      ],
    },
    {
      id: "12",
      title: "RFID / EAS / Alarm Labels, Tags & Stickers",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052711_1541052711.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052711_1541052711.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052711_1541052711.jpg",
        },
      ],
    },
    {
      id: "13",
      title: "Twill Tape & Elastic",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020801_1568020801.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020801_1568020801.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020801_1568020801.jpg",
        },
      ],
    },
    {
      id: "14",
      title: "Jacquard Elastic",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020889_1568020889.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020889_1568020889.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020889_1568020889.jpg",
        },
      ],
    },
    {
      id: "15",
      title: "Poly Bags",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020964_1568020964.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020964_1568020964.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020964_1568020964.jpg",
        },
      ],
    },
    {
      id: "16",
      title: "PVC / TPU / EVA Bags",
      description:
        "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.",
      image: [
        {
          id: 1,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568021093_1568021093.jpg",
        },
        {
          id: 2,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568021093_1568021093.jpg",
        },
        {
          id: 3,
          img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568021093_1568021093.jpg",
        },
      ],
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
    <div className="w-full h-full pt-[4rem] [@media(min-width:1400px)]:pl-[15rem] pl-0 relative GeologicaFont">
      <div className="w-full h-full pt-[1rem]">
        <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold text-center">
          Show All Products
        </h1>
        <div className="flex items-center mt-[5px] justify-center">
          <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
          <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
        </div>
        <div className="flex flex-wrap w-[100%] mx-auto justify-center py-[2rem]">
          {products.map((key) => {
            return (
              <div
                key={key.id}
                className="[@media(min-width:450px)]:w-[360px] [@media(min-width:370px)]:w-[330px] w-[300px] [@media(min-width:450px)]:mx-[10px] mx-0 my-[10px]  rounded-[10px] overflow-hidden border-[2px] border-[#ececec] bg-[#ffffff]"
              >
                {/* multiple image */}
                <Slider
                  {...settings}
                  className={`w-[100%] [@media(min-width:450px)]:h-[190px] h-[150px] ${
                    key.image.length > 1 ? "flex" : "!hidden"
                  }  items-center overflow-hidden mx-auto`}
                >
                  {key.image.map((key) => {
                    return (
                      <img
                        key={key.id}
                        alt="product image"
                        src={key.img}
                        className="w-[100%] block"
                      />
                    );
                  })}
                </Slider>
                {/* 1 image only */}
                <img
                  src={key.image[0].img}
                  alt="product image"
                  className={`w-[100%] ${key.image.length > 1 ? "hidden" : "block"}`}
                />

                <div className="text-center text-black [@media(min-width:450px)]:pt-[10px] pt-[5px] [@media(min-width:450px)]:pb-[15px] pb-[5px] px-[7px]">
                  <p className="text-red-600 [@media(min-width:450px)]:text-[16px] text-[15px]">
                    ({key.title})
                  </p>
                  <p className="[@media(min-width:450px)]:text-[14px] text-[13px] text-justify [@media(min-width:450px)]:px-[10px] px-[5px] pt-[5px] ">
                    {key.description}
                  </p>

                  <div className="flex justify-center pb-[10px] pt-[15px]">
                    <button className="text-white [@media(min-width:450px)]:text-[14px] text-[13px] bg-green-500 [@media(min-width:450px)]:py-2 py-[8px] [@media(min-width:450px)]:px-6 px-[20px] focus:outline-none rounded-[5px] mr-[15px]">
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        const confirmBox = window.confirm(
                          `Do you really want to delete (${key.title}) product?`
                        );
                        {
                          confirmBox === true
                            ? sethandleDeleteCrumb(true)
                            : sethandleDeleteCrumb(false);
                        }
                      }}
                      className="text-white [@media(min-width:450px)]:text-[14px] text-[13px] bg-red-600 [@media(min-width:450px)]:py-2 py-[8px] [@media(min-width:450px)]:px-6 px-[20px] focus:outline-none rounded-[5px]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function NextButton(props) {
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
function PrevButton(props) {
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

export default AdminDashboardAllProduct;
