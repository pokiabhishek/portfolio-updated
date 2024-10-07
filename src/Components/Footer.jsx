import React from 'react';
import foot from "../assets/foot.png"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <footer className= 'text-white py-9'>
    <div className="relative border-[1px] border-slate-800 rounded-lg" id='Contactus'>
          <motion.h1
                 initial={{y:-40,opacity:0}}
                 whileInView={{y:0,opacity:1}}
                 transition={{duration:0.5,delay:1}}
          className="text-gray-300 absolute left-[35%] text-7xl top-[30px] font-semibold">Get in touch!</motion.h1>
          <motion.div
    initial={{y:20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.5,delay:1}}
          className="text-white absolute left-[45%]  top-[30%] bg-slate-500 px-9 py-3 rounded-full font-semibold">Hire Me!</motion.div>
          <motion.span
    initial={{y:20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.5,delay:1}}
          className='absolute left-[40%] top-[120px] text-xl'>Abhishekpokharkar81@gmail.com</motion.span>
          <motion.div
    initial={{y:20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.5,delay:1}}
          className='absolute flex gap-2 left-[48%] top-[41%]'>
            <FaGithubSquare className='text-2xl' />
            <FaLinkedin className='text-2xl' />
          </motion.div>
          <img src={foot} className="w-[100%] pt-[280px]" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
