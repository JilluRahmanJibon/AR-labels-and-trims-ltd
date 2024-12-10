import React from "react";
import img1 from "../../../../Assets/AboutUs/1.webp";
import img2 from "../../../../Assets/AboutUs/2.webp";
import img3 from "../../../../Assets/AboutUs/3.webp";
import img4 from "../../../../Assets/AboutUs/4.webp";
import img5 from "../../../../Assets/AboutUs/5.webp";
import img6 from "../../../../Assets/AboutUs/6.webp";

const aboutItems = [
  { img: img1, text: "Maintain integrity" },
  { img: img2, text: "Take ownership" },
  { img: img3, text: "Keep agile" },
  { img: img4, text: "Exceed expectations" },
  { img: img6, text: "Remain humble" },
  { img: img5, text: "Continuous innovation" },
];

function AboutUs ()
{
  return (
    <main className="max-w-[1230px] w-[96%] mx-auto py-8 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-geologica">
      {aboutItems.map((item, index) => (
        <div
          key={index}
          className="w-[150px] h-[140px] mx-auto flex flex-col justify-center text-center items-center"
        >
          <img
            src={item.img}
            alt={item.text}
            className="w-[70px] sm:w-[80px] lg:w-[86px] mx-auto"
            loading="lazy"
          />
          <p className="leading-5 pt-4">{item.text}</p>
        </div>
      ))}
    </main>
  );
}

export default AboutUs;
