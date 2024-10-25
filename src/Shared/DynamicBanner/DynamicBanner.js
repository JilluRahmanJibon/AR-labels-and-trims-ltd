import React from "react";

function DynamicBanner (props)
{
  return (
    <main
      className={`w-[100%] lg:!h-[80vh] md:!h-[70vh] sm:!h-[60vh] [@media(min-width:400px)]:h-[50vh] h-[30vh] flex items-center justify-center AboutPageImage mt-[4.5rem]`}
      style={{backgroundImage: `url(${props.bg})` }}
    >
      <div className={`w-full h-full bg-[#2c3e504f] flex items-center justify-center text-white z-10`}>
        <h1 className={`${ props.webTittle ? "" : "hidden" } font-[500] xl:!text-[4rem] lg:!text-[3.5rem] md:!text-[3rem] sm:!text-[2.5rem] [@media(min-width:400px)]:text-[2rem] text-[1.5rem] GeologicaFont drop-shadow-[0_0_1px_#000000ff]`}>AR-Labels & <span className="text-[#c9eb61]">Trims Ltd.</span> </h1>
      </div>
    </main>
  );
}

export default DynamicBanner;
