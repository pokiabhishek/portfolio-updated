import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import menimg from "../assets/man01.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const Skills = () => {
    const skills = [
        { name: "C++", percentage: 75 },
        { name: "HTML", percentage: 95 },
        { name: "CSS", percentage: 80 },
        { name: "JavaScript", percentage: 60 },
        { name: "React.js", percentage: 70 },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);
    
    const fadeIn = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div ref={skillsRef} className='h-[100vh] flex flex-col lg:flex-row justify-center items-center min-h-screen' id='Skills'>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h1 className='text-white text-5xl text-center font-semibold mb-10'>
                    My Sk<span className='text-gray-400'>ills</span>
                </h1>
                <div className="w-[80%] mx-auto">
                    {skills.map((skill, index) => {
                        const { width } = useSpring({
                            width: isVisible ? `${skill.percentage}%` : '0%',
                            config: { duration: 1000 },
                        });

                        return (
                            <div className="mb-4" key={index}>
                                <span className="block text-gray-300 font-semibold mb-1">{skill.name}</span>
                                <div className="w-full bg-gray-600 rounded-full h-4 relative">
                                    <animated.div
                                        style={{
                                            width,
                                            backgroundColor: 'rgba(255, 165, 0, 0.8)',
                                        }}
                                        className="h-4 rounded-full"
                                    >
                                        <span className="absolute right-[-30px] text-xs text-white">{skill.percentage}%</span>
                                    </animated.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <ScrollAnimation animateIn="bounceInRight" duration={1} delay={500} className="w-full lg:w-1/3 flex flex-col justify-center items-center mt-10 lg:mt-0">
                <img src={menimg} alt="Skills Illustration" className="w-3/4 h-auto" />
                {/* <p className="text-gray-300 text-center px-4">
                    I'm passionate about building efficient and scalable web applications. I enjoy working with modern technologies and continuously improving my skills through challenging projects.
                </p> */}
            </ScrollAnimation>
        </div>
    );
};

export default Skills;

