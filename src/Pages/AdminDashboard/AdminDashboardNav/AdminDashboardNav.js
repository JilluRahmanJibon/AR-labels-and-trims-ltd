// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaPowerOff } from "react-icons/fa6";
import logo from "../../../Assets/logo3.png";
import { FaAngleDown } from "react-icons/fa6";


const AdminDashboardNav = ({data}) =>
{
 
  return (
    <div className="w-full flex flex-col fixed top-[0px] z-50 GeologicaFont">
      <nav
        className={` w-full relative bg-white shadow-[0px_0px_3px_0px_#0003]
        `}
        style={{ transition: ".1s ease-in" }}
      >
        <div className="mx-auto">
          <div className="flex justify-between items-center h-[4rem]">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-[15rem] flex justify-center">
                <NavLink to="/">
                  <img
                    className="h-[35px] w-auto"
                    src={logo}
                    alt="Company Logo"
                  />
                </NavLink>
              </div>
              <Bars3Icon className="h-[22px] w-[22px] ml-[1rem] cursor-pointer text-gray-500" />
            </div>
            {/* Desktop Menu Right Side */}

            <div className="flex justify-end items-center pr-[2.5rem]">
              {/* Profile Info */}
              <div className="flex items-center cursor-pointer mr-[1.5rem]">
                <div className="w-[2.2rem] h-[2.2rem] relative mr-[10px]">
                  <img
                    alt="team"
                    className="w-[2.2rem] h-[2.2rem] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full "
                    src="https://lh3.googleusercontent.com/ogw/AF2bZyjk6cdflB1wb10KcpMG-wgWn49H8grAiABEyUDjTCSgfk8=s32-c-mo"
                  />
                  <div className="w-[10px] h-[10px] absolute bottom-0 right-0 rounded-[50%] bg-[#3dff6a] border-[2px] border-[#fff]"></div>
                </div>
                <div className="flex items-center">
                  <h2 className="text-gray-900 font-[400] text-[14px] select-none">
                    {data?.name}
                  </h2>
                  <FaAngleDown className="text-gray-500 text-[14px] ml-[10px]" />
                </div>
              </div>
              {/* Power Button */}
              <FaPowerOff className="text-[14px] text-gray-600" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default AdminDashboardNav;
