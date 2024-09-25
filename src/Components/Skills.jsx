import React from 'react';

const Skills = () => {
    // Use an array instead of an object
    const skills = [
        "C++",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Material UI",
        "Framer Motion",
        "Tailwind CSS",
        "Media Query",
        "Bootstrap"
    ];

    return (
        <div className='w-1/2 mx-auto h-[100vh] flex flex-col justify-center' id='Skills'>
            <h1 className='text-white text-5xl text-center font-semibold'>
                My Sk<span className='text-gray-400'>ills</span>
            </h1>
            <div className="flex flex-wrap justify-center mt-[100px]">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-700 text-white rounded-full px-5 py-2 m-2 text-xl"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
