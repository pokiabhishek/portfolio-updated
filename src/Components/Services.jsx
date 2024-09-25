import React from "react";
import { services } from "../assets/asset";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10"
    onClick={onClick}
  >
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10"
    onClick={onClick}
  >
    &#10094;
  </div>
);

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen" id="Services">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-white text-5xl py-20 text-center uppercase font-semibold"
      >
        How We <span className="text-gray-400">Can Help</span>
      </motion.h1>

      <Slider {...settings} className="relative p-4">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="text-white p-3 text-center h-[300px] rounded-lg hover:text-orange-300 transition duration-300 cursor-pointer"
          >
            <h1 className="text-[32px] font-semibold">{item.name}</h1>
            <div className="pt-[50px]">
              <p className="text-gray-400 text-[20px]">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
