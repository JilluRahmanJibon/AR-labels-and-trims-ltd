import React from 'react'

const WhyChooseUs = () =>
{
    const reasons = [
        {
            title: 'Competitive Pricing',
            description: 'Offering the best prices without compromising on quality.',
            icon: '💲',
        },
        {
            title: 'Quality Assurance',
            description: 'Ensuring every product meets our strict quality standards.',
            icon: '🔍',
        },
        {
            title: 'Modern Technology',
            description: 'Utilizing the latest machinery for efficient production.',
            icon: '🖥️',
        },
        {
            title: 'Timely Delivery',
            description: 'Reliable delivery schedules to meet your deadlines.',
            icon: '⏰',
        },
    ];
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800">Why Choose Us</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex items-start bg-white p-6 rounded-md shadow-md">
                            <div className="text-3xl mr-4">{reason.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>
                                <p className="mt-2 text-gray-600">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}

export default WhyChooseUs
