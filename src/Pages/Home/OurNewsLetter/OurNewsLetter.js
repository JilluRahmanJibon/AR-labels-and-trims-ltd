import React from "react";

function OurNewsLetter ()
{
  return (
    <main
      className={`w-[100%] h-[100%] [@media(min-width:420px)]:py-[3.5rem] py-[2rem] [@media(min-width:420px)]:px-[2rem] px-[15px] bg-[#264d4d] [@media(min-width:420px)]:rounded-tr-[8rem] rounded-tr-[3rem]`}
    >
      <div className="xl:w-[1100px] w-[100%] grid [@media(min-width:1050px)]:grid-cols-2 grid-cols-1 items-center mx-auto">
        <div className="[@media(min-width:1100px)]:w-[500px] [@media(min-width:1050px)]:w-[400px] [@media(min-width:420px)]:w-[97%] w-[99%] GeologicaFont text-[#ffffff] [@media(min-width:490px)]:mb-[2rem] mb-[1rem] mx-auto">
          <h1 className="xl:!text-[32px] [@media(min-width:500px)]:text-[28px] [@media(min-width:400px)]:text-[20px] text-[20px] [@media(min-width:490px)]:pb-[12px] pb-[7px]">Sign up for our newsletter</h1>
          <p className="[@media(min-width:1050px)]:text-[16px] [@media(min-width:490px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px] [@media(min-width:490px)]:leading-[18px]">Want to keep up to date with industry developments, trends, product launches and more? Sign up to our newsletter to get the latest delivered to your inbox.</p>
        </div>
        <form className="[@media(min-width:1100px)]:w-[500px] [@media(min-width:1050px)]:w-[400px] [@media(min-width:420px)]:w-[97%] w-[99%] [@media(min-width:1050px)]:ml-[1rem] mx-auto">
          <div className="grid [@media(min-width:490px)]:gap-6 gap-2 mb-[1rem] md:grid-cols-2 text-left">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-[13px] font-[600] text-[#fff]"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-transparent border-[2px] border-gray-300 text-[#fff] text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-2.5 dark:bg-transparent dark:border-[#dadada] dark:placeholder-white dark:text-white dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[600] outline-none"
                placeholder="John"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-[13px] font-[600] text-[#fff]"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-transparent border-[2px] border-gray-300 text-[#fff] text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-2.5 dark:bg-transparent dark:border-[#dadada] dark:placeholder-white dark:text-white dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[600] outline-none"
                placeholder="Doe"
                required=""
              />
            </div>
          </div>
          <div className="grid gap-6 mb-[1rem] text-left">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-[13px] font-[600] text-[#fff]"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-[2px] border-gray-300 text-[#fff] text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-2.5 dark:bg-transparent dark:border-[#dadada] dark:placeholder-white dark:text-white dark:focus:ring-[#018496] dark:focus:border-[#018496] font-[600] outline-none"
                placeholder="email123@gmail.com"
                required=""
              />
            </div>
          </div>

          <button
            type="submit"
            className="border-[2px] border-[#c9EB61] bg-[#c9EB61] hover:bg-transparent cursor-pointer outline-none text-black hover:text-white font-[600] [@media(min-width:490px)]:text-[16px] text-[15px] [@media(min-width:490px)]:px-[20px] px-[15px] [@media(min-width:490px)]:py-[10px] py-[8px] rounded-[50px] transition-[0.3s]"
          >
            Sign me up!
          </button>
        </form>
      </div>
    </main>
  );
}

export default OurNewsLetter;
