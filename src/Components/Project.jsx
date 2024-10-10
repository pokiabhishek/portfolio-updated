import React from "react";
import { projectdata } from "../assets/asset";
// import project from "../assets/porject.jpg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { motion } from "framer-motion";

const languageIcons = {
  HTML: <FaHtml5 style={{ color: "#E44D26" }} />,
  CSS: <FaCss3Alt style={{ color: "#1572B6" }} />,
  JavaScript: <FaJs style={{ color: "#F7DF1E" }} />,
  "React JS": <FaReact style={{ color: "#61DAFB" }} />,
};

const Project = () => {
  return (
    <div className="min-h-screen relative py-6 w-[80%] mx-auto" id="Project">
      <motion.h1
           initial={{ y: 40, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.5, delay: 1 }}
      className=" text-5xl py-11 text-left md:text-center" style={{color:"rgb(252, 16, 86)"}}>
              Proj<span className="text-white">ect</span>
            </motion.h1>
      <div className="flex flex-col md:flex-row items-center  gap-5">
        <ScrollAnimation animateIn="bounceInLeft" duration={1.5} delay={300}>
          <div className="w-[100%] h-[60vh]">
            <svg
              id="a6dc9487-50e2-4fb9-af91-bf1b7118d463"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="100%" // Changed to 100%
              height="100%" // Changed to 100%
              viewBox="0 0 1103.79 707.8"
              preserveAspectRatio="xMidYMid meet" // Added to preserve aspect ratio
            >
              <defs>
                <linearGradient
                  id="bd43dd7f-2dfd-4389-bf1e-697a1c0f972b"
                  x1="891.82"
                  y1="790.72"
                  x2="891.82"
                  y2="522.9"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="gray" stopOpacity="0.25" />
                  <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
                  <stop offset="1" stopColor="gray" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <ellipse
                cx="843.39"
                cy="664.8"
                rx="192"
                ry="43"
                fill="#E3405F"
                opacity="0.1"
              />
              <g opacity="0.1">
                <path
                  d="M673.12,122.89c0,156.1,97.93,282.41,219,282.41"
                  transform="translate(-48.1 -96.1)"
                  fill="#E3405F"
                />
              </g>
              <path
                d="M675.52,226.13c-70.75.54-138.73-15.45-203.73-33.27S342.32,155,273,146.82c-44.62-5.27-95.4-4.44-130.47,16-33.75,19.66-43.74,51.89-48.67,81.63-3.71,22.38-5.52,45.86,7.54,66.22C110.42,324.8,126,336.4,137,349.86c38.26,46.83,14.53,107.1-23.41,155.51-17.79,22.71-38.6,44.5-52.1,68.48s-19.18,51.1-5.79,74.6c13.28,23.28,43.54,40,76.09,51.45C197.92,723,275,727.6,350.05,729.06c166.14,3.25,332.71-6.63,498.83-16.5,61.47-3.66,123.22-7.34,183.48-17.15,33.46-5.45,67.92-13.44,91.74-30.61,30.25-21.8,36.68-57.11,15-82.33-36.37-42.29-133-49.68-159-95.53-14.31-25.24-1.57-54.37,17-78.92,39.94-52.64,108.35-100,110-158.62,1.1-40.25-34-79.28-86.68-96.43-55.25-18-130.79-12.79-169.85,21.61C810.34,210,738,225.66,675.52,226.13Z"
                transform="translate(-48.1 -96.1)"
                fill="#E3405F"
                opacity="0.1"
              />
              <path
                d="M995,127.29V645.7c0,15.42-14.88,28-33.24,28H258.34c-18.36,0-33.23-12.54-33.23-28V127.29c0-15.45,14.87-31.19,33.23-31.19l703.33,1.71C980,97.81,995,111.84,995,127.29Z"
                transform="translate(-48.1 -96.1)"
                fill="#fff"
              />
              <path
                d="M995,127.45v24H225.11v-24A31.35,31.35,0,0,1,256.45,96.1H963.6A31.36,31.36,0,0,1,995,127.45Z"
                transform="translate(-48.1 -96.1)"
                fill="#292929"
              />
              <circle
                cx="214.3"
                cy="27.67"
                r="11.08"
                fill="#fa5959"
                opacity="0.8"
              />
              <circle
                cx="246.53"
                cy="27.67"
                r="11.08"
                fill="#fed253"
                opacity="0.8"
              />
              <circle
                cx="278.76"
                cy="27.67"
                r="11.08"
                fill="#8ccf4d"
                opacity="0.8"
              />
              <rect
                x="457"
                y="170.7"
                width="70.01"
                height="33.22"
                rx="8.57"
                fill="#E3405F"
                opacity="0.2"
              />
              <rect
                x="598.84"
                y="170.7"
                width="70.01"
                height="33.22"
                rx="8.57"
                fill="#E3405F"
                opacity="0.2"
              />
              <polyline
                points="491.81 203.17 561.89 294.68 634.08 202.74"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <rect
                x="508.37"
                y="291.75"
                width="107.03"
                height="50.79"
                rx="8.57"
                opacity="0.1"
              />
              <rect
                x="510.55"
                y="292.79"
                width="102.68"
                height="48.73"
                rx="8.57"
                fill="#E3405F"
              />
              <line
                x1="492.29"
                y1="170.7"
                x2="491.38"
                y2="138.35"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <polyline
                points="675.22 139.93 634.08 170.7 590.81 139.93"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <rect
                x="456.61"
                y="106.7"
                width="70.01"
                height="33.22"
                rx="8.57"
                fill="#E3405F"
                opacity="0.2"
              />
              <rect
                x="640.21"
                y="106.7"
                width="70.01"
                height="33.22"
                rx="8.57"
                fill="#E3405F"
                opacity="0.2"
              />
              <rect
                x="555.81"
                y="106.7"
                width="70.01"
                height="33.22"
                rx="8.57"
                fill="#E3405F"
                opacity="0.2"
              />
              <line
                x1="561.89"
                y1="341.51"
                x2="561.62"
                y2="430.01"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <path
                d="M609.53,558.59v0Z"
                transform="translate(-48.1 -96.1)"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <polyline
                points="462.42 493.11 561.42 462.48 660.82 492.89"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <rect
                x="526.62"
                y="430.01"
                width="70.01"
                height="33.22"
                rx="8.57"
                fill="#E3405F"
                opacity="0.2"
              />
              <rect
                x="861.88"
                y="345.12"
                width="70.01"
                height="33.22"
                rx="8.57"
                transform="translate(1210.51 -631.25) rotate(90)"
                fill="#E3405F"
                opacity="0.2"
              />
              <rect
                x="861.88"
                y="454.76"
                width="70.01"
                height="33.22"
                rx="8.57"
                transform="translate(377.41 1272.15) rotate(-90)"
                fill="#E3405F"
                opacity="0.2"
              />
              <rect
                x="625.82"
                y="412.67"
                width="70.01"
                height="33.22"
                rx="8.57"
                fill="#E3405F"
                opacity="0.2"
              />
              <rect
                x="778.88"
                y="345.12"
                width="70.01"
                height="33.22"
                rx="8.57"
                transform="translate(1210.51 -631.25) rotate(90)"
                fill="#E3405F"
                opacity="0.2"
              />
              <path
                d="M697.8,353.7v0Z"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <path
                d="M586.19,491.89v0Z"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <path
                d="M682.82,491.89v0Z"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <path
                d="M469.62,493.2v0Z"
                fill="none"
                stroke="#292A2D"
                strokeMiterlimit="10"
              />
              <circle
                cx="661.45"
                cy="325.3"
                r="11.08"
                fill="#fa5959"
                opacity="0.8"
              />
              <circle
                cx="622.23"
                cy="325.3"
                r="11.08"
                fill="#fed253"
                opacity="0.8"
              />
              <circle
                cx="582.01"
                cy="325.3"
                r="11.08"
                fill="#8ccf4d"
                opacity="0.8"
              />
              <path
                d="M186.31,643.65V413.73c0-8.06-6.58-14.6-14.73-14.6H39.83C31.87,399.13,30,409.43,30,419.94v208.04c0,8.06,6.58,14.6,14.73,14.6H171.58c8.15,0,14.73-6.54,14.73-14.6Z"
                transform="translate(-48.1 -96.1)"
                fill="#292A2D"
                opacity="0.1"
              />
            </svg>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col justify-center w-full md:w-1/2">
          <ScrollAnimation animateIn="bounceInRight" duration={1.7} delay={300}>
            
            <p className="text-lg text-gray-200 leading-8 mb-4">
              ⚡ I create dynamic and responsive websites using the latest
              technologies, focusing primarily on HTML, CSS, JavaScript, and
              React.js.
            </p>
            <p className="text-lg text-gray-200 leading-8 mb-4">
              ⚡ My expertise lies in building engaging user interfaces and
              seamless user experiences, leveraging the power of React.js.
            </p>
            <p className="text-lg text-gray-200 leading-8 mb-4">
              ⚡ Below are some of my notable projects. Please note that not all
              projects are available on GitHub yet, but I’m excited to showcase
              them!
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectdata.map((item, index) => (
          
          <ScrollAnimation
            animateIn='flipInX'
            className="flex flex-col gap-5 p-7 rounded-lg  border border-[#ffffff4d]"
            key={index}
            style={{backgroundColor:"rgb(41, 42, 45)"}}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <span className="flex-grow">
              <h1 className="text-4xl font-semibold py-5">{item.name}</h1>
              <p className="text-gray-400 text-xl">{item.content}</p>
            </span>
            <div className="flex h-[14vh] items-end justify-between">
              <div className="flex flex-wrap gap-2">
                {item.languages.map((language, langIndex) => (
                  <span
                    key={langIndex}
                    className="flex items-center px-3 py-1 rounded-md text-[30px]"
                  >
                    {languageIcons[language]}{" "}
                    {/* Render the corresponding icon */}
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
