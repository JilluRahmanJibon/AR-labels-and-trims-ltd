import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "../../../Components/Loader/Spinner";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AdminDashboardAllProduct = () =>
{
  // Product Delete Action
  const [ handleDeleteCrumb, sethandleDeleteCrumb ] = useState();
  const queryClient = useQueryClient();
  useEffect(() =>
  {
    const token = localStorage.getItem('authToken')
    if (handleDeleteCrumb && token)
    {
      const deleteData = async () =>
      {
        const toastId = toast.loading("Loading in");

        try
        {
          const response = await fetch(`${ process.env.REACT_APP_BASE_URL }/products/${ handleDeleteCrumb }`, {
            method: "DELETE",
            headers: {
              "Authorization": `${ token }`
            },
            enabled: !!token, 
          });

          if (response.ok)
          {
            queryClient.invalidateQueries("/products");
            toast.success(`Product is Deleted successfully!`, {
              id: toastId,
              duration: 2000,
            });
          }
        } catch (error)
        {
          toast.error(` Something went wrong when deleting the product!`, {
            id: toastId,
            duration: 2000,
          });
        }
      };

      deleteData();

    }
  }, [ handleDeleteCrumb, queryClient ])

  const { isLoading, error, data } = useQuery({
    queryKey: [ '/products' ],
    queryFn: () =>
      fetch(`${ process.env.REACT_APP_BASE_URL }/products/`, {
        method: 'GET'
      }).then((res) =>
        res.json(),

      ),
  })



  if (isLoading) return <Spinner />
  if (error) return <p>Error fetching data!</p>;

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
          <span className="text-primary">" {data?.data?.length} "</span> Product Found
        </h1>
        <div className="flex items-center mt-[5px] justify-center">
          <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
          <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
        </div>
        <div className="flex flex-wrap w-[100%] mx-auto justify-center py-[2rem]">
          {data?.data?.map((key) =>
          {
            return (
              <div
                key={key._id}
                className="[@media(min-width:450px)]:w-[360px] [@media(min-width:370px)]:w-[330px] w-[300px] [@media(min-width:450px)]:mx-[10px] mx-0 my-[10px]  rounded-[10px] overflow-hidden border-[2px] border-[#ececec] bg-[#ffffff]"
              >
                {/* multiple image */}
                <Slider
                  {...settings}
                  className={`w-[100%] [@media(min-width:450px)]:h-[190px] h-[150px] ${ key.image.length > 1 ? "flex" : "!hidden"
                    }  items-center overflow-hidden mx-auto`}
                >
                  {key.image.map((key) =>
                  {
                    return (
                      <img
                        key={key.img}
                        alt={key?.name}
                        src={key.img}
                        className="w-[100%] block"
                      />
                    );
                  })}
                </Slider>
                {/* 1 image only */}
                <img
                  src={key.image[ 0 ].img}
                  alt={key?.name}
                  className={`w-[100%] ${ key.image.length > 1 ? "hidden" : "block" }`}
                />

                <div className="text-center text-black [@media(min-width:450px)]:pt-[10px] pt-[5px] [@media(min-width:450px)]:pb-[15px] pb-[5px] px-[7px]">
                  <p className="text-red-600 [@media(min-width:450px)]:text-[16px] text-[15px]">
                    ({key.title})
                  </p>
                  <p className="[@media(min-width:450px)]:text-[14px] text-[13px] text-justify [@media(min-width:450px)]:px-[10px] px-[5px] pt-[5px] ">
                    {key.description}
                  </p>

                  <div className="flex justify-center pb-[10px] pt-[15px]">
                    <Link to={`/dashboard/product-solutions/update/${ key?._id }`}>
                      <button className="text-white [@media(min-width:450px)]:text-[14px] text-[13px] bg-green-500 [@media(min-width:450px)]:py-2 py-[8px] [@media(min-width:450px)]:px-6 px-[20px] focus:outline-none rounded-[5px] mr-[15px]">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() =>
                      {
                        const confirmBox = window.confirm(
                          `Do you really want to delete (${ key.title }) product?`
                        );
                        {
                          confirmBox === true
                            ? sethandleDeleteCrumb(key._id)
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

export default AdminDashboardAllProduct;
