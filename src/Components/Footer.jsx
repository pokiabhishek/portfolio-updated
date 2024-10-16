import React from 'react';
import foot from "../assets/foot.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='text-white'>
      <div className="relative border-b-[1px] border-slate-800 rounded-lg flex flex-col items-center overflow-hidden" id='Contactus'>
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className=" text-5xl md:text-7xl font-semibold text-center" 
          style={{color:"rgb(252, 16, 86)"}}
          > 
          Get in to<span className='text-white'>uch!</span>
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-white bg-slate-500 px-6 py-2 rounded-full font-semibold text-center mt-4 md:w-[15%]">
          Hire Me!
        </motion.div>

        <motion.span
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='block  text-sm md:text-xl text-center mt-4 tracking-widest'>
          Abhishekpokharkar81@gmail.com
        </motion.span>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='flex justify-center gap-4 mt-4'>
          <FaGithubSquare className='text-2xl hover:text-gray-300 transition' />
          <FaLinkedin className='text-2xl hover:text-gray-300 transition' />
        </motion.div>

        <motion.div
          initial={{ y: '100%', opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <img src={foot} className="w-full object-cover" alt="Footer Background" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
