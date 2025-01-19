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
            name: 'John D ',
            title: 'Apartment Owner',
            description: 'This website made managing my property so much easier! The interface is user-friendly, and I can track maintenance requests in real time. Highly recommend their services.',
            image: 'https://i.ibb.co.com/mGCW77M/team-image-6.png',
        },
        {
            id: 2,
            name: 'Sarah M',
            title: 'Business Property Manager',
            description: "Their building management solutions are exceptional. The team is professional, and the website's tools help me stay on top of everything efficiently.",
            image: 'https://i.ibb.co.com/rccbv9R/team-3.jpg',
        },
        {
            id: 3,
            name: 'Mark Rahul',
            title: 'Homeowner',
            description: 'What I love most is the transparency and responsiveness. I can easily report issues, and they are resolved quickly. The platform is a game-changer for building management.',
            image: 'https://i.ibb.co.com/jMXKwkR/user2.png',
        },
        {
            id: 4,
            name: 'Emma Line',
            title: 'Commercial Property Owner',
            description: "The website has everything I need—from maintenance tracking to tenant communication. It's an all-in-one solution that has saved me so much time and stress.",
            image: 'https://i.ibb.co.com/DLjRP9Z/customer2.jpg',
        },
        {
            id: 5,
            name: 'David',
            title: 'Property Developer',
            description: 'Managing multiple properties used to be a nightmare, but this website simplified everything. The seamless design and excellent customer support are top-notch!',
            image: 'https://i.ibb.co.com/mXp0G39/customer1.jpg',
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
                    <SwiperSlide key={service.id} className="pt-20 pb-6">
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
                            <div className="pt-20 pb-6 px-6 space-y-7 text-center">
                                <span>{service?.name}</span>
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
