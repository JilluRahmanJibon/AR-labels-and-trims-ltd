import React, { memo } from "react";

const Portfolio = memo(() =>
{
    const portfolioItems = [
        {
            image: 'https://arltl.com/web-cms-arltl/uploads/portfolio-1.jpg',
            title: 'Summer Collection',
        },
        {
            image: 'https://arltl.com/web-cms-arltl/uploads/portfolio-2.jpg',
            title: 'Winter Wear',
        },
        {
            image: 'https://arltl.com/web-cms-arltl/uploads/portfolio-3.jpg',
            title: 'Sports Apparel',
        },
        {
            image: 'https://arltl.com/web-cms-arltl/uploads/portfolio-4.jpg',
            title: 'Casual Line',
        },
    ];

    return (
        <section className="pb-4 bg-white GeologicaFont">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  
                <h2 data-aos="fade-up" className="sm:text-3xl text-[22px] font-semibold text-center text-gray-800 mb-6">
                    Our Portfolio
                </h2>

             
                <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                    {portfolioItems.map((item) => (
                        <div
                            data-aos="fade-down"
                            key={item.title}
                            className="relative group flex items-center justify-center sm:w-[280px] sm:h-[280px] w-[260px] cursor-pointer"
                        >
                            {/* Main Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-md shadow-md"
                            />

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-black text-lg font-semibold">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Portfolio;
