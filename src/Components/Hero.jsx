import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Homeimg1 from "../assets/website.svg";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "React Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <>
      <div
        className="flex flex-col md:flex-row gap-7 h-[100vh] md:h-[100vh] items-center  mt-6"
        id="Home"
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full sm-max:mt-[140px]  md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-white text-3xl md:text-4xl">
            It's <span className="text-violet-500">me</span>
            <span className="text-gray-400 text-[24px] md:text-[30px] mx-2 md:mx-3">
              {text}
            </span>
          </h1>
          <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-4xl md:text-5xl uppercase font-semibold">
            Abhishek Pokharkar
          </h1>
          <p className="text-sm md:text-[22px] tracking-wide text-gray-200 my-4 font-extralight leading-8">
            I’m a front-end developer who uses tools like React.js for dynamic
            interfaces and HTML, CSS, and JavaScript for smooth structure and
            styling. Let’s build something amazing together!
          </p>
          <div className="flex gap-5">
            <a
              href="#Contactus"
              className="text-black bg-gray-200 w-[35%] py-[15px] rounded-full font-semibold mt-3 flex items-center justify-evenly transform transition-transform duration-300 hover:scale-110 hover:shadow-lg perspective"
            >
              Contact me here!
              <FaArrowRight />
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-gray-800 text-white w-[35%] py-[15px] rounded-full font-semibold mt-3 flex items-center justify-evenly transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              Download CV <FaDownload />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end h-[80%] p-9"
        >
          <img
            src={Homeimg1}
            className="w-full h-full object-contain"
            alt="Home"
          />
          {/* <div className="absolute"></div> */}
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center  cursor-pointer">
        <div className="my-8 animate-bounce">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-6xl text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M18 6.41L16.59 5 12 9.58 7.41 5 6 6.41l6 6z"></path>
            <path d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
