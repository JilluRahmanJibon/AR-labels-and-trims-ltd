import React, {useState} from "react";

const ApplyOnlineDetails = () => {
    // State for form fields
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      position: "",
      cvaplication: "",
    });
  
    // State for form submission
    const [submitted, setSubmitted] = useState(false);
  
    // Handle input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can integrate with your backend API
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
      // Reset form fields
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        position: "",
        cvaplication: "",
      });
    };
  
  return (
    <div className="bg-[#fff] GeologicaFont">
      <main className="xl:w-[1230px] w-[96%] mx-auto  py-[3rem] px-5  overflow-hidden">
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold">
            Apply Online
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          </div>
        </div>

        <div className="lg:w-1/2 w-[100%] GeologicaFont mx-auto text-center lg:pb-0 pb-[1.5rem]">
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                Thank you for contacting us! We'll get back to you shortly.
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className=""
            >
              <div className="mb-[12px] pt-[1.5rem] text-left">
                <label className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Your Full Name
                  </span>
                </label>
              </div>
              <div className="grid gap-3 mb-[12px] md:grid-cols-2 text-left">
                <label className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Email address
                  </span>
                </label>
                <label className="relative">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Your Phone
                  </span>
                </label>
              </div>
              <div className="mb-[12px] text-left">
                <label className="relative">
                  <textarea
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    rows="2 "
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                  Applicant's Address
                  </span>
                </label>
              </div>
              
              <div className="mb-[12px] text-left">
                <label className="relative">
                  <input
                    type="text"
                    id="position"
                    name="position"
                    autoComplete="off"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text ">
                  Applying Position
                  </span>
                </label>
              </div>





              <div className="mb-[12px] text-left">
                <label className="relative">
                  <input
                    type="file"
                    id="cvaplication"
                    name="cvaplication"
                    autoComplete="off"
                    value={formData.cvaplication}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                  CV
                  </span>
                </label>
              </div>

              <button
                type="submit"
                value="Submit Now"
                className="text-[14px] px-[22px] py-[8px] rounded-[50px] hover:!bg-transparent bg-[#018496] text-[#fff] hover:text-[#018496] border-[2px] border-[#018496] transition-[0.4s]"
              >
                Submit Application Now 
              </button>
            </form>
          </div>
      </main>
    </div>
  );
};

export default ApplyOnlineDetails;
