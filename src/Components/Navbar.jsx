import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion
import clsx from "clsx";

const sections = ["Home", "About", "Project", "Skills", "Services", "Contactus"];

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
      setIsScrolled(window.scrollY > 50);
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed left-[25%] z-40 w-1/2 container mx-auto bg-gray-400 transition-colors duration-300 mt-2 rounded-full`}>
      <nav className="flex h-[60px] items-center justify-center px-3 xl:px-6 sm:px-[20px]" style={{ fontFamily: "Poppins, sans-serif" }}>
        <button
          id="burger-menu"
          className="hidden xl-max:flex focus:outline-none xl-max:ms-auto"
          aria-label="Toggle menu"
          onClick={handleToggle}
        >
          {!toggleMenu ? (
            <svg
              id="burger-icon"
              className="w-6 h-6 icon-transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          ) : (
            <svg
              id="cross-icon"
              className="w-6 h-6 icon-transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          )}
        </button>
        <ul className={`xl-max:absolute top-[60px] xl-max:flex-col right-0 left-0 text-center xl:flex gap-2 ${toggleMenu ? "flex bg-[rgba(0,0,0,1)] rounded-xl" : "hidden"}`}>
          {sections.map((item) => (
            <li className="list-none relative" key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition-colors duration-300 ease-in-out rounded-full",
                  {
                    "text-white": activeItem === item,
                    "bg-[#212121] p-3 rounded-full": activeItem === item,
                  }
                )}
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
      </nav>
    </div>
  );
};

export default Navbar;
