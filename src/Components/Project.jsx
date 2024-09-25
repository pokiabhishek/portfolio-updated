import React, { useState } from "react";
import { projectdata } from "../assets/asset";
// import web3 from "../assets/web3.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);
  return (
    <div className="min-h-screen relative py-6" id="Project">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-white text-5xl py-11 text-center uppercase"
      >
        Proje<span className="text-gray-400">ct</span>
      </motion.h1>

      <div className="text-white">
        <div>
          {projectdata.map((item, index) => (
            <div
              className="flex justify-center gap-10 my-5 py-16 rounded-lg border-2 border-neutral-800"
              key={index}
            >
              <span data-aos="zoom-in-right">
                <div
                  className="relative rounded-md w-[400px] h-[300px] overflow-hidden"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition:
                      isHoveredIndex === index ? "bottom" : "top",
                    backgroundSize: "cover",
                    transition: "background-position 6s linear",
                  }}
                  onMouseEnter={() => setIsHoveredIndex(index)}
                  onMouseLeave={() => setIsHoveredIndex(null)}
                >
                  {/* Overlay */}
                  {isHoveredIndex === index && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out">
                      <a
                        href={item.link}
                        className="text-white text-lg font-bold mb-2 border-2 p-2 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={item.git}
                        className="flex items-center text-white text-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-2" />
                      </a>
                    </div>
                  )}
                </div>
              </span>
              <motion.span
                initial={{ x: 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="w-1/2"
              >
                <h1 className="text-4xl font-semibold py-5">{item.name}</h1>
                <p className="text-gray-300 text-xl">{item.content}</p>
                <div className="flex  h-[14vh] items-end">
                <div className="w-[55%] flex justify-between">
                  {item.languages.map((language, langIndex) => (
                    <span
                      key={langIndex}
                      className="border-[1px] px-7 py-2 rounded-md border-gray-700"
                    >
                      {language}
                    </span>
                  ))}
                </div>
                </div>
               
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
