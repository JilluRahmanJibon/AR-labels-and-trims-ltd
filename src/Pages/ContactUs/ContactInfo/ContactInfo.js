import React, { useRef } from "react";

const Contact = () => {
  
  return (
    <main
      className={`w-full h-full relative pt-[1.5rem] desktop3:pb-[3rem] pb-[1rem] GeologicaFont bg-[#edededed]`}
      id="Contact"
    >
      <div className="w-full text-center text-black relative z-10 sm2:pb-[0px] pb-[15px]">
        <p className="text-[#018496] sm2:text-[15px] sm4:text-[13px] text-[12px] mx-auto sm4:leading-[20px] leading-[16px]">
          Contact
        </p>
        <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-bold">
          I Want to Hear from You
        </h1>
      </div>
      <div className="mx-auto xl:w-[1230px] w-[96%] h-[100%] relative z-[1] flex justify-center items-center">
        <div className="flex justify-center w-full xl:py-0 sm:py-[1.3rem] sm4:py-[0.8rem] py-[0.3rem] text-black z-10">
          <div className="sm2:w-[700px] w-[100%] GeologicaFont mx-auto text-center lg:pb-0 pb-[1.5rem]">
            <form
              className="sm:px-[0] sm2:px-[1.5rem] sm4:px-[15px] px-0"
            >
              <div className="mb-[20px] pt-[1.5rem] text-left">
                <label className="relative">
                  <input
                    type="text"
                    name="user_name"
                    autoComplete="off"
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#edededed] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Your Name
                  </span>
                </label>
              </div>
              <div className="grid gap-6 mb-[20px] md:grid-cols-2 text-left">
                <label className="relative">
                  <input
                    type="email"
                    name="user_email"
                    autoComplete="off"
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#edededed] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Email address
                  </span>
                </label>
                <label className="relative">
                  <input
                    type="text"
                    name="user_phone"
                    autoComplete="off"
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#edededed] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Your Phone
                  </span>
                </label>
              </div>
              <div className="mb-[20px] text-left">
                <label className="relative">
                  <input
                    type="text"
                    name="user_subject"
                    autoComplete="off"
                    required
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#edededed] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Subject
                  </span>
                </label>
              </div>
              <div className="mb-[20px] text-left">
                <label className="relative">
                  <textarea
                    type="text"
                    name="message"
                    autoComplete="off"
                    required
                    rows="8 "
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#edededed] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Your message
                  </span>
                </label>
              </div>

              <button
                type="submit"
                value="Submit Now"
                className="text-[14px] px-[22px] py-[8px] rounded-[50px] hover:!bg-transparent bg-[#018496] text-[#fff] hover:text-[#018496] border-[2px] border-[#018496] transition-[0.4s]"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
