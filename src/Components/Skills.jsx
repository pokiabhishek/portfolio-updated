import React, { useState } from 'react';
import { FaReact, FaTools, FaRegLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const technicalData = [
  {
    title: "Frontend",
    icon: <FaReact className="text-3xl text-blue-300" />,
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3", percentage: "90%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools className="text-3xl text-red-500" />,
    skills: [
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Responsive Layout", percentage: "80%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaRegLightbulb className="text-3xl text-yellow-300" />,
    skills: [
      { skill: "Problem-solving", percentage: "80%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];

const TechnicalProficiency = () => {
  const [currentSkills, setCurrentSkills] = useState(technicalData[0].skills);
  const [currentTitle, setCurrentTitle] = useState(technicalData[0].title);

  const renderSkills = (title, skills) => {
    setCurrentTitle(title);
    setCurrentSkills(skills);
  };

  return (
    <section className="Technical-proficiency w-full md:w-[80%] mx-auto md:h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
      <ScrollAnimation animateIn="fadeInLeft">
        <h4 className="mb-4 text-4xl font-semibold text-left" style={{ color: "rgb(252, 16, 86)" }}>
          Technical <span className='text-white'>Proficiency</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-10">
          {technicalData.map(({ title, icon, skills }) => (
            <button
              key={title}
              className="main-div flex items-center justify-center p-5 h-30 relative text-white border-[1px] border-gray-500 rounded-lg transition-all duration-400 transform hover:-translate-y-1"
              style={{ backgroundColor: "rgb(41, 42, 45)" }}
              onClick={() => renderSkills(title, skills)}
            >
              <div className="icon1 absolute top-[-20px] left-[20px] bg-[#212121] rounded-md border-[1px] border-gray-400 p-2 transition-transform duration-400 hover:translate-y-[-1rem]">
                {icon}
              </div>
              <h4 className="text-lg md:text-xl">{title}</h4>
            </button>
          ))}
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" className="Technical-proficiency-data min-h-[20rem] md:min-h-[23rem] border border-gray-600 rounded-lg p-4" style={{ backgroundColor: "rgb(41, 42, 45)" }}>
        <h5 className="h5 text-2xl font-semibold rounded-t-lg py-2 bg-clip-text border-b border-gray-600 text-center" style={{ color: "rgb(252, 16, 86)" }}>
          {currentTitle}
        </h5>
        {currentSkills.map(({ skill, percentage }, index) => (
          <div key={skill} className="skill-info flex items-center justify-between mb-4 relative">
            <p className="text-white font-medium mt-10">{skill}</p>
            <p className="percentage text-white mt-10">{percentage}</p>
            <div className="skill-progress-bg w-full h-[0.5rem] bg-slate-950 rounded-md overflow-hidden absolute top-20">
              <motion.div
                className="skill-progress h-full rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: percentage }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: "rgb(252, 16, 86)" }}
                // viewport={{ once: true }} // This will make sure the animation happens only once
              />
            </div>
          </div>
        ))}
      </ScrollAnimation>
    </section>
  );
};

export default TechnicalProficiency;
