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
          ? "bg-[#ffffffed] shadow-[0px_0px_3px_0px_#0003]"
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
                <h1 className="sm:!text-[24px]  [@media(min-width:400px)]:text-[22px] text-[19px] font-[600] text-black GeologicaFont"> AR-Labels & <span className="text-primary">Trims Ltd.</span></h1>
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
