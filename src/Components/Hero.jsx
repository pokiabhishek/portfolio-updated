import React, { useEffect, useState } from "react";
import Homeimg1 from "../assets/Hero.png";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const words = ["Web Developer", "React Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFadeIn(true);
      }, 500); // Delay before changing the word
    }, 2000); // Duration each word is displayed

    return () => clearInterval(interval);
  }, [words.length]);

  const leftContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative w-full md:w-[80%] mx-auto flex flex-col md:flex-row min-h-screen items-center" id="Home">
      <motion.div
        variants={leftContentVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full h-[60vh] flex flex-col justify-center items-center md:items-start md:w-1/2 z-10"
      >
        <h1 className="text-gray-200 text-3xl md:text-4xl">It's me 👋</h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="text-[24px] md:text-[35px] md:text-left font-semibold tracking-widest smoke-effect"
          style={{ color: "rgb(252, 16, 86)" }}
        >
          {words[currentWordIndex]}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-md md:text-xl font-semibold text-gray-400 tracking-wider text-center md:text-left"
        >
          I'm <span style={{ color: "rgb(252, 16, 86)" }}>Abhishek Pokharkar</span>, an Open Source Enthusiast passionate about learning. 🔥
        </motion.div>

        <div className="inline-flex w-[80%] text-sm md:flex flex-row gap-5 mt-4">
          <motion.a
            href="#Contactus"
            className="text-black bg-gray-200 text-[12px] w-[300px]  p-3  md:w-[45%] py-[15px] rounded-full font-semibold mt-3 flex items-center justify-evenly transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Contact me"
            whileHover={{ scale: 1.05 }}
          >
            Contact me here!
            <FaArrowRight />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="bg-gray-800 text-white text-[12px] w-[300px]  p-3 md:w-[45%] py-[15px] rounded-full font-semibold mt-3 flex items-center justify-evenly transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Download CV"
            whileHover={{ scale: 1.05 }}
            style={{backgroundColor:"rgb(252, 16, 86)"}}
          >
            Download CV <FaDownload />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end h-[80%] p-2"
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
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
