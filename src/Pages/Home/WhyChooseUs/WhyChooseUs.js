import React, { memo } from "react";

const WhyChooseUs = memo(() =>
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
        {/* Animated Title Section */}
        <h2 className="sm:text-3xl text-[22px] font-semibold text-center text-gray-800 mb-6">
          Why Choose Us
        </h2>

        {/* Optimized Grid Section */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6">
          {reasons.map((reason) => (
            <div
              data-aos="fade-right"
              key={reason.title}
              className="w-[280px] h-[220px] bg-white rounded-md shadow-md flex flex-col justify-center items-center text-center px-4 py-3 transition-transform transform hover:scale-105"
            >
              {/* Icon + Text */}
              <div className="text-[40px] mb-2">{reason.icon}</div>
              <h3 className="text-[18px] font-semibold text-gray-800">{reason.title}</h3>
              <p className="text-[15px] text-gray-600 mt-2 h-[47px]">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default WhyChooseUs;
