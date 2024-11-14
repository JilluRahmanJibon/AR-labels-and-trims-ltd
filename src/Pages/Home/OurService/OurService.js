import React from 'react';

const OurService = () =>
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
            <div className="container mx-auto px-6">
                <h2 className="text-center text-gray-800 text-22 font-semibold sm:text-3xl md:text-[26px]">
                    Our Services
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-aos={"fade-left"}
                            className="w-80 p-6 bg-white rounded-md shadow-[0px_0px_6px_0px_#00000021]"
                        >
                            <div className="text-4xl">{service.icon}</div>
                            <h3 className="mt-4 text-18 font-semibold text-gray-800">{service.title}</h3>
                            <p className="mt-2 text-15 text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurService;
