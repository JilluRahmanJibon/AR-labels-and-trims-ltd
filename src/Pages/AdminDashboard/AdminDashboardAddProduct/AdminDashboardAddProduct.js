import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";
import { toast } from "sonner";

const AdminDashboardAddProduct = () =>
{
  const [ selectedFiles, setSelectedFiles ] = useState([]);
  const [ previewUrls, setPreviewUrls ] = useState([]);

  const handleFilesChange = (e) =>
  {
    const files = Array.from(e.target.files);

    const newFiles = files.filter(
      (file) => !selectedFiles.some((selectedFile) => selectedFile.name === file.name)
    );

    setSelectedFiles([ ...selectedFiles, ...newFiles ]);
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls([ ...previewUrls, ...newPreviews ]);
  };

  const removeImage = (index) =>
  {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  const [ formData, setFormData ] = useState({
    name: "",
    description: "",
  });
  const [ submitted, setSubmitted ] = useState(false);

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setFormData({ ...formData, [ name ]: value });
  };

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    const token = localStorage.getItem("authToken")
    const toastId = toast.loading("Submitting...");
    const data = new FormData();
    data.append('data', JSON.stringify({
      title: formData.name,
      description: formData.description
    }));
    selectedFiles.forEach((file) =>
    {
      data.append("files", file);
    });

    try
    {
      const response = await fetch(`${ process.env.REACT_APP_BASE_URL }/products/create-product`, { // error come from this line
        method: "POST",
        headers: {
          Authorization: `${ token }`,
        },
        body: data,
      });
      if (response.ok)
      {
        toast.success("Product created successfully", { id: toastId });
        setSubmitted(true);
        setFormData({ name: "", description: "" });
        setSelectedFiles([]);
        setPreviewUrls([]);
      } else
      {
        toast.error("Failed to create product", { id: toastId });
      }
    } catch (error)
    {
      toast.error("Something went wrong", { id: toastId });
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
      {/* UI and form structure */}
      <div className="w-full h-full pt-[1rem]">
        <h1 className="text-center font-semibold text-[19px] sm:text-[30px]">Add Product</h1>
        <div className="flex items-center mt-[5px] justify-center">
          <div className="bg-[#FA0472] w-[18px] h-[2px] inline-flex"></div>
          <div className="mx-[5px] bg-[#018496] w-[19px] h-[5px] inline-flex"></div>
          <div className="bg-[#FA0472] w-[18px] h-[2px] inline-flex"></div>
        </div>

        {/* File Preview Slider */}
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

          {/* Form */}
          <div className="sm:w-[500px] w-[100%] sm:pl-[2rem] text-center">
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                Product Added
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-[12px] pt-[1.5rem] text-left">
                <label  >

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                    autoComplete="off"
                    placeholder="Product Name"
                    required
                    className="inputStyleIng border-[2px] text-black rounded-lg block w-full p-2.5"
                  />

                </label>
              </div>

              <div className="mb-[12px] text-left">
                <label  >
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                    autoComplete="off"
                    required
                    placeholder="Product Description"
                    rows="7"
                    className="inputStyleIng border-[2px] text-black rounded-lg block w-full p-2.5"
                  />

                </label>
              </div>

              <div className="mb-[12px] text-left">
                <label  >
                  <input
                    type="file"
                    onChange={handleFilesChange}
                    accept="image/*"
                    multiple
                    required
                    className="inputStyleIng border-[2px] text-black rounded-lg block w-full p-2.5"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="text-[14px] px-[22px] py-[8px] rounded-[50px] bg-[#018496] text-white border-[2px] border-[#018496] transition"
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
