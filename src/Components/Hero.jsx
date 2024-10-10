import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Homeimg1 from "../assets/Hero.png";
import { FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
// import ParticlesComponent from "./Particles"; // Import your Particles component
// import ScrollAnimationMin from "react-animate-on-scroll";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "React Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const leftContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative w-full md:w-[80%] mx-auto flex flex-col md:flex-row gap-7 min-h-screen items-center" id="Home">
      {/* Background Particles */}
      {/* <ParticlesComponent id="particles" /> */}

      {/* Hero Content */}
      <motion.div
        variants={leftContentVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full h-[80vh] flex flex-col justify-center items-center md:w-1/2 md:items-start z-10" // z-10 to ensure content is on top
      >
        <h1 className="text-gray-200 text-3xl md:text-4xl">
          It's me 👋          
          <span className="text-[24px] md:text-[35px] mx-2 md:mx-3 font-semibold tracking-widest" style={{ color: "rgb(252, 16, 86)" }}>
            {text}
          </span>
        </h1>
        <h1 className="text-xl md:text-3xl uppercase font-semibold text-white tracking-wider pt-5">
          Abhishek Pokharkar
        </h1>
        <p className="text-sm md:text-lg tracking-wide text-gray-200 my-4 font-extralight leading-8">
          "I’m an Open Source Enthusiast 🔥. Always learning."
        </p>
        <div className="inline-flex w-[80%] text-sm md:flex flex-row gap-5">
          <a
            href="#Contactus"
            className="text-black bg-gray-200 w-full md:w-[45%] py-[15px] rounded-full font-semibold mt-3 flex items-center justify-evenly transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Contact me"
          >
            Contact me here!
            <FaArrowRight />
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-gray-800 text-white w-full md:w-[45%] py-[15px] rounded-full font-semibold mt-3 flex items-center justify-evenly transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Download CV"
          >
            Download CV <FaDownload />
          </a>
        </div>
      </motion.div>

      {/* Image Animation */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end h-[80%] p-9"
        animate={{
          y: [0, 10, 0], // Move up and down
          opacity: [1, 0.8, 1], // Slightly fade out and back in
        }}
        transition={{
          duration: 2,
          repeat: Infinity, // Repeat indefinitely
          repeatType: "loop", // Loop the animation
          ease: "easeInOut", // Smooth easing
        }}
      >
        <img
          src={Homeimg1}
          className="w-full h-auto object-contain"
          alt="Home"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
