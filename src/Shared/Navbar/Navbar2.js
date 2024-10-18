// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { menuItems, menuItems2 } from "./NavItems";
import logo from "../../Assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [openDropdown2, setOpenDropdown2] = useState(null); // Track which dropdown is open

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleMouseEnter2 = (index) => {
    setOpenDropdown2(index);
  };

  const handleMouseLeave2 = () => {
    setOpenDropdown2(null);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className="w-full flex flex-col fixed top-[0px] z-50 GeologicaFont">
      <div className="bg-[#018496] w-full h-[2.5rem] flex justify-center items-center">
        <div className="max-w-7xl w-full flex items-center justify-between mx-auto text-white">
          <div className="flex items-center">
            <div className="w-[24px] h-[24px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
              <FaFacebookF className="text-[11px]" />
            </div>
            <div className="w-[24px] h-[24px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
              <FaLinkedinIn className="text-[11px]" />
            </div>
            <div className="w-[24px] h-[24px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
              <BsInstagram className="text-[11px]" />
            </div>
          </div>
            <div className="flex justify-center items-center mx-[5px] cursor-pointer">
              <FaRegUserCircle className="text-[20px]" />
              <p className="pl-[5px] pt-[1px] text-[12.5px]">Existing customers</p>
            </div>
        </div>
      </div>
      <nav
        className={` w-full relative ${
          color ? "bg-[#ffffffed] shadow-[0px_0px_3px_0px_#0003]" : "bg-white"
        }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div className="max-w-7xl mx-auto lg:!px-[20px] [@media(min-width:500px)]:px-[2rem] [@media(min-width:350px)]:px-[20px] px-[10px]">
          <div className="flex justify-between items-center h-[4.5rem]">
            {/* Logo */}
            <div className="hidden">
              <NavLink to="/">
                <img
                  className="h-[50px] w-auto"
                  src={logo}
                  alt="Company Logo"
                />
              </NavLink>
            </div>

            {/* Desktop Menu Left Side */}
            <div className="w-[430px] hidden z-10 [@media(min-width:1130px)]:flex lg:items-center">
              <div className="flex items-baseline">
                {menuItems.map((item, index) =>
                  !item.subItems ? (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "px-[5px] rounded-md text-sm font-medium text-primary"
                          : "px-[5px] rounded-md text-sm font-medium text-gray-700 hover:text-primary"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary flex items-center">
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      <div
                        className={`absolute left-0 w-[13rem] bg-white border rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${
                          openDropdown === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={
                              ({ isActive }) =>
                                isActive
                                  ? "block px-4 py-2 text-sm text-primary bg-gray-100 border-l-[3px] transition-all border-primary" // Active state with left border
                                  : "block px-4 py-2 text-sm text-gray-700 hover:text-primary transition-all hover:border-l-[3px] hover:border-primary" // Hover state with left border
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Logo */}
            <div className="">
              <NavLink to="/">
                <img
                  className="h-[40px] w-auto"
                  src={logo}
                  alt="Company Logo"
                />
              </NavLink>
            </div>
            {/* Desktop Menu Right Side */}
            <div className="w-[430px] hidden z-10 [@media(min-width:1130px)]:flex lg:items-center justify-end ">
              <div className="flex items-baseline">
                {menuItems2.map((item, index) =>
                  !item.subItems ? (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "px-[5px] rounded-md text-sm font-medium text-primary"
                          : "px-[5px] rounded-md text-sm font-medium text-gray-700 hover:text-primary"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter2(index)}
                      onMouseLeave={handleMouseLeave2}
                    >
                      <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary flex items-center">
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      <div
                        className={`absolute left-0  w-[13rem] bg-white border rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${
                          openDropdown2 === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={
                              ({ isActive }) =>
                                isActive
                                  ? "block px-4 py-2 text-sm text-primary bg-gray-100 border-l-[3px] transition-all border-primary" // Active state with left border
                                  : "block px-4 py-2 text-sm text-gray-700 hover:text-primary transition-all hover:border-l-[3px] hover:border-primary" // Hover state with left border
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )
                )}
                <NavLink
                  to={"/contactUs"}
                  className={
                    "border-[2px] border-primary bg-primary hover:bg-transparent cursor-pointer outline-none text-white hover:text-primary font-[500] text-sm px-[20px] py-[8px] rounded-[50px] transition-[0.3s] ml-[10px] mr-[5px]"
                  }
                >
                  Contact Us
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center [@media(min-width:1130px)]:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="[@media(min-width:1130px)]:hidden">
            <div className="px-2 pt-2 space-y-1 sm:px-3">
              {menuItems.map((item) =>
                !item.subItems ? (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-primary"
                        : "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-gray-700 hover:text-primary"
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-gray-700 hover:text-primary focus:outline-none"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform ${
                          openDropdown === item.name
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`ml-4 transition-all duration-300 ease-in-out transform ${
                        openDropdown === item.name
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {openDropdown === item.name && (
                        <div className="ml-4">
                          {item.subItems.map((subItem) => (
                            <NavLink
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                              className={({ isActive }) =>
                                isActive
                                  ? "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-primary"
                                  : "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-gray-700 hover:text-primary"
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="px-2 pb-3 space-y-1 sm:px-3">
              {menuItems2.map((item) =>
                !item.subItems ? (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-primary"
                        : "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-gray-700 hover:text-primary"
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setOpenDropdown2(
                          openDropdown2 === item.name ? null : item.name
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-gray-700 hover:text-primary focus:outline-none"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform ${
                          openDropdown2 === item.name
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`ml-4 transition-all duration-300 ease-in-out transform ${
                        openDropdown2 === item.name
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {openDropdown2 === item.name && (
                        <div className="ml-4">
                          {item.subItems.map((subItem) => (
                            <NavLink
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                              className={({ isActive }) =>
                                isActive
                                  ? "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-primary"
                                  : "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-gray-700 hover:text-primary"
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
              <NavLink
                to={"/contactus"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-primary"
                    : "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[16px] text-[15px] font-medium text-gray-700 hover:text-primary"
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
