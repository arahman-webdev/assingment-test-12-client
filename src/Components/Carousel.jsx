import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

const Carousel = () => {
  const slides = [
    {
      img: "https://i.ibb.co.com/cxsZsf4/slider-11.jpg",
      title: "Dream and Build",
      description:
        "There are many variations of passages of lorem but the majority have suffered alteration in some form.",
      buttonText: "Donate Now",
    },
    {
      img: "https://i.ibb.co.com/9rrWcwY/pexels-homelane-com-492179-1776574.jpg",
      title: "Foundation in 1987",
      description:
        "Discover the perfect car for your journey. Your next adventure begins here—find the car!",
      buttonText: "Learn More",
    },
    {
      img: "https://i.ibb.co/fxCPypD/slider-6.png",
      title: "Drive Your Dreams Today!",
      description:
        "Embark on an exciting journey to own your dream car. Explore endless possibilities and drive!",
      buttonText: "Explore More",
    },
  ];

  return (
    <Swiper
      className="z-0"
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="fade"
      fadeEffect={{ crossFade: true }} // Smooth fade effect between slides
      speed={1500} // Smooth transition speed in milliseconds (1.5 seconds)
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          {/* Background Image */}
          <div
            className="w-full h-[500px] md:h-[100vh] object-cover bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
            {/* Founded Info */}
            <div className="bg-yellow-500 text-black px-6 py-2 rounded-full mb-5 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h7.5m-7.5 3h7.5m-7.5 3h7.5M9.75 21h4.5c2.071 0 3.75-1.679 3.75-3.75V6c0-2.071-1.679-3.75-3.75-3.75h-4.5C7.679 2.25 6 3.929 6 6v11.25c0 2.071 1.679 3.75 3.75 3.75z"
                />
              </svg>
              <span>Founded in 1987</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-5">
              {slide.title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-2xl lg:text-3xl font-medium mb-10 max-w-4xl">
              {slide.description}
            </p>

            {/* Button */}
            <Link
              to="/"
              className="bg-yellow-500 text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
            >
              {slide.buttonText}
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
