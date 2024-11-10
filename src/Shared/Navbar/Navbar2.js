// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuItems, menuItems2 } from "./NavItems";
import logo from "../../Assets/logo3.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaRegUserCircle, FaUserCheck } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import verifyToken from "../../utils/verifyToken";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Loader/Spinner";

import
{
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BaseURL } from "../../utils/BaseURL";

const Navbar = () =>
{
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const [ openDropdown, setOpenDropdown ] = useState(null); // Track which dropdown is open
  const [ openDropdown2, setOpenDropdown2 ] = useState(null); // Track which dropdown is open
  const [ openNav, setIsOpenNav ] = useState(true);

  const handleMouseEnter = (index) =>
  {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () =>
  {
    setOpenDropdown(null);
  };

  const handleMouseEnter2 = (index) =>
  {
    setOpenDropdown2(index);
  };

  const handleMouseLeave2 = () =>
  {
    setOpenDropdown2(null);
  };

  const [ color, setColor ] = useState(false);
  const changeColor = () =>
  {
    if (window.scrollY >= 24)
    {
      setIsOpenNav(false);
      setColor(true);
    } else
    {
      setColor(false);
      setIsOpenNav(true);
    }
  };
  window.addEventListener("scroll", changeColor);
  const token = localStorage.getItem('authToken')
  let user
  if (token)
  {

    user = verifyToken(token)
  }

  const { isLoading, error, data } = useQuery({
    queryKey: [ '/categories' ],
    queryFn: () =>
      fetch(`${ BaseURL }/categories`, {
        method: 'GET'
      }).then((res) =>
        res.json(),
      ),
  })
  if (isLoading) return <Spinner />
  


  const extractedData = data?.data?.map(item => ({
    _id: item._id,
    title: item.title
  }));

  const updatedSubItems = extractedData?.map(item => ({
    title: item.title,
    path: `/products/${ item._id }`
  }));

  const updatedMenuItems = menuItems?.map(item =>
  {
    if (item.title === 'Product & Solutions')
    {
      return {
        ...item,
        subItems: updatedSubItems
      };
    }
    return item;
  });




  return (
    <div className="w-full flex flex-col fixed top-[0px] z-50 GeologicaFont"   data-aos="fade-down">
      {openNav && (
        <div
          className={`bg-[#018496] w-full h-[2.5rem] flex justify-center items-center`}
        >
          <div className="max-w-7xl w-full flex items-center justify-between mx-auto text-white sm:px-[25px] px-[10px]">
            <div className="flex items-center">
              <div className="[@media(min-width:450px)]:w-[24px] w-[21px] [@media(min-width:450px)]:h-[24px] h-[21px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
                <FaFacebookF className="text-[11px]" />
              </div>
              <div className="[@media(min-width:450px)]:w-[24px] w-[21px] [@media(min-width:450px)]:h-[24px] h-[21px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
                <FaLinkedinIn className="text-[11px]" />
              </div>
              <div className="[@media(min-width:450px)]:w-[24px] w-[21px] [@media(min-width:450px)]:h-[24px] h-[21px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
                <BsInstagram className="text-[11px]" />
              </div>
            </div>

            {
              user ? <Link
                to={`${ user?.role }/dashboard`}
                className="flex justify-center items-center mx-[5px] cursor-pointer"
              >
                <FaUserCheck className="[@media(min-width:450px)]:text-[20px] text-[17px]" />
                <p className="pl-[5px] pt-[1px] [@media(min-width:450px)]:text-[12.5px] text-[12px]">
                  Profile
                </p>
              </Link> : <Link
                to={"/login"}
                className="flex justify-center items-center mx-[5px] cursor-pointer"
              >
                <FaRegUserCircle className="[@media(min-width:450px)]:text-[20px] text-[17px]" />
                <p className="pl-[5px] pt-[1px] [@media(min-width:450px)]:text-[12.5px] text-[12px]">
                  Existing customers
                </p>
              </Link>
            }
          </div>
        </div>
      )}
      <nav
        className={` w-full relative ${ color ? "bg-[#ffffffed] shadow-[0px_0px_3px_0px_#0003]" : "bg-white"
          }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div className="max-w-7xl mx-auto lg:!px-[20px] [@media(min-width:500px)]:px-[2rem] [@media(min-width:350px)]:px-[20px] px-[10px]">
          <div className="flex justify-between items-center [@media(min-width:850px)]:h-[4.5rem] h-[4rem]">

            {/* Desktop Menu Left Side */}
            <div className="w-[460px] hidden z-10 [@media(min-width:1130px)]:flex lg:items-center">
              <div className="flex items-baseline">
                {updatedMenuItems?.map((item, index) =>
                  !item.subItems ? (
                    <NavLink
                      key={item.title}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "px-[5px] rounded-md text-sm font-medium text-primary"
                          : "px-[5px] rounded-md text-sm font-medium text-gray-700 hover:text-primary"
                      }
                    >
                      {item.title}
                    </NavLink>
                  ) : (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary flex items-center">
                        {item.title}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      <div
                        className={`absolute left-0 w-[13rem] bg-white border rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${ openDropdown === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                          }`}
                      >
                        {item.subItems?.map((subItem) => (
                          <NavLink
                            key={subItem.title}
                            to={subItem.path}
                            className={
                              ({ isActive }) =>
                                isActive
                                  ? "block px-4 py-2 text-sm text-primary bg-gray-100 border-l-[3px] transition-all border-primary" // Active state with left border
                                  : "block px-4 py-2 text-sm text-gray-700 hover:text-primary transition-all hover:border-l-[3px] hover:border-primary" // Hover state with left border
                            }
                          >
                            {subItem.title}
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
                  className="[@media(min-width:450px)]:h-[40px] h-[30px] w-auto"
                  src={logo}
                  alt="Company Logo"
                />
              </NavLink>
            </div>
            {/* Desktop Menu Right Side */}
            <div className="w-[465px] hidden z-10 [@media(min-width:1130px)]:flex lg:items-center justify-end ">
              <div className="flex items-baseline">
                {menuItems2?.map((item, index) =>
                  !item.subItems ? (
                    <NavLink
                      key={item.title}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "px-[5px] rounded-md text-sm font-medium text-primary"
                          : "px-[5px] rounded-md text-sm font-medium text-gray-700 hover:text-primary"
                      }
                    >
                      {item.title}
                    </NavLink>
                  ) : (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter2(index)}
                      onMouseLeave={handleMouseLeave2}
                    >
                      <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary flex items-center">
                        {item.title}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      <div
                        className={`absolute left-0  w-[13rem] bg-white border rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${ openDropdown2 === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                          }`}
                      >
                        {item.subItems?.map((subItem) => (
                          <NavLink
                            key={subItem.title}
                            to={subItem.path}
                            className={
                              ({ isActive }) =>
                                isActive
                                  ? "block px-4 py-2 text-sm text-primary bg-gray-100 border-l-[3px] transition-all border-primary" // Active state with left border
                                  : "block px-4 py-2 text-sm text-gray-700 hover:text-primary transition-all hover:border-l-[3px] hover:border-primary" // Hover state with left border
                            }
                          >
                            {subItem.title}
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
                className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="[@media(min-width:450px)]:h-6 h-[22px] [@media(min-width:450px)]:w-6 w-[22px]" />
                ) : (
                  <Bars3Icon className="[@media(min-width:450px)]:h-6 h-[22px] [@media(min-width:450px)]:w-6 w-[22px]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="[@media(min-width:1130px)]:hidden border-t-[1px] border-t-[#e0e0e0c3] shadow-[0px_0px_3px_0px_#0003]">
            <div className="px-2 pt-2 space-y-1 sm:px-3">
              {updatedMenuItems?.map((item) =>
                !item.subItems ? (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[15px] text-[14px] font-medium text-primary"
                        : "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[15px] text-[14px] font-medium text-gray-700 hover:text-primary"
                    }
                  >
                    {item.title}
                  </NavLink>
                ) : (
                  <div key={item.title}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.title ? null : item.title
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md [@media(min-width:800px)]:text-[15px] text-[14px] font-medium text-gray-700 hover:text-primary focus:outline-none"
                    >
                      {item.title}
                      <ChevronDownIcon
                        className={`h-[15px] w-[15px] transition-transform ${ openDropdown === item.title
                          ? "transform rotate-180"
                          : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`ml-4 transition-all duration-300 ease-in-out transform ${ openDropdown === item.title
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      {openDropdown === item.title && (
                        <div className="ml-4">
                          {item.subItems?.map((subItem) => (
                            <NavLink
                              key={subItem.title}
                              to={subItem.path}
                              onClick={() =>
                              {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                              className={({ isActive }) =>
                                isActive
                                  ? "block px-[8px] py-2 rounded-md [@media(min-width:800px)]:text-[14px] text-[13px] font-medium text-primary"
                                  : "block px-[8px] py-2 rounded-md [@media(min-width:800px)]:text-[14px] text-[13px] font-medium text-gray-700 hover:text-primary"
                              }
                            >
                              {subItem.title}
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
              {menuItems2?.map((item) =>
                !item.subItems ? (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[15px] text-[14px] font-medium text-primary"
                        : "block px-3 py-2 rounded-md [@media(min-width:800px)]:text-[15px] text-[14px] font-medium text-gray-700 hover:text-primary"
                    }
                  >
                    {item.title}
                  </NavLink>
                ) : (
                  <div key={item.title}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.title ? null : item.title
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md [@media(min-width:800px)]:text-[15px] text-[14px] font-medium text-gray-700 hover:text-primary focus:outline-none"
                    >
                      {item.title}
                      <ChevronDownIcon
                        className={`h-[15px] w-[15px] transition-transform ${ openDropdown === item.title
                          ? "transform rotate-180"
                          : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`ml-4 transition-all duration-300 ease-in-out transform ${ openDropdown === item.title
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      {openDropdown === item.title && (
                        <div className="ml-4">
                          {item.subItems?.map((subItem) => (
                            <NavLink
                              key={subItem.title}
                              to={subItem.path}
                              onClick={() =>
                              {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                              className={({ isActive }) =>
                                isActive
                                  ? "block px-[8px] py-2 rounded-md [@media(min-width:800px)]:text-[14px] text-[13px] font-medium text-primary"
                                  : "block px-[8px] py-2 rounded-md [@media(min-width:800px)]:text-[14px] text-[13px] font-medium text-gray-700 hover:text-primary"
                              }
                            >
                              {subItem.title}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}

            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
