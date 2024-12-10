import React from 'react';

const OurService = React.memo(() =>
{
    const services = [
        {
            title: 'Custom Design',
            description: 'Tailored garment designs to meet your unique specifications.',
            icon: '🎨',
        },
        {
            title: 'Bulk Production',
            description: 'Efficient large-scale manufacturing with consistent quality.',
            icon: '🏭',
        },
        {
            title: 'Eco-Friendly Fabrics',
            description: 'Sourcing sustainable materials for environmentally conscious products.',
            icon: '🌿',
        },
    ];

    return (
        <section className="py-6 bg-white GeologicaFont md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 data-aos="fade-bottom" className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
                    Our Services
                </h2>

                {/* Service Items */}
                <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
                    {services.map((service) => (
                        <div
                            data-aos="fade-right"
                            key={service.title}
                            className="w-full sm:w-80 bg-white rounded-md shadow-md p-4 md:p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
                        >
                            <div className="text-4xl">{service.icon}</div>
                            <h3 className="mt-3 text-lg font-semibold text-gray-800">{service.title}</h3>
                            <p className="mt-2 text-sm sm:text-base text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default OurService;
