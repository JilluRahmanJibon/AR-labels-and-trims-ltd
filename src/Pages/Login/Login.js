import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [clickEye, setclickEye] = useState(true);
  return (
    <main
      className={`w-[100%] h-[100vh] flex flex-col justify-center items-center relative mt-[4.5rem] GeologicaFont`}
    >
      <div className="container mx-auto flex flex-col justify-center ">
        <div className="relative mx-auto">
          <div className="relative w-[400px] min-h-[400px] rounded-[10px] flex justify-center items-center shadow-[0px_0px_6px_0px_#c6c6c6]">
            <div className="relative w-full h-full p-[40px]">
              <h2 className="relative text-black text-[24px] tracking-[1px] text-center pb-[20px]">
                Login
              </h2>
              <form>
                <div className="mb-[15px] text-left">
                  <label className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Email address
                    </span>
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type={clickEye ? "password" : "text"}
                      id="password"
                      name="password"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Password
                    </span>
                    <FaEyeSlash
                      onClick={() => setclickEye(true)}
                      className={`text-[16px] text-[#00000087] absolute right-[8px] top-[14px] cursor-pointer ${
                        clickEye ? "hidden" : ""
                      }`}
                    />
                    <FaEye
                      onClick={() => setclickEye(false)}
                      className={`text-[16px] text-[#00000087] absolute right-[8px] top-[14px] cursor-pointer ${
                        clickEye ? "" : "hidden"
                      }`}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  value="Submit Now"
                  className="text-[14px] w-full py-[8px] rounded-[50px] hover:!bg-transparent bg-[#018496] text-[#fff] hover:text-[#018496] border-[2px] border-[#018496] transition-[0.4s]"
                >
                  LogIn
                </button>

                <p className="mt-[20px] text-black text-[14px]">
                  Forgot Password?
                  <a href="">
                    <span className="text-[#018496] pl-[5px] cursor-pointer">
                      Click Here
                    </span>
                  </a>
                </p>

                <p className="mt-[7px] text-black text-[14px]">
                  Don't Have An Account?
                  <Link to={"/sign_up"}>
                    <span className="text-[#018496] pl-[5px] cursor-pointer">
                      Sign Up
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
