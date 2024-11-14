import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";
import { toast } from "sonner";
import { BaseURL } from "../../../utils/BaseURL";
import axios from "axios";

const AdminDashboardAddProduct = () =>
{
  const [ isLoading, setIsLoading ] = useState(false);
  const [ selectedFiles, setSelectedFiles ] = useState([]);
  const [ previewUrls, setPreviewUrls ] = useState([]);
  const [ formData, setFormData ] = useState({
    name: "",
    description: "",
  });
  const [ submitted, setSubmitted ] = useState(false);

  const handleFilesChange = (e) =>
  {
    const files = Array.from(e.target.files);
    const newFiles = files.filter(
      (file) => !selectedFiles.some((selectedFile) => selectedFile.name === file.name)
    );
    if (selectedFiles.length + newFiles.length < 2)
    {
      alert("Please select at least two images.");
      return;
    }
    setSelectedFiles([ ...selectedFiles, ...newFiles ]);
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls([ ...previewUrls, ...newPreviews ]);
  };

  const removeImage = (index) =>
  {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setFormData({ ...formData, [ name ]: value });
  };

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    const toastId = toast.loading("Submitting...");
    setIsLoading(true);


    try
    {
      const imageUrls = [];
      for (const file of selectedFiles)
      {
        const formDataImage = new FormData();
        formDataImage.append("file", file);
        formDataImage.append("upload_preset", "gffb3xhf"); // Replace with your preset
        formDataImage.append("cloud_name", "db3xhqy4o"); // Replace with your Cloudinary cloud name

        const cloudinaryResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/db3xhqy4o/image/upload`,
          formDataImage
        );

        if (cloudinaryResponse?.status === 200)
        {
          imageUrls.push({ img: cloudinaryResponse.data.secure_url }); // Store Cloudinary image URL
        } else
        {
          throw new Error("Failed to upload image to Cloudinary");
        }
      }


      const data = {
        title: formData.name,
        description: formData.description,
        image: imageUrls
      }


      const response = await axios.post(
        `${ BaseURL }/products/create-product`,
        data,
        {
          headers: {
            Authorization: `${ token }`,  
          },
        }
      );
 
 
      if (response?.status === 200)
      {
        toast.success(`${response?.data?.message}`, { id: toastId });
        setSubmitted(true);
        setFormData({ name: "", description: "" });
        setSelectedFiles([]);
        setPreviewUrls([]);
        setIsLoading(false);
      } else
      {
        toast.error(`Please give a unique title!`, { id: toastId });
        setIsLoading(false);
      }
    } catch (error)
    {
      toast.error("Something went wrong", { id: toastId });
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  const settings = {
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
    nextArrow: <NextButton showButton={previewUrls.length > 0} />,
    prevArrow: <PrevButton showButton={previewUrls.length > 0} />,
  };

  return (
    <div className="w-full h-full pt-[4rem] [@media(min-width:1400px)]:pl-[15rem] pl-0 relative GeologicaFont">
      <div className="w-full h-full pt-[1rem]">
        <h1 className="text-center font-semibold text-[19px] sm:text-[30px]">Add Product</h1>
        <div className="flex items-center mt-[5px] justify-center">
          <div className="bg-[#FA0472] w-[18px] h-[2px] inline-flex"></div>
          <div className="mx-[5px] bg-[#018496] w-[19px] h-[5px] inline-flex"></div>
          <div className="bg-[#FA0472] w-[18px] h-[2px] inline-flex"></div>
        </div>

        <div className="flex flex-wrap w-[100%] mx-auto justify-center py-[2rem]">
          <div className="w-[300px] mx-0 my-[10px] rounded-[10px] overflow-hidden border-[2px] bg-[#ffffff]">
            <Slider {...settings} className="w-full h-[150px]">
              {previewUrls.length > 0 ? (
                previewUrls.map((url, index) => (
                  <div key={index} className="relative">
                    <img src={url} alt={`Preview ${ index }`} className="w-full" />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2"
                    >
                      ✕
                    </button>
                  </div>
                ))
              ) : (
                <p className="absolute top-[25%] left-[35%] text-[15px]">Product Image</p>
              )}
            </Slider>
          </div>

          <div className="sm:w-[500px] w-[100%] sm:pl-[2rem] text-center">
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                Product Added
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-[12px] pt-[1.5rem] text-left">
                <label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Unique Product Title"
                    required
                    className="inputStyleIng border-[2px] focus:outline-primary text-black rounded-lg block w-full p-2.5"
                  />
                </label>
              </div>

              <div className="mb-[12px] text-left">
                <label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    placeholder="Product Description"
                    rows="7"
                    className="inputStyleIng border-[2px] focus:outline-primary text-black rounded-lg block w-full p-2.5"
                  />
                </label>
              </div>

              <div className="mb-[12px] text-left">
                <label className="w-full">
                  <input
                    type="file"
                    onChange={handleFilesChange}
                    accept="image/*"
                    multiple
                    required
                    className="hidden"
                  />
                  <div className="inputStyleIng cursor-pointer border-2 border-dashed border-gray-400 rounded-lg w-full p-4 text-center">
                    Click to upload images (min. 2)
                  </div>
                </label>
              </div>

              <div className="mb-[12px] flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-2 px-4 bg-primary text-white rounded-lg"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


// Arrow button components
function NextButton ({ onClick, showButton })
{
  return (
    <div
      className={`bg-[#dcdcdc] w-[20px] h-[50px] absolute top-[45%] right-0 ${ showButton ? "flex" : "hidden" }`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[black] text-[27px]" />
    </div>
  );
}


function PrevButton ({ onClick, showButton })
{
  return (
    <div
      className={`bg-[#dcdcdc] w-[20px] h-[50px] absolute top-[45%] left-0 ${ showButton ? "flex" : "hidden" }`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[black] text-[27px]" />
    </div>
  );
}

export default AdminDashboardAddProduct;
