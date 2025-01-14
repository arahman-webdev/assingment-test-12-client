import React from 'react';

import aboutImg from '../assets/images/slider-2.jpg'

const AboutBuilding = () => {
    return (
        <div>

            <section className="bg-[#d8d5f07a] py-20 px-5">
                <div className="w-4/5 mx-auto ">
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-6xl font-bold text-center text-blue-900 mb-10">
                        About the Building
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                        {/* Image Section */}
                        <div className="lg:w-1/2 relative flex flex-row">
                            <div className='relative'>
                                <img
                                    src={aboutImg}
                                    alt="Modern Building"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>

                        </div>

                        {/* Text Section */}
                        <div className="lg:w-1/2 text-gray-800 space-y-6">
                            <p className="text-xl md:text-2xl leading-relaxed">
                                Welcome to <span className="text-blue-700 font-bold">MyFlatHub</span>,
                                a modern architectural marvel designed to redefine urban living.
                                Nestled in the heart of the city, this state-of-the-art building
                                combines cutting-edge technology, sustainable design, and luxurious
                                amenities to create a perfect harmony of comfort and sophistication.
                            </p>

                            <p className="text-lg md:text-xl leading-relaxed">
                                The building features spacious apartments, a rooftop garden, a gym,
                                and a community lounge. With panoramic views, meticulous craftsmanship,
                                and eco-friendly construction, MyFlatHub offers an unparalleled living
                                experience. Whether you're relaxing at home or hosting guests, every
                                corner of this building reflects elegance and functionality.
                            </p>

                            {/* Highlighted Text */}
                            <p className="text-lg md:text-xl font-semibold bg-blue-100 p-4 rounded-lg shadow">
                                Experience urban living at its finest with a focus on sustainability,
                                luxury, and convenience—all in one place.
                            </p>

                            {/* Call to Action */}
                            <a
                                href="#learn-more"
                                className="inline-block w-full md:w-1/4 text-center px-8 py-4 text-lg font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-lg shadow-lg transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutBuilding;