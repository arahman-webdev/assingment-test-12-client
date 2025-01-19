
import { Parallax } from 'react-parallax';

import bgImg from '../../assets/images/slider-1.jpg'
import { FaCar, FaHamburger, FaLightbulb, FaSwimmingPool, FaTshirt, FaWifi } from 'react-icons/fa';
import { GiWashingMachine } from 'react-icons/gi';

const Cover = ({ img, title }) => {

    const features = [
        {
            title: "Parking Space",
            icon: <FaCar />,
            description: "Enjoy the convenience of dedicated parking spaces for your vehicle, ensuring safety and accessibility at all times."
        },
        {
            title: "Free Wifi and High Speed",
            icon: <FaWifi />,
            description: "Stay connected with our free, high-speed WiFi, perfect for work, streaming, and staying in touch with loved ones."
        },
        {
            title: "Washer Dryer",
            icon: <GiWashingMachine />,
            description: "Take care of your laundry needs with our in-house washer and dryer facilities, making life more convenient."
        },
        {
            title: "Swimming Pool",
            icon: <FaSwimmingPool />,
            description: "Relax and rejuvenate in our beautiful swimming pool, designed for both recreation and exercise."
        },
        {
            title: "Outdoor BBQ",
            icon: <FaHamburger />,
            description: "Host gatherings or enjoy a quiet evening with our outdoor BBQ setup, perfect for grilling your favorite meals."
        },
        {
            title: "Another Feature Like You",
            icon: <FaLightbulb />,
            description: "Discover innovative features tailored to your lifestyle, making your experience truly unique and enjoyable."
        }
    ];


    console.log(features)


    return (
        <div>
            <div
                className="">
                <div
                    className="relative bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://i.ibb.co.com/DKYNzNQ/pexels-fotoaibe-1571468.jpg')`,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-45"></div>

                    {/* Content on top of the overlay */}
                    <div className="relative z-10 h-full py-20 backdrop-blur-sm">
                        <div className='text-center'>
                            <p className='text-blue-800'>Luxury Apartments</p>
                            <h1 className="text-[#E1EFFE] text-4xl md:text-5xl font-bold">Stunning Luxury Rental
                                Apartments, Designed for Life</h1>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 w-4/5 mx-auto mt-10'>
                            {
                                features.map(feature => <>
                                    <div className='bg-blue-950 p-8 space-y-2 font-sans hover:text-black font-semibold text-[#E1EFFE] rounded-md hover:bg-[#d4e6fa] transition ease-in duration-200'>

                                        <p className='text-2xl font-semibold bg-[#c3ddfa] text-blue-800 p-5 rounded-full inline-block'>{feature?.icon}</p>
                                        <p>{feature?.title}</p>
                                        <p>{feature?.description}</p>
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Cover;


