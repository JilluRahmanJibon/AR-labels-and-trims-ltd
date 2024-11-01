// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { menuItemsDashboard } from "../../../Shared/Navbar/NavItems";
import { ImHome } from "react-icons/im";
import { GoChevronRight } from "react-icons/go";

const AdminDashboardLeftNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  return (
    <div className="w-[15rem] flex flex-col fixed top-0 left-[0px] z-[40] GeologicaFont">
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
                    src="https://lh3.googleusercontent.com/ogw/AF2bZyjk6cdflB1wb10KcpMG-wgWn49H8grAiABEyUDjTCSgfk8=s32-c-mo"
                  />
                  <div className="w-[10px] h-[10px] absolute bottom-0 right-0 rounded-[50%] bg-[#3dff6a] border-[2px] border-[#fff]"></div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-medium text-[14px]">
                    David Grey. H
                  </h2>
                  <p className="text-gray-500 text-[12px]">Project Manager</p>
                </div>
              </div>
              {/* Nav Item */}
              <div className="pt-[1rem] space-y-1">
                <NavLink
                  to={"/admin-dashboard"}
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
                          className={`h-[14px] w-[14px] transition-transform ${
                            openDropdown === item.name
                              ? "transform rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`ml-4 mb-[10px] transition-all duration-300 ease-in-out transform ${
                          openDropdown === item.name
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
                                onClick={() => {
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
  );
};

export default AdminDashboardLeftNav;
