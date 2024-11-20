import React from "react";

const WhyChooseUs = () =>
{
  const reasons = [
    {
      title: "Competitive Pricing",
      description: "Offering the best prices without compromising on quality.",
      icon: "💲",
    },
    {
      title: "Quality Assurance",
      description: "Ensuring every product meets our strict quality standards.",
      icon: "🔍",
    },
    {
      title: "Modern Technology",
      description: "Utilizing the latest machinery for efficient production.",
      icon: "🖥️",
    },
    {
      title: "Timely Delivery",
      description: "Reliable delivery schedules to meet your deadlines.",
      icon: "⏰",
    },
  ];
  return (
    <section className="py-12 bg-white GeologicaFont">
      <div className="container mx-auto px-6">
        <h2 className="sm:!text-3xl [@media(min-width:460px)]:text-[26px] text-[22px] font-semibold text-center text-gray-800">
          Why Choose Us
        </h2>
        <div className="mt-8 flex flex-wrap justify-center">
          {reasons.map((reason, index) => (
            <div
              data-aos="fade-right"
              key={index} className="mx-[10px] my-[10px]">
              <div
                className="w-[280px] h-[220px] flex flex-col text-center justify-center items-center bg-white px-6 rounded-md shadow-[0px_0px_6px_0px_#00000021] mx-auto"
              >
                <div className="text-[40px] ">{reason.icon}</div>
                <div className="pt-[10px]">
                  <h3 className="text-[18px] font-[600] text-gray-800">
                    {reason.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 h-[47px] mt-2">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
