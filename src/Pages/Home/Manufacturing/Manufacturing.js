import React from 'react';

const Manufacturing = React.memo(() =>
{
    const steps = [
        { title: 'Design', description: 'Creating detailed garment designs tailored to client specifications.', icon: '✏️' },
        { title: 'Sourcing', description: 'Selecting high-quality, sustainable materials for production.', icon: '📦' },
        { title: 'Production', description: 'Efficient manufacturing processes ensuring timely delivery.', icon: '🏭' },
        { title: 'Quality Control', description: 'Rigorous testing to maintain the highest quality standards.', icon: '✅' },
    ];

    return (
        <section className="pt-12 pb-6 bg-white GeologicaFont">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Animated Title Section */}
                <h2
                    data-aos="fade-down"
                    className="text-xl sm:text-3xl font-semibold text-center text-gray-800 mb-6"
                >
                    Our Manufacturing Process
                </h2>

                {/* Cards Section */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
                    {steps.map((step) => (
                        <div
                            data-aos="fade-up"
                            key={step.title}
                            className="flex items-center bg-white rounded-md shadow-md p-4 md:p-6 transition-transform transform hover:scale-105"
                        >
                            {/* Icon + Text Row */}
                            <div className="flex items-center space-x-4">
                                <div className="text-4xl md:text-5xl">{step.icon}</div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                                    <p className="mt-1 text-sm sm:text-base text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Manufacturing;
