// src/components/Navbar.jsx
import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaPowerOff } from "react-icons/fa6";
import logo from "../../../Assets/logo3.png";
import { RxCross2 } from "react-icons/rx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ImHome } from "react-icons/im";
import { GoChevronRight } from "react-icons/go";


const AdminDashboardNav = ({ data }) =>
{
  const [ showLeftNav, setshowLeftNav ] = useState(true)
  const [ openDropdown, setOpenDropdown ] = useState(null);
  const [ handleLogout, setHandleLogout ] = useState(false);


  if (handleLogout)
  {
    localStorage.removeItem('authToken')
    return <Navigate to="/login" replace={true} />;

  }



  // Left Nav
  const menuItemsDashboard = [
    {
      name: "About Us",
      subItems: [
        // { name: 'About Us', path: '/aboutUs' },
        { name: "Our Company", path: "/about-our-company" },
        { name: "Mission & Vision", path: "/about-mission-vision" },
        { name: "AR Labels Family", path: "/about-ar-labels-family" },
        { name: "Ethics & Values", path: "/about-ethics-values" },
        { name: "Affiliations", path: "/about-affiliations" },
        { name: "Client References", path: "/about-client-references" },
      ],
    },
    {
      name: "Product & Solutions",
      subItems: [
        {
          name: "All Product",
          path: "/dashboard/product-solutions/all-products",
        },
        {
          name: "Add Product",
          path: "/dashboard/product-solutions/add-product",
        },
      ],
    },
    {
      name: "Sustainability",
      subItems: [ { name: "Certifications", path: "/certifications" } ],
    },
    {
      name: "News & Events",
      subItems: [ { name: "Our News & Events", path: "/news-events" } ],
    },
    {
      name: "Careers",
      subItems: [
        { name: "Available Positions", path: "/available_positions" },
        { name: "Apply Online", path: "/apply_online" },
      ],
    }

  ];
  return (
    <>
      {/* Dashboard Top Nav */}
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
                <div className="[@media(min-width:850px)]:w-[15rem] w-[11rem] flex justify-center">
                  <NavLink to="/">
                    <img
                      className="[@media(min-width:850px)]:h-[35px] h-[30px] w-auto"
                      src={logo}
                      alt="Company Logo"
                    />
                  </NavLink>
                </div>
                <RxCross2 onClick={() => setshowLeftNav(false)} className={`${ showLeftNav ? "[@media(min-width:1400px)]:hidden flex " : "hidden" } h-[22px] w-[22px] ml-[1rem]  cursor-pointer text-gray-500`} />
                <Bars3Icon onClick={() => setshowLeftNav(true)} className={`${ showLeftNav ? "hidden" : "[@media(min-width:1400px)]:hidden flex" } h-[22px] w-[22px] ml-[1rem]  cursor-pointer text-gray-500`} />
              </div>
              {/* Desktop Menu Right Side */}

              <div className="flex justify-end gap-2 items-center [@media(min-width:850px)]:pr-[2.5rem] pr-[1.5rem]">

                <button
                  onClick={() =>
                  {
                    const confirmBox = window.confirm(
                      `Do you really want to Logout`
                    );
                    {
                      confirmBox === true
                        ? setHandleLogout(true)
                        : setHandleLogout(false);
                    }
                  }}
                  className="flex items-center text-red-600"
                >
                  <p className="text-[14px] font-[500] pr-[5px]">Logout</p>
                  <FaPowerOff className="text-[13px]" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Dashboard Left Nav */}
      <div className={`w-[15rem] ${ showLeftNav ? "flex" : "hidden" } flex-col fixed top-0 left-[0px] z-[40] GeologicaFont`} >
        <nav
          className={` w-full relative bg-white shadow-[0px_0px_3px_0px_#0003]
        `}
          style={{ transition: ".1s ease-in" }}
        >
          <div className="mx-auto">
            <div
              className="flex justify-between max-h-[100vh] h-[100vh] w-full overflow-y-auto px-[20px] pt-[5.5rem]"
              id="AdminDashboardLeftNav"
            >
              <div className="w-full">
                {/* Admin Info */}
                <div className="flex items-center">
                  <div className="w-[2.5rem] h-[2.5rem] relative mr-[10px]">
                    <img
                      alt="team"
                      className="w-[2.5rem] h-[2.5rem] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full "
                      src={data?.profileImg}
                    />
                    <div className="w-[10px] h-[10px] absolute bottom-0 right-0 rounded-[50%] bg-[#3dff6a] border-[2px] border-[#fff]"></div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 font-medium text-[14px]">
                      {data?.name}
                    </h2>
                    <p className="text-gray-500 text-[12px]">{data?.role}</p>
                  </div>
                </div>
                {/* Nav Item */}
                <div className="pt-[1rem] space-y-1">
                  <NavLink
                    to={`${data?.role}/dashboard`}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center justify-between py-[1rem] rounded-md text-[14px] font-medium text-primary "
                        : "flex items-center justify-between py-[1rem] rounded-md text-[14px] font-medium text-gray-700 hover:text-primary "
                    }
                  >
                    Dashboard
                    <ImHome className={`h-[14px] w-[14px]`} />
                  </NavLink>

                  {menuItemsDashboard.map((item) =>
                    !item.subItems ? (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block py-[1rem] rounded-md text-[14px] font-medium text-primary"
                            : "block py-[1rem] rounded-md text-[14px] font-medium text-gray-700 hover:text-primary"
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
                          className="w-full flex items-center justify-between py-[1rem] rounded-md text-[14px] font-medium text-gray-700 hover:text-primary focus:outline-none"
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={`h-[14px] w-[14px] transition-transform ${ openDropdown === item.name
                              ? "transform rotate-180"
                              : ""
                              }`}
                          />
                        </button>
                        <div
                          className={`ml-4 mb-[10px] transition-all duration-300 ease-in-out transform ${ openDropdown === item.name
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                            }`}
                        >
                          {openDropdown === item.name && (
                            <div className="ml-[5px]">
                              {item.subItems.map((subItem) => (
                                <NavLink
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() =>
                                  {
                                    setOpenDropdown(null);
                                  }}
                                  className={({ isActive }) =>
                                    isActive
                                      ? "flex items-center justify-between py-2 rounded-md text-[14px] font-[400] text-primary"
                                      : "flex items-center justify-between py-2 rounded-md text-[14px] font-[400] text-gray-700 hover:text-primary"
                                  }
                                >
                                  {subItem.name}
                                  <GoChevronRight
                                    className={`h-[14px] w-[14px]`}
                                  />
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
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AdminDashboardNav;
