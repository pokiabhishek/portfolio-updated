import React from "react";
// import Aboutimg from "../assets/rightpattern.svg";
// import About1 from "../assets/about1.svg"
import { About_content } from "../assets/asset";
// import { RiReactjsLine } from "react-icons/ri";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa";
// import { DiJavascript } from "react-icons/di";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="min-h-screen py-6" id="About">
      <motion.h1
                initial={{y:40,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.5,delay:1}}
      className="text-white text-6xl py-12 text-center uppercase">
        About <span className="text-gray-400">us</span>
      </motion.h1>
      <div className="flex sm-max:flex-col w-[70%] mx-auto text-center">
        {/* <motion.div 
                    initial={{x:-20,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:1.2}}
        className="w-1/2 sm-max:w-full">
          <img className="rounded-lg" src={Aboutimg} alt="" />
        </motion.div> */}
        <div className="sm-max:w-full flex z-30 flex-col">
          <motion.p
                    initial={{y:30,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:0.5,delay:1.3}}
          className="text-gray-400 text-[30px] sm-max:text-[13px] ">
            {About_content}
          </motion.p>
          {/* <motion.h1
                    initial={{y:20,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:0.5,delay:1.4}}
          className="text-gray-300 pt-11 text-xl tracking-widest">
            Technology:
          </motion.h1> */}
          {/* <motion.div
                    initial={{x:20,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:1.5}}
          className="flex gap-4 my-3 justify-center">
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <RiReactjsLine className="text-xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <FaHtml5 className="text-xl text-orange-400" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <FaCss3 className="text-xl text-sky-300" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <DiJavascript className="text-xl text-yellow-500" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
              <DiJavascript className="text-xl text-yellow-500" />
            </div>
          </motion.div> */}
          
        </div>
      </div>
      {/* <img className="absolute bottom-0 right-0 flex h-[80%]" src={Aboutimg} alt="" data-aos="zoom-in-left" /> */}
    </div>
  );
};

export default About;
