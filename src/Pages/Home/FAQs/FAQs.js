import React, { useState, memo } from 'react';

// Cached FAQ data to ensure no re-creation on render
const faqs = [
    {
        question: 'What is the minimum order quantity?',
        answer: 'Our minimum order quantity is 100 units per design.'
    },
    {
        question: 'Do you offer custom designs?',
        answer: 'Yes, we provide custom design services to meet your specific needs.'
    },
    {
        question: 'What are your production lead times?',
        answer: 'Production lead times typically range from 4 to 6 weeks, depending on the order size and complexity.'
    },
];

// Memoized FAQ Item to avoid unnecessary re-renders
const FAQItem = memo(({ faq, index, isActive, onToggle }) =>
{
    return (
        <div data-aos="fade-right" className="mb-4">
            <button
                onClick={() => onToggle(index)}
                className="w-full text-left flex justify-between items-center bg-white p-4 rounded-md shadow-[0px_0px_6px_0px_#00000021] focus:outline-none"
            >
                <span className="text-gray-800 font-medium [@media(min-width:460px)]:text-[15px] text-[14px]">
                    {faq.question}
                </span>
                <span>{isActive ? '-' : '+'}</span>
            </button>
            {isActive && (
                <div className="mt-2 p-4 bg-white rounded-md shadow-[0px_0px_6px_0px_#00000021]">
                    <p className="text-gray-600 [@media(min-width:460px)]:text-[14px] text-[13px]">
                        {faq.answer}
                    </p>
                </div>
            )}
        </div>
    );
});

const FAQs = () =>
{
    const [ activeIndex, setActiveIndex ] = useState(null);

    // Optimized toggle handler
    const handleToggle = (index) =>
    {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="pt-[3rem] pb-[1.5rem]">
            <div className="container mx-auto [@media(min-width:400px)]:px-6 px-[10px] GeologicaFont">
                <h2 data-aos="fade-up" className="sm:!text-[28px] [@media(min-width:460px)]:text-[26px] text-[20px] font-semibold text-center text-gray-800">
                    Frequently Asked Questions
                </h2>
                <div className="mt-8 max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            isActive={activeIndex === index}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
