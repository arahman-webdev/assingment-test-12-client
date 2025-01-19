import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';
import SharedTitle from '../SharedTitle/SharedTitle';
import { LuBuilding, LuBuilding2 } from 'react-icons/lu';

const QuestionAnswers = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: 'How do I request building maintenance services?', answer: 'You can request maintenance services by logging into your account on our website or mobile app and submitting a maintenance request. Our team will get back to you promptly to address the issue.' },
        { question: 'What cleaning services do you provide for buildings?', answer: 'We offer comprehensive cleaning services, including daily cleaning, deep cleaning, window cleaning, and waste management for residential and commercial buildings.' },
        { question: 'How do you ensure the safety of my property?', answer: 'Our security services include 24/7 monitoring, CCTV surveillance, and professionally trained security personnel to ensure the safety and security of your property.' },
        { question: 'Can I customize the services according to my building’s needs?', answer: 'Yes, we provide flexible service packages that can be tailored to meet the specific requirements of your building, whether its maintenance, cleaning, or security' },
        { question: 'What is the process for emergency repairs?', answer: 'For emergency repairs, you can call our 24/7 helpline or use our mobile app to report the issue. Our team will prioritize your request and send a technician as soon as possible.' },
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
                        Effortless Building Management for a Better Tomorrow
                        </h1>
                        <div>
                            <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ECEBF8] md:px-16 md:py-24 xl:px-36 xl:py-44 px-20 py-24 flex items-center'>
                    <span className='text-3xl text-blue-900 mr-3'><LuBuilding2 /><FaHandshake /></span> <p className='text-4xl text-blue-900 font-bold'>We’re Servicing a Global Clients in More than 50 Countries</p>
                </div>

            </div>

            {/* Right Section */}
            <div className="flex-1 bg-white p-10 relative">


                {/* FAQ Section */}
                <div className='sm:w-4/6 w-full'>
                    <div className='mb-10'>
                        <h2 className="text-gray-700 text-xl font-bold  mb-6">Our FAQs</h2>
                        <SharedTitle title={"Frequently Asked Questions"}></SharedTitle>
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
