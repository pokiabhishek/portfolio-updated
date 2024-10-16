import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaDesktop, FaMobileAlt, FaCode, FaChrome } from "react-icons/fa"; // Import icons
import ScrollAnimation from "react-animate-on-scroll";

export const ser = [
  {
    name: "Custom Web Design",
    content:
      "Create a stunning, SEO-friendly website that drives results. Let's build your online tool together.",
    icon: <FaDesktop className="text-blue-500 text-4xl mb-2" />,
  },
  {
    name: "Responsive Web Development",
    content:
      "Build responsive websites for a seamless experience on all devices. Ensure accessibility and engagement for every user.",
    icon: <FaMobileAlt className="text-green-500 text-4xl mb-2" />,
  },
  {
    name: "Interactive User Interfaces",
    content:
      "Create engaging, interactive UIs with React, Vue, or Angular. Let's build experiences that captivate your audience.",
    icon: <FaCode className="text-purple-500 text-4xl mb-2" />,
  },
  {
    name: "Cross-Browser Compatibility",
    content:
      "Ensure your website looks and works great on all browsers. Let’s test and optimize it for compatibility.",
    icon: <FaChrome className="text-red-500 text-4xl mb-2" />,
  },
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10 text-3xl"
    onClick={onClick}
  >
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10 text-3xl"
    onClick={onClick}
  >
    &#10094;
  </div>
);

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen w-[80%] mx-auto" id="Services">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-[#d7d0f1] text-3xl md:text-5xl py-20 text-center uppercase font-semibold"
        style={{ color: "rgb(252, 16, 86)" }}
      >
        How We <span className="text-white">Can Help</span>
      </motion.h1>

      <ScrollAnimation animateIn="fadeInUp" duration={1} delay={300}>
        <Slider {...settings} className="relative p-4">
          {ser.map((item, index) => (
            <div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-white p-3 text-center h-[300px] rounded-lg hover:text-red-400 transition duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h1 className="text-2xl md:text-[35px] font-semibold pl-2">{item.name}</h1>
              </div>
              <div className="pt-[50px]">
                <p className="text-gray-400 text-sm md:text-[18px]">{item.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </ScrollAnimation>
    </div>
  );
};

export default Services;
