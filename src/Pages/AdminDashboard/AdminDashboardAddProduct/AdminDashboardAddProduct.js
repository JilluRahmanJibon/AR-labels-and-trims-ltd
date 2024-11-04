import React, { useRef, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

const AdminDashboardAddProduct = () => {
  const [showPName, setshowPName] = useState();
  const [showPDescription, setshowPDescription] = useState();
  const [showimage, setshowimage] = useState([]);
  console.log(showPName);
  console.log(showPDescription);
  console.log(showimage);

  // const image = [
  //   {
  //     id: 1,
  //     img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052299_1541052299.jpg",
  //   },
  //   {
  //     id: 2,
  //     img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052299_1541052299.jpg",
  //   },
  //   {
  //     id: 3,
  //     img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052299_1541052299.jpg",
  //   },
  // ];

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
      <div
        className={`bannerSmallDotliId [@media(min-width:450px)]:w-[14px] w-[11px] bottom-0 [@media(min-width:450px)]:mt-[8px] mt-[15px]`}
      >
        <GoDotFill className="cursor-pointer [@media(min-width:450px)]:text-[14px] text-[11px]" />
      </div>
    ),
    nextArrow: <NextButton showButton={showimage.length === 0 ? false : true} />,
    prevArrow: <PrevButton showButton={showimage.length === 0 ? false : true} />,
  };

  // State for form fields
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productImage: [],
  });

  // State for form submission
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // ```````````````handle image uploade```````````````````
  const handleChangeImageUploade = (e) => {

    const file = e.target.files?.[0];
    setshowimage([...showimage, { id: 1, img: URL.createObjectURL(file) }]);
    setFormData({ ...formData, "productImage": showimage});
    // handleChange(e);
  };
  // ```````````````handle Product Name```````````````````
  const handleChangeProductName = (e) => {
    const name = e.target.value;
    setshowPName(name);
    handleChange(e);
  };
  // ```````````````handle Product Description```````````````````
  const handleChangeProductDescription = (e) => {
    const name = e.target.value;
    setshowPDescription(name);
    handleChange(e);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can integrate with your backend API
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    // Reset form fields
    setFormData({
      productName: "",
      productDescription: "",
      productImage: [],
    });
  };

  return (
    <div className="w-full h-full pt-[4rem] [@media(min-width:1400px)]:pl-[15rem] pl-0 relative GeologicaFont">
      <div className="w-full h-full pt-[1rem]">
        <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold text-center">
          Add Product
        </h1>
        <div className="flex items-center mt-[5px] justify-center">
          <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
          <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
        </div>
        <div className="flex flex-wrap w-[100%] mx-auto justify-center py-[2rem]">
          <div
            className={` [@media(min-width:450px)]:w-[360px] [@media(min-width:370px)]:w-[330px] w-[300px] [@media(min-width:450px)]:mx-[10px] mx-0 my-[10px]  rounded-[10px] overflow-hidden border-[2px] border-[#ececec] bg-[#ffffff] relative`}
          >
            <Slider
              {...settings}
              className={`w-[100%] [@media(min-width:450px)]:h-[190px] h-[150px] flex items-center overflow-hidden mx-auto`}
            >
              {showimage.map((key) => {
                return (
                  <img
                    key={key.id ? key.id : ""}
                    alt="product image"
                    src={key.img ? key.img : ""}
                    className="w-[100%] block"
                  />
                );
              })}
            </Slider>
              <p className={` ${showimage.length === 0 ? "flex" : "hidden"} absolute top-[25%] left-[35%] text-[15px] select-none`}>Product Image</p>

            <div className="text-center text-black [@media(min-width:450px)]:pt-[10px] pt-[5px] [@media(min-width:450px)]:pb-[15px] pb-[5px] px-[7px]">
              <p className="text-red-600 [@media(min-width:450px)]:text-[16px] text-[15px]">
                {showPName ? showPName : "Woven Labels"}
              </p>
              <p className="[@media(min-width:450px)]:text-[14px] text-[13px] text-justify [@media(min-width:450px)]:px-[10px] px-[5px] pt-[5px] ">
                {showPDescription ? showPDescription : "We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need."}
              </p>
            </div>
          </div>

          <div className="sm:w-[500px] w-[100%] GeologicaFont sm:mx-0 mx-[1rem] sm:pl-[2rem] pl-0 text-center">
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                Product Added
              </div>
            )}
            <form onSubmit={handleSubmit} className="">
              <div className="mb-[12px] pt-[1.5rem] text-left">
                <label className="relative">
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChangeProductName}
                    autoComplete="off"
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Product Name
                  </span>
                </label>
              </div>
              <div className="mb-[12px] text-left">
                <label className="relative">
                  <textarea
                    type="text"
                    id="productDescription"
                    name="productDescription"
                    value={formData.productDescription}
                    onChange={handleChangeProductDescription}
                    autoComplete="off"
                    required
                    rows="7"
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Product Description
                  </span>
                </label>
              </div>

              <div className="mb-[12px] text-left">
                <label className="relative">
                  <input
                    type="file"
                    id="productImage"
                    name="productImage"
                    autoComplete="off"
                    // value={formData.productImage}
                    onChange={handleChangeImageUploade}
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Product Image
                  </span>
                </label>
              </div>

              <button
                type="submit"
                value="Submit Now"
                className="text-[14px] px-[22px] py-[8px] rounded-[50px] hover:!bg-transparent bg-[#018496] text-[#fff] hover:text-[#018496] border-[2px] border-[#018496] transition-[0.4s]"
              >
                Add Product 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function NextButton(props) {
  const { onClick, showButton } = props;
  return (
    <div
      className={`bg-[#dcdcdc] w-[20px] h-[50px] absolute top-[45%] right-0 [@media(min-width:450px)]:${showButton? "flex": "hidden"} hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[black] text-[27px]" />
    </div>
  );
}
function PrevButton(props) {
  const { onClick, showButton } = props;
  return (
    <div
      className={`bg-[#dcdcdc] w-[20px] h-[50px] absolute top-[45%] left-0 [@media(min-width:450px)]:${showButton? "flex": "hidden"} hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[black] text-[27px]" />
    </div>
  );
}

export default AdminDashboardAddProduct;
