import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';

const QuestionAnswers = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: 'How To Process The Function For Construction?', answer: 'You need to follow a systematic process involving proper planning and execution.' },
        { question: 'Where Should I Incorporate My Business?', answer: 'Consider the best location based on regulations, taxes, and market access.' },
        { question: 'How There Are Many Variations Of Passages', answer: 'Each passage may differ in terms of the requirements and the application process.' },
        { question: 'How Much Should I Capitalize With At The Beginning?', answer: 'It depends on your business needs and initial investment requirements.' },
        { question: 'What About Our Safety Measures', answer: 'Safety is our top priority with comprehensive measures in place.' },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col lg:flex-row  bg-gray-100 ">
            {/* Left Section */}
            <div className=" text-white flex flex-col flex-1">
                {/* Image */}

                <div className='flex '>
                    <div className='flex-1'>
                        <img
                            src="https://i.ibb.co.com/T8JgYvB/card-4.jpg"
                            alt="City Construction"
                            className="w-full sm:h-96 h-80"
                        />
                    </div>
                    <div className='flex-1 bg-blue-900 flex justify-center flex-col p-5'>
                        <h1 className="text-4xl font-bold mb-6 leading-tight">
                            Economy Needs A Healthy Steel Industry
                        </h1>
                        <div>
                            <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ECEBF8] md:px-16 md:py-24 xl:px-36 xl:py-44 px-20 py-24 flex items-center'>
                    <span className='text-4xl text-blue-900 '><FaHandshake /></span> <p className='text-4xl text-blue-900 font-bold'>We’re Servicing a Global Clients in More than 50 Countries</p>
                </div>

            </div>

            {/* Right Section */}
            <div className="flex-1 bg-white p-10 relative">


                {/* FAQ Section */}
                <div className='sm:w-4/6 w-full'>
                    <div className='mb-10'>
                        <h2 className="text-gray-700 text-xl font-bold uppercase mb-6">Our FAQs</h2>
                        <p className='sm:text-5xl text-3xl font-bold'>Frequently Asked Questions</p>
                    </div>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 pb-4 mb-4"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-medium text-blue-950">{faq.question}</h3>
                                <span className={`text-blue-800 text-2xl ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswers;
