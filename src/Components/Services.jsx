import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import SharedTitle from '../SharedTitle/SharedTitle';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Building Maintenance',
            description: 'We provide top-notch maintenance services for your buildings.',
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
            <SharedTitle title={"OUR SERVICE"}></SharedTitle>
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
                    <SwiperSlide key={service.id} className="p-2 rounded-md ">
                        <div className='bg-white mb-8 shadow-md p-6'>
                            <h3 className="text-xl text-blue-900 font-semibold text-center mb-2">{service.title}</h3>
                            <p className="text-center text-blue-950">{service.description}</p>
                        </div>

                        <div className='relative'>
                        <img
                            src={service.image}
                            alt={service.title}
                            className=" w-full mx-auto mb-4 object-cover shadow-md"
                        />
                        <div className='absolute inset-0 hover:bg-blue-800 hover:bg-opacity-50 transition-all ease-in duration-200 '></div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Services;
