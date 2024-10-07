import React from "react";
import aboutimg from "../assets/protfo1.webp";
import { About_content } from "../assets/asset";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const About = () => {
  return (
    <section className="min-h-screen py-6" id="About">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-white text-4xl sm:text-5xl md:text-6xl py-12 text-center uppercase"
      >
        About <span className="text-gray-400">Us</span>
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <ScrollAnimation animateIn="bounceInLeft" duration={1} delay={500}>
          <img
            src={aboutimg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg p-5"
          />
        </ScrollAnimation>
        
        <div className="flex z-30 flex-col md:w-1/2 p-4">
        <ScrollAnimation animateIn="bounceInRight" duration={1} delay={500}>
        <p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-gray-400 text-lg md:text-xl lg:text-2xl sm:max:text-sm"
          >
            {About_content}
          </p>
          </ScrollAnimation>

      
        </div>
      </div>
    </section>
  );
};

export default About;
