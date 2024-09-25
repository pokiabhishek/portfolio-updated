import React, { useState } from 'react';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('Home');
    const [togglemenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!togglemenu);
    };

    const handleClick = (item) => {
        setActiveItem(item);
        setToggleMenu(false); 
    };

    return (
        <div className="text-white container mx-auto sm-max:w-5/6 w-1/2 fixed left-[25%] z-40 ">
            <nav className="flex h-[60px] items-center justify-center px-3 mt-3 bg-gray-500 rounded-full xl:px-6 sm:px-[20px]">
                <button
                    id="burger-menu"
                    className="hidden xl-max:flex focus:outline-none xl-max:ms-auto"
                    onClick={handleToggle}
                >
                    {!togglemenu ? (
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
                <ul
                    className={`xl-max:absolute top-[60px] xl-max:flex-col right-0 left-0 text-center xl:flex gap-6 ${
                        togglemenu ? 'flex bg-[rgba(0,0,0,1)] rounded-xl' : 'hidden'
                    }`}
                >
                    {['Home', 'About', 'Project', 'Skills','Services', 'Contactus'].map(item => (
                        <li className="list-none" key={item}>
                            <a
                                href={`#${item.replace(' ', '')}`}
                                className={`uppercase text-[12px] tracking-wide px-4 py-4 rounded-full hover:bg-slate-800 transition-colors duration-300 ${
                                    activeItem === item ? 'bg-slate-800' : ''
                                }`}
                                onClick={() => handleClick(item)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
