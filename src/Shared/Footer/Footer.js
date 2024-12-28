import React, { memo } from "react";
import { Link } from "react-router-dom";

// Footer component is memoized to avoid re-rendering when props do not change
const Footer = memo(() =>
{
  const currentYear = new Date().getFullYear();
  const links = [
    { path: "", label: "Terms & Condition" },
    { path: "", label: "Privacy Policy" },
  ];

  return (
    <div className="bg-[#1E2121] GeologicaFont">
      <div className="xl:w-[1230px] w-[96%] mx-auto py-4 px-5 flex flex-wrap flex-col md:flex-row items-center">

        {/* Links for small devices */}
        <div className="inline-flex md:hidden md:ml-auto mt-[-2px] justify-center md:justify-start z-10 sm:pb-[10px] pb-[7px] sm:text-[15px] text-[14px]">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-white cursor-pointer ml-[10px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal Information */}
        <p className="text-[#ffffffe5] sm:text-sm text-[13px] text-center md:text-left">
          <span className="font-bold text-primary">AR </span>
          <span className="font-[400]">
            Labels & Trims Ltd. - Copyright © {currentYear} All rights reserved.
          </span>
        </p>

        {/* Links for larger devices */}
        <div className="md:inline-flex hidden md:ml-auto mt-[-2px] justify-center md:justify-start z-10">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-white cursor-pointer ml-[45px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Footer;
