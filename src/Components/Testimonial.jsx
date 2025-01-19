import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import SharedTitle from '../SharedTitle/SharedTitle';

const Testimonial = () => {
    const services = [
        {
            id: 1,
            title: 'Building Maintenance',
            description: 'We provide top-notch maintenance services for your buildings.We provide top-notch maintenance services for your buildings.We provide top-notch maintenance services for your buildings.We provide top-notch maintenance services for your buildings.We provide top-notch maintenance services for your buildings.We provide top-notch maintenance services for your buildings.',
            image: 'https://i.ibb.co.com/T8JgYvB/card-4.jpg',
        },
        {
            id: 2,
            title: 'Cleaning Services',
            description: 'Keep your premises spotless with our professional cleaning team.',
            image: 'https://i.ibb.co.com/T8JgYvB/card-4.jpg',
        },
        {
            id: 3,
            title: 'Security Services',
            description: 'Ensure safety with our reliable security solutions.',
            image: 'https://i.ibb.co.com/T8JgYvB/card-4.jpg',
        },
        {
            id: 4,
            title: 'Electrical Repairs',
            description: 'Fast and reliable electrical repair services for your buildings.',
            image: 'https://i.ibb.co.com/T8JgYvB/card-4.jpg',
        },
        {
            id: 5,
            title: 'Pest Control',
            description: 'Effective pest control solutions for your property.',
            image: 'https://i.ibb.co.com/T8JgYvB/card-4.jpg',
        },
    ];

    return (
        <div className="bg-[#F3F3F3] py-20">
            <SharedTitle title={"WAHT OUR CLIENT SAY"}></SharedTitle>
            <Swiper
                modules={[Autoplay]} // Import the Autoplay module
                spaceBetween={20} // Space between slides
                loop={true} // Enable infinite loop
                autoplay={{
                    delay: 3000, // Delay between transitions (3 seconds)
                    disableOnInteraction: false, // Continue autoplay after interaction
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // 1 slide for small screens
                    },
                    768: {
                        slidesPerView: 2, // 2 slides for medium screens
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides for large screens
                    },
                }}
                className="w-4/5 max-w-6xl mx-auto" // Adjust width for larger displays
            >
                {services.map((service) => (
                    <SwiperSlide key={service.id} className="pt-20">
                        <div className="bg-white shadow-lg rounded-lg relative">
                            {/* Image at the top, half inside/outside the card */}
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-32 h-32 rounded-full mx-auto border-4 border-white object-cover shadow-lg"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="pt-20 pb-6 px-6">
                                <h3 className="text-xl text-blue-900 font-semibold text-center mb-2">{service.title}</h3>
                                <p className="text-center text-gray-700">{service.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Testimonial;
