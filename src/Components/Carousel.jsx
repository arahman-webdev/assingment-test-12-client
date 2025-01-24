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
      title: "Find Your Dream Home",
      description:
        "Explore a variety of rental properties that suit your needs and lifestyle. Your perfect home awaits.",
      buttonText: "View Listings",
    },
    {
      img: "https://i.ibb.co.com/9rrWcwY/pexels-homelane-com-492179-1776574.jpg",
      title: "Established in 1987",
      description:
        "Providing exceptional rental solutions for decades. Discover trusted homes and apartments today.",
      buttonText: "Learn More",
    },
    {
      img: "https://i.ibb.co/fxCPypD/slider-6.png",
      title: "Rent Your Ideal Space",
      description:
        "Whether you need a cozy apartment or a spacious house, we have the perfect rental options for you.",
      buttonText: "Explore Rentals",
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
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950 bg-opacity-50 text-white text-center">
            {/* Founded Info */}


            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-5">
              {slide.title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-2xl lg:text-3xl text-blue-200 font-medium mb-10 max-w-4xl">
              {slide.description}
            </p>

            {/* Button */}
            <Link
              to="/apartment"
              className="bg-blue-50 text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300"
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
