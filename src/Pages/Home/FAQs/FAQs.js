import React, { useState } from 'react'

const FAQs = () =>
{
    const [ activeIndex, setActiveIndex ] = useState(null);

    const toggleFAQ = (index) =>
    {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const faqs = [
        {
            question: 'What is the minimum order quantity?',
            answer: 'Our minimum order quantity is 100 units per design.',
        },
        {
            question: 'Do you offer custom designs?',
            answer: 'Yes, we provide custom design services to meet your specific needs.',
        },
        {
            question: 'What are your production lead times?',
            answer: 'Production lead times typically range from 4 to 6 weeks, depending on the order size and complexity.',
        },
    ];

    return (
        <section className="py-[2rem]">
            <div className="container mx-auto px-6 GeologicaFont">
                <h2 className="sm:!text-[28px] [@media(min-width:460px)]:text-[26px] text-[20px] font-semibold text-center text-gray-800">Frequently Asked Questions</h2>
                <div className="mt-8 max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center bg-white p-4 rounded-md shadow-[0px_0px_6px_0px_#00000021] focus:outline-none"
                            >
                                <span className="text-gray-800 font-medium text-[15px]">{faq.question}</span>
                                <span>{activeIndex === index ? '-' : '+'}</span>
                            </button>
                            {activeIndex === index && (
                                <div className="mt-2 p-4 bg-white rounded-md shadow-[0px_0px_6px_0px_#00000021]">
                                    <p className="text-gray-600 text-[14px]">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQs
