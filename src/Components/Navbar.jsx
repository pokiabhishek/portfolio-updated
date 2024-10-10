import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion
import { MdOutlineDarkMode } from "react-icons/md";

const sections = ["Home", "About", "Education", "Project", "Contactus"];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleClick = (item) => {
    setActiveItem(item);
    setToggleMenu(false);
    scrollToSection(item);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollToY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  const determineActiveSection = () => {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveItem(section);
        }
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2); // Set scrolled if past half the viewport height
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-40 w-full transition-colors duration-300`}
      style={{
        backgroundColor: `${isScrolled ? "rgb(29, 29, 29)" : "transparent"}`,
      }}
    >
      <nav
        className="flex h-[60px] items-center  sm:px-[20px] lg:px-[0px] w-[80%] mx-auto "
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <h1
          className="text-2xl md:text-4xl font-medium tracking-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <span style={{ color: "rgb(252, 16, 86)" }}>{"<"}Abhi</span>
          <span style={{ color: "white" }}>sek{"/>"}</span>
        </h1>
        <button
          id="burger-menu"
          className="hidden xl-max:flex focus:outline-none xl-max:ms-auto"
          aria-label="Toggle menu"
          onClick={handleToggle}
        >
          {!toggleMenu ? (
            <svg
              id="burger-icon"
              className="w-6 h-6 icon-transition text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          ) : (
            <svg
              id="cross-icon"
              className="w-6 h-6 icon-transition text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </button>
        <ul
          className={`xl-max:absolute top-[60px] ms-auto xl-max:flex-col right-0 left-0 text-center xl:flex gap-2 ${
            toggleMenu ? "flex" : "hidden"
          }`}
          style={{
            backgroundColor: toggleMenu ? "rgb(29, 29, 29)" : "transparent",
            borderRadius: toggleMenu ? "0.75rem" : "0",
          }}
        > 
          {sections.map((item) => (
            <li className="list-none relative" key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
                className={`flex w-full items-center justify-center  transition-colors duration-300 ease-in-out rounded-md`}
                style={{
                  backgroundColor:
                    activeItem === item ? "white" : "transparent",
                  color: activeItem === item ? " black" : "white",
                  padding: activeItem === item ? "0.5rem" : "0.5rem",
                }}
              >
                {item}
              </a>
              {item === activeItem && (
                <motion.span
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className="rounded-full absolute inset-0 -z-10"
                />
              )}
            </li>
          ))}
        </ul>
        {/* <MdOutlineDarkMode  className="text-white text-3xl mx-2"/> */}
      </nav>
    </div>
  );
};

export default Navbar;
