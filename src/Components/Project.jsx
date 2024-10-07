import React from "react";
import { projectdata } from "../assets/asset";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const Project = () => {
  return (
    <div className="min-h-screen relative py-6 w-[85%] mx-auto" id="Project">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-white text-5xl py-11 text-center uppercase"
      >
        Proje<span className="text-gray-400">ct</span>
      </motion.h1>

      <div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projectdata.map((item, index) => (
          <ScrollAnimation
            animateIn="flipInX"
            className="flex flex-col gap-5 p-7 rounded-lg bg-[#21232d] border border-[#ffffff4d]"
            key={index}
          >
            <span>
              <div
                className="relative rounded-md w-full h-[200px]"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  transition: "background-position 6s linear",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out"></div>
              </div>
            </span>
            <span className="flex-grow">
              <h1 className="text-4xl font-semibold py-5">{item.name}</h1>
              <p className="text-gray-400 text-sm">{item.content}</p>
            </span>
            <div className="flex h-[14vh] items-end justify-between">
              <div className="flex flex-wrap gap-2">
                {item.languages.map((language, langIndex) => (
                  <span
                    key={langIndex}
                    className="border border-gray-600 px-3 py-1 rounded-md"
                  >
                    {language}
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-5 pt-3">
                <a
                  href={item.link}
                  className="text-white text-lg font-bold border border-[#ffffff4d] p-3 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={item.git}
                  className="flex items-center text-white text-4xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" />
                </a>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Project;
