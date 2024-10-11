import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LandFooter = () =>
{
  return (
    <div className="w-full h-full bg-[#0e0e0e] " id="footer">
      <footer className="text-white body-font">
        <div className="xl:w-[1230px] w-[100%] px-5 sm:py-24 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col z-10 relative">
          <div className="w-[18rem] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left  text-[#ffffff9c]">
            <div className="flex title-font font-bold text-xl items-center md:justify-start justify-center text-primary mb-[12px]">
              AR-Labels & Trims Ltd.
            </div>
            <div className="mt-2 md:text-[14px] text-[13px] GeologicaFont ">
              <span className="font-[600] pb-[1px] text-[#ffffffd1]">
                Head Office Address :
              </span>{" "}
              <br />
              <p className="leading-[18px] pt-[5px]">
                Tropical Alauddin Tower, Flat # 14/A, House# 32/C, Road#02,
                Sector #3, Uttara-1230, Dhaka, Bangladesh.
              </p>
            </div>
            <div className="mt-[5px] md:text-[14px] text-[13px] GeologicaFont ">
              <span className="font-[600] text-[#ffffffd1]">
                Factory Address :
              </span>{" "}
              <br />
              <p className="leading-[18px] pt-[5px]">
                Dag No: 3809, Vill+Mouza: Nalvugh, Nishadnagar, Turag,Dhaka,
                Bangladesh.
              </p>
            </div>

            <li className="flex items-center pt-[10px] md:text-left text-center  md:justify-start justify-center">
              <MdEmail className="text-[17px] mr-[6px] text-[#ffffffd1]" />
              <span className="text-[14px] font-[500]">info@adzitrims.com</span>
            </li>
            <li className="flex items-center pt-[8px] md:text-left text-center  md:justify-start justify-center">
              <FaPhoneFlip className="text-[15px] mr-[6px] text-[#ffffffd1]" />
              <span className="text-[14px] font-[500]">+880 1971 069 500</span>
            </li>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-[3rem] -mb-10 md:mt-0 mt-10 md:text-left text-center z-10 ">
            <div className="lg:w-[28%] md:w-1/2 w-full">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Packaging
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <li className="py-[5px]">
                  <Link to="/poly-bags" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Poly bags
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link to="/ecommerce-packaging" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    E-commerce packaging
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link to="/gift-packaging" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Gift packaging
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link to="/materials" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Materials
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link to="/collections" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Collections
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link to="/existing-customers" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Existing customers
                  </Link>
                </li>

              </nav>
            </div>
            <div className="lg:w-[28%] md:w-1/2 w-full">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Useful Links
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <li className=" py-[5px]">
                  <Link to="" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    About us
                  </Link>
                </li>
                <li className=" py-[5px]">
                  <Link to="" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Sustainability
                  </Link>
                </li>
                <li className=" py-[5px]">
                  <Link to="" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Traceability
                  </Link>
                </li>
                <li className=" py-[5px]">
                  <Link to="" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Blog
                  </Link>
                </li>
                <li className=" py-[5px]">
                  <Link to="" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Case Studies
                  </Link>
                </li>
                <li className=" py-[5px]">
                  <Link to="" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Guides & Downloads
                  </Link>
                </li>
                <li className=" py-[5px]">
                  <Link to="" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Request a free range board
                  </Link>
                </li>
                <li className=" py-[5px]">
                  <Link to="" className="cursor-pointer hover:text-[#018496] transition-[0.3s]">
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-[42%] md:w-[85%] sm:w-[350px] w-[100%] mx-auto">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Subscribe
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <form className="">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 mb-4 text-gray-900 rounded-md focus:outline-none"
                  />
                  <div className="flex justify-between">
                    <p className="md:text-sm text-[13px] text-left">
                      * We won't share it with third party.
                    </p>
                    <button className="bg-primary border-[2px] border-primary text-white py-[6px] px-[18px] rounded-md hover:bg-transparent transition">
                      Subscribe
                    </button>
                  </div>
                </form>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandFooter;
