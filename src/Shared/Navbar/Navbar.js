// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { menuItems } from "./NavItems";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
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
    <div className="w-full flex fixed top-[0px] z-50">
      <nav
      className={` w-full relative ${
        color
          ? "bg-[#ffffffd6] shadow-[0px_0px_3px_0px_#0003]"
          : "bg-white"
      }`}
      style={{ transition: ".1s ease-in" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[4.5rem]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/">
              {/* <img className="h-[50px] w-auto" src={logo} alt="Company Logo" /> */}
              <svg
                className="w-[145px]"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 201.915 27.211"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_305"
                      data-name="Rectangle 305"
                      width="201.915"
                      height="27.211"
                      transform="translate(0)"
                      fill="#000"
                    ></rect>
                  </clipPath>
                </defs>
                <g
                  id="Group_65"
                  data-name="Group 65"
                  transform="translate(-0.001 -0.001)"
                >
                  <g
                    id="Group_8"
                    data-name="Group 8"
                    transform="translate(0.001 0.001)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M15.023,27.013a6.823,6.823,0,0,0,6.663-7.1V7.264c-1.776,0-5.2,1.851-5.2,7.487v5.56A1.307,1.307,0,0,1,15.3,21.769H13.642V7.264c-1.775,0-5.2,1.851-5.2,7.487v5.56a1.306,1.306,0,0,1-1.18,1.458H6.385A1.307,1.307,0,0,1,5.2,20.311v-5.56C5.2,9.115,1.776,7.264,0,7.264V19.917a6.823,6.823,0,0,0,6.663,7.1ZM39.388,12.665c1.125,0,1.528.51,1.528,1.447A1.781,1.781,0,0,1,39.174,15.8H38.131c-2.76,0-6.325,2.189-6.325,5.091h8.2c3.456,0,6.162-3.349,6.162-6.86a6.81,6.81,0,0,0-6.591-6.767h-8.9c-1.775,0-6.254,1.851-6.254,7.487l.016,5.166a6.828,6.828,0,0,0,6.669,7.1H46.088c0-2.076-2.412-5.185-7.073-5.185H30.828a1.3,1.3,0,0,1-1.177-1.452c0-.708.014-2.715.014-6.3,0-.708.385-1.457,1.174-1.457Zm15.544-5.4c-1.776,0-6.261,1.851-6.261,7.487l.015,5.166a6.828,6.828,0,0,0,6.669,7.1H66.183c0-2.076-2.412-5.185-7.073-5.185H55.073A1.3,1.3,0,0,1,53.9,20.376c0-.708.014-2.824.014-6.412,0-.708.385-1.458,1.174-1.458,3.587,0,7.76-.018,8.468-.018A1.3,1.3,0,0,1,65,13.665V19.94c0,4.663,3.109,7.073,5.185,7.073V13.948a6.828,6.828,0,0,0-7.1-6.669ZM81.91,21.615c-.555,0-.722-.671-.722-.671s-1.387-4.1-2.9-8.508-5.242-5.676-7.205-5c.663,1.926,4.412,12.9,4.992,14.527.858,2.412,3,5.05,5.817,5.05,3,0,5.008-2.639,5.865-5.05.578-1.629,4.329-12.6,4.992-14.527-1.964-.675-5.687.592-7.205,5s-2.9,8.508-2.9,8.508-.174.671-.725.671M99.925,7.264c-1.776,0-6.261,1.851-6.261,7.487l.015,5.166a6.827,6.827,0,0,0,6.669,7.1h10.827c0-2.076-2.412-5.185-7.073-5.185h-4.037a1.3,1.3,0,0,1-1.177-1.452c0-.708.014-2.824.014-6.412,0-.708.385-1.458,1.174-1.458,3.588,0,7.76-.018,8.468-.018A1.3,1.3,0,0,1,110,13.665V19.94c0,4.663,3.109,7.073,5.185,7.073V13.948a6.828,6.828,0,0,0-7.1-6.669Zm33.426,19.749c1.775,0,6.262-1.852,6.262-7.488L139.6,14.36a6.828,6.828,0,0,0-6.669-7.1h-8.9c0,2.076,2.411,5.185,7.073,5.185h2.111a1.3,1.3,0,0,1,1.177,1.452c0,.708-.014,2.823-.014,6.411,0,.708-.385,1.457-1.174,1.457-3.588,0-7.76.019-8.468.019a1.3,1.3,0,0,1-1.452-1.177V7.074c0-4.663-3.109-7.074-5.185-7.074V20.329a6.829,6.829,0,0,0,7.1,6.669Zm23.988-14.348c1.126,0,1.527.51,1.527,1.447a1.78,1.78,0,0,1-1.741,1.688h-1.043c-2.76,0-6.325,2.189-6.325,5.091h8.2c3.457,0,6.163-3.349,6.163-6.86a6.81,6.81,0,0,0-6.592-6.767h-8.9c-1.775,0-6.254,1.851-6.254,7.487l.016,5.166a6.827,6.827,0,0,0,6.668,7.1h14.978c0-2.076-2.412-5.185-7.074-5.185h-8.186a1.3,1.3,0,0,1-1.175-1.452c0-.708.014-2.715.014-6.3,0-.708.385-1.457,1.174-1.457Zm14.69,1.675c0-4.663-3.1-7.074-5.178-7.074V19.917a6.823,6.823,0,0,0,6.662,7.1h14.949c0-2.076-2.412-5.185-7.075-5.185h-8.158a1.3,1.3,0,0,1-1.175-1.452Z"
                      transform="translate(0 0)"
                      fill="#000"
                    ></path>
                    <path
                      id="Path_9"
                      data-name="Path 9"
                      d="M976.526,110.1h.586a.94.94,0,0,0,.572-.126.428.428,0,0,0,.08-.568.45.45,0,0,0-.2-.157,1.512,1.512,0,0,0-.485-.051h-.548Zm-.482,1.683v-2.99h1.027a2.531,2.531,0,0,1,.763.082.738.738,0,0,1,.375.289.767.767,0,0,1,.141.439.8.8,0,0,1-.234.571.919.919,0,0,1-.621.272.831.831,0,0,1,.254.158,3.528,3.528,0,0,1,.443.593l.364.586h-.589l-.264-.473a2.438,2.438,0,0,0-.5-.7.623.623,0,0,0-.386-.1h-.284v1.271Zm1.219-3.856a2.37,2.37,0,0,0-1.139.3,2.152,2.152,0,0,0-.868.858,2.316,2.316,0,0,0-.006,2.313,2.194,2.194,0,0,0,.86.859,2.321,2.321,0,0,0,2.306,0,2.17,2.17,0,0,0,.857-.859,2.327,2.327,0,0,0,.307-1.15,2.366,2.366,0,0,0-.312-1.163,2.154,2.154,0,0,0-.868-.858,2.375,2.375,0,0,0-1.138-.3m0-.46a2.848,2.848,0,0,1,1.366.359,2.56,2.56,0,0,1,1.038,1.027,2.792,2.792,0,0,1,.006,2.776,2.59,2.59,0,0,1-1.028,1.029,2.791,2.791,0,0,1-2.765,0,2.6,2.6,0,0,1-1.03-1.029,2.779,2.779,0,0,1,.005-2.776,2.564,2.564,0,0,1,1.041-1.027,2.849,2.849,0,0,1,1.366-.359"
                      transform="translate(-778.125 -85.812)"
                      fill="#000"
                    ></path>
                  </g>
                </g>
              </svg>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden z-10 lg:flex lg:items-center">
            <div className="ml-10 flex items-baseline space-x-2">
              {menuItems.map((item, index) =>
                !item.subItems ? (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "px-3 py-2 rounded-md text-sm font-medium text-primary"
                        : "px-3 py-2 rounded-md text-sm font-medium  text-gray-700 hover:text-primary"
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
                    <button className="px-3 py-2 mb-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary flex items-center">
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    <div
                      className={`absolute left-0 w-48 bg-white border rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${
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

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) =>
              !item.subItems ? (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-3 py-2 rounded-md text-base font-medium text-primary"
                      : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
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
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary focus:outline-none"
                  >
                    {item.name}
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform ${
                        openDropdown === item.name ? "transform rotate-180" : ""
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
                                ? "block px-3 py-2 rounded-md text-base font-medium text-primary"
                                : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
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
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
