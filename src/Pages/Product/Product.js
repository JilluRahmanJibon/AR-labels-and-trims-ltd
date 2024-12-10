import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Loader/Spinner";
import { BaseURL } from "../../utils/BaseURL";
import DynamicSlider from "../../Shared/DynamicSlider/DynamicSlider";

// Fetch all products
const fetchAllProducts = async () =>
{
  const res = await fetch(`${ BaseURL }/products/`);
  return res.json();
};

// Fetch single product by ID
const fetchSingleProduct = async (id) =>
{
  const res = await fetch(`${ BaseURL }/products/${ id }`);
  return res.json();
};

const Product = () =>
{
  const { pid } = useParams();

  // Fetch product list
  const { isLoading: isLoadingAll, data: products } = useQuery({
    queryKey: [ "/products" ],
    queryFn: fetchAllProducts,
  });

  // Fetch individual product details
  const { isLoading: isLoadingSingle, data: product } = useQuery({
    queryKey: [ "/products", pid ],
    queryFn: () => fetchSingleProduct(pid),
    enabled: !!pid, // Fetch only if `pid` exists
  });

  useEffect(() =>
  {
    // Scroll to the top on change of product ID
    window.scrollTo(0, 0);
  }, [ pid ]);

  if (isLoadingAll || isLoadingSingle)
  {
    return <Spinner />;
  }

  return (
    <section className="max-w-[1920px] mx-auto GeologicaFont">
      {/* Slider Section */}
      <div className="mt-[6.3rem]">
        <DynamicSlider slides={product?.data?.image ?? []} />
      </div>

      {/* Product Details Section */}
      <div className="py-6 [@media(min-width:850px)]:px-12 px-[0px]">
        <div className="[@media(min-width:850px)]:px-[0px] px-[1rem]">
          <h2 className="[@media(min-width:460px)]:text-[22px] text-[18px] font-semibold [@media(min-width:850px)]:pb-[5px] pb-0 text-gray-800">
            {product?.data?.title}
          </h2>
          <p className="[@media(min-width:850px)]:text-[16px] [@media(min-width:600px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px]">
            {product?.data?.description}
          </p>
        </div>

        {/* Product Showcase */}
        <div className="w-full py-6 [@media(min-width:850px)]:px-[0px] px-[1rem]">
          <div className="w-full flex flex-wrap items-center pb-6">
            <h2 className="sm:!text-[30px] [@media(min-width:460px)]:text-[26px] text-[20px] font-semibold text-[#2C3E50] pr-[10px]">
              <span className="text-black">Our</span> Products
            </h2>
            <p className="[@media(min-width:595px)]:text-[16px] [@media(min-width:400px)]:text-[14px] text-[13px] [@media(min-width:595px)]:pt-[7px] pt-0 text-left">
              (Delivering Brand Identification Solutions)
            </p>
          </div>
          <div className="border-b border-dashed border-black">
            <div className="w-[70px] h-[3px] bg-black"></div>
          </div>

          <div className="flex flex-wrap w-[100%] mx-auto justify-center py-[2rem]">
            {products?.data?.map((productItem) => (
              <div
                key={productItem?._id}
                className="[@media(min-width:450px)]:w-[360px] [@media(min-width:370px)]:w-[330px] w-[300px] h-[260px] [@media(min-width:450px)]:mx-[10px] mx-0 my-[10px] rounded-[10px] overflow-hidden border-[2px] border-[#ececec] bg-[#ffffff] relative"
              >
                <Link to={`/products/${ productItem?._id }`}>
                  {productItem?.image?.[ 0 ] && (
                    <img
                      src={productItem?.image?.[ 0 ]?.img}
                      alt={productItem?.title}
                      className="w-[100%] h-[12rem] object-cover object-center block"
                    />
                  )}
                </Link>
                <div className="text-center text-black px-[5px] absolute bottom-[10px] left-0 right-0">
                  <p className="text-red-600 [@media(min-width:450px)]:text-[16px] text-[15px]">
                    {productItem?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
