import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ApplyOnlineDetails = () => {
  const AvailablePositionsData = [
    {
      id: 1,
      tittle: "SL",
      childlist: [{ id: 1, description: "01" }],
      width: [
        { id: 1, size: "240px" },
        { id: 2, size: "210px" },
      ],
    },
    {
      id: 2,
      tittle: "Job Tittle",
      childlist: [
        // { id: 1, description: "Presedent" },
        // { id: 2, description: "Vice Presedent" },
      ],
      width: [
        { id: 1, size: "360px" },
        { id: 2, size: "330px" },
      ],
    },
    {
      id: 3,
      tittle: "No. Of Positions",
      childlist: [{ id: 1, description: "10" }],
      width: [
        { id: 1, size: "360px" },
        { id: 2, size: "330px" },
      ],
    },
    {
      id: 4,
      tittle: "Deadline",
      childlist: [{ id: 1, description: "25-12-2024" }],
      width: [
        { id: 1, size: "240px" },
        { id: 2, size: "210px" },
      ],
    },
  ];

  // available Positions value
  const [
    availablePositionsDataDescription,
    setAvailablePositionsDataDescription,
  ] = useState();

  // Available Position
  const [availablePosition, setAvailablePosition] = useState(false);
  // Submit Button disabled
  const [submitButtonToggle, setSubmitButtonToggle] = useState(true);
  // Check Available Position
  useEffect(() => {
    if(AvailablePositionsData[1].childlist.length > 0){
      setAvailablePosition(true)
      setSubmitButtonToggle(true)
    }else{
      setAvailablePosition(false)
      setSubmitButtonToggle(false)
    }
    {availablePositionsDataDescription === undefined ? setSubmitButtonToggle(false) : setSubmitButtonToggle(true)}
  });

  // Show Position Option
  const [showPositionOption, setShowPositionOption] = useState(false);

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
    setTimeout(() => {
      setSubmitted(false);
    }, 10000);

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

        <div
          className="lg:w-1/2 w-[100%] GeologicaFont mx-auto text-center lg:pb-0 pb-[1.5rem]"
          onMouseEnter={() =>
            setFormData({
              ...formData,
              position: availablePositionsDataDescription,
            })
          }
        >
          {submitted && (
            <div className="mb-[10px] p-4 bg-green-100 text-green-700 rounded">
              Thank you for contacting us! We'll get back to you shortly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="">
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
                  type="tel"
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
                <span className="focus:text-[#018496] bg-[#fff] transform -translate-y-[22px] -translate-x-[3px] scale-75 cursor-default text-sm text-opacity-80 absolute left-2 top-3 px-1 transition duration-200 input-text z-[1] ">
                  Applying Position
                </span>

                <div className="inputStyleIng h-[43.2px] border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none z-[1]">
                  <div
                    className={`${
                      availablePosition ? "hidden" : "flex"
                    } w-full  items-center text-[#000c]`}
                  >
                    <p className="text-[14px]">No Position Available</p>
                  </div>
                  <div
                    className={`${
                      availablePosition ? "flex" : "hidden"
                    } w-full justify-center items-center text-[#000c]`}
                  >
                    <div
                      className="w-full h-[22px] flex justify-between items-center cursor-pointer"
                      onClick={() => setShowPositionOption(!showPositionOption)}
                    >
                      <p className="text-[14px] select-none">
                        {availablePositionsDataDescription === undefined ? "Select Position": availablePositionsDataDescription}
                      </p>
                      <FaChevronDown
                        className={`${showPositionOption ? "hidden" : ""}`}
                      />
                      <FaChevronUp
                        className={`${showPositionOption ? "" : "hidden"}`}
                      />
                    </div>

                    {/* Position Option */}
                    <div
                      className={`absolute top-[43px] left-0 w-[100%] bg-white z-[2] shadow-[0px_0px_6px_0px_#c6c6c6] rounded-b-[3px] ${
                        showPositionOption ? "" : "hidden"
                      }`}
                    >
                      {AvailablePositionsData[1].childlist.map((key) => {
                        return (
                          <p
                            key={key.id}
                            className={`${
                              availablePositionsDataDescription ==
                              key.description
                                ? "bg-[#00000011]"
                                : ""
                            } hover:bg-[#00000011] text-[14px] p-2.5 cursor-pointer transition-[0.3s] ${
                              AvailablePositionsData[1].childlist.length > 1
                                ? ""
                                : "border-b-[1px] border-b-[#00000038]"
                            } select-none`}
                            onClick={() => {
                              setShowPositionOption(!showPositionOption);
                              setFormData({
                                ...formData,
                                position: key.description,
                              });
                              setAvailablePositionsDataDescription(
                                key.description
                              );
                            }}
                          >
                            {key.description}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
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

            {submitButtonToggle ? (
              <button
                type="submit"
                value="Submit Now"
                className="text-[14px] px-[22px] py-[8px] rounded-[50px] hover:!bg-transparent bg-[#018496] text-[#fff] hover:text-[#018496] border-[2px] border-[#018496] transition-[0.4s]"
              >
                Submit Application Now
              </button>
            ) : (
              <button
                type="submit"
                value="Submit Now"
                disabled
                className="text-[14px] px-[22px] py-[8px] rounded-[50px] bg-[#018496] text-[#fff] border-[2px] border-[#018496] transition-[0.4s]"
              >
                Submit Application Now
              </button>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default ApplyOnlineDetails;
