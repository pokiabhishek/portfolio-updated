import React from "react";
// import aboutimg from "../assets/about.svg";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCuttlefish,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <style>
        {`
        @keyframes ekumanslidein {
  0% {
    transform: translateX(-600px);
  }
  50% {
    transform: translateX(-600px) scaleX(1);
  }
  75% {
    transform: translateX(30px) scaleX(0.9);
  }
  87.5% {
    transform: translateX(-5px);
  }
  97% {
    transform: translateX(3px);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}

@keyframes ekumanarmrotate {
  0%,
  45%,
  65%,
  85%,
  to {
    transform: rotate(0deg);
  }
  55%,
  75% {
    transform: rotate(-5deg);
  }
}

@keyframes ekumanhairwobble {
  50%,
  to {
    transform: scaleX(1);
  }
  75% {
    transform: scaleX(1.2);
  }
  87.5% {
    transform: scaleX(0.8);
  }
  97% {
    transform: scaleX(1.09);
  }
}

@keyframes ekuwomanlidein {
  0% {
    transform: translateX(600px);
  }
  50% {
    transform: translateX(600px) scaleX(1);
  }
  75% {
    transform: translateX(-30px) scaleX(0.9);
  }
  87.5% {
    transform: translateX(5px);
  }
  97% {
    transform: translateX(-3px);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}

@keyframes kulapdropin {
  0% {
    transform: translateY(-230px) scale(0) rotate(0deg);
  }
  35% {
    transform: translateY(-230px) scale(1.03) rotate(20deg);
  }
  45% {
    transform: rotate(10deg);
  }
  50% {
    transform: translateY(-5px) scale(0.98) rotate(0deg);
  }
  55% {
    transform: translateY(-10px) scale(1.01) rotate(0deg);
  }
  60% {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes ekuwomanarmrotate {
  0%,
  45%,
  65%,
  85%,
  to {
    transform: rotate(0deg);
  }
  55%,
  75% {
    transform: rotate(10deg);
  }
}

@keyframes ekuwomanarmbackrotate {
  0%,
  45%,
  65%,
  85%,
  to {
    transform: rotate(0deg);
  }
  55%,
  75% {
    transform: rotate(-13deg);
  }
}

@keyframes manscreenpopup {
  0%,
  45%,
  55%,
  65%,
  75%,
  85% {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes manscreenfloat {
  0%,
  to {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes backhairwave {
  0%,
  to {
    transform: scaleX(1) skewX(0) skewY(0);
  }
  50% {
    transform: scaleX(1.07) skewX(3deg) skewY(5deg);
  }
}

#ku.svgmate #Bluearmbot,
#ku.svgmate #Chair,
#ku.svgmate #chairbackbar,
#ku.svgmate #man,
#ku.svgmate .mankauf {
  animation-name: ekumanslidein;
  animation-iteration-count: 1;
  animation-duration: 1.2s;
  animation-timing-function: ease-out;
  transform-origin: 502px 454px;
}

#ku.svgmate #Bluearmbot,
#ku.svgmate #Chair,
#ku.svgmate #chairbackbar,
#ku.svgmate .mankauf {
  animation-duration: 1.5s;
}

#ku.svgmate #Bluearmbot {
  animation-name: ekumanarmrotate;
  animation-iteration-count: infinite;
  animation-duration: 1.8s;
  animation-delay: 1.2s;
  transform-origin: 448.122px 403.482px;
}

#ku.svgmate .mankauf {
  animation-name: ekumanhairwobble;
  animation-duration: 1.38s;
  transform-origin: 396.257px 260.5px;
}

#ku.svgmate #Chair_1_,
#ku.svgmate #Woman,
#ku.svgmate #back-arm,
#ku.svgmate #backleg_1_ {
  animation-name: ekuwomanlidein;
  animation-iteration-count: 1;
  animation-duration: 1.8s;
  animation-timing-function: ease-out;
  transform-origin: 502px 454px;
}

#ku.svgmate #Chair_1_ {
  animation-duration: 1.95s;
}

#ku.svgmate #Laptop,
#ku.svgmate #keyboard {
  animation-name: kulapdropin;
  animation-iteration-count: 1;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  transform-origin: 648.689px 361.659px;
}

#ku.svgmate #keyboard {
  animation-duration: 2.5s;
  transform-origin: 479.857px 383px;
}

#ku.svgmate #lowerarm,
#ku.svgmate #lowervackarm {
  animation-name: ekuwomanarmrotate;
  animation-iteration-count: infinite;
  animation-duration: 1.8s;
  animation-delay: 2.1s;
  animation-timing-function: ease-out;
  transform-origin: 751.134px 385.578px;
}

#ku.svgmate #lowervackarm {
  animation-name: ekuwomanarmbackrotate;
  transform-origin: 736.882px 386px;
}

#ku.svgmate #Man_screen .greenscreen,
#ku.svgmate #Man_screen .redscreen,
#ku.svgmate #Man_screen .screenbutton {
  animation-name: manscreenpopup;
  animation-iteration-count: 1;
  animation-duration: 5.6s;
  animation-timing-function: ease-in-out;
  transform-origin: 526.882px 383px;
}

#ku.svgmate #Man_screen .greenscreen,
#ku.svgmate #Man_screen .redscreen {
  animation-duration: 3s;
}

#ku.svgmate #Man_screen .greenscreen {
  animation-duration: 3.3s;
}

#ku.svgmate #Man_screen,
#ku.svgmate #Man_screen .greenscrmove,
#ku.svgmate #Man_screen .redskmove,
#ku.svgmate .womscreenmove {
  animation-name: manscreenfloat;
  animation-iteration-count: infinite;
  animation-duration: 9s;
  animation-timing-function: ease-in-out;
}

#ku.svgmate #Man_screen .greenscrmove,
#ku.svgmate #Man_screen .redskmove {
  animation-duration: 6s;
}

#ku.svgmate #Man_screen .greenscrmove {
  animation-duration: 7.2s;
}

#ku.svgmate #hairback,
#ku.svgmate #womanscreen {
  animation-name: manscreenpopup;
  animation-iteration-count: 1;
  animation-duration: 3.9s;
  animation-timing-function: ease-in-out;
  transform-origin: 648.689px 361.659px;
}

#ku.svgmate #hairback {
  animation-name: backhairwave;
  animation-iteration-count: infinite;
  animation-duration: 3.3s;
  transform-origin: 785.132px 295.833px;
}
    `}
      </style>

      <section
        className="min-h-screen py-6 w-full md:w-[80%] mx-auto"
        id="About"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-[#d7d0f1] text-4xl sm:text-5xl md:text-6xl py-12 text-center uppercase"
          style={{ color: "rgb(252, 16, 86)" }}
        >
          About <span className="text-white">Us</span>
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-5">
          <ScrollAnimation animateIn="bounceInLeft" duration={2.5} delay={100}>
            <div className="flex items-center justify-center md:w-[500px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="ku"
                width="90%"
                baseProfile="tiny"
                class="svgmate"
                version="1"
                viewBox="300 150 550 570"
              >
                <g id="wall">
                  <path
                    fill="white"
                    d="M674 333c0 2-2 4-4 4H553c-2 0-4-2-4-4V203c0-2 2-4 4-4h117c2 0 4 2 4 4v130z"
                  ></path>
                  <path
                    id="Layer_33"
                    fill="#FC1056"
                    d="M639 240c-4-4-10-4-13 0l-77 77v15l5 5h116c2 0 4-2 4-4v-58l-35-35z"
                  ></path>
                </g>
                <g id="light">
                  <circle
                    id="bulb"
                    cx="550"
                    cy="230"
                    r="9"
                    fill="#c2c0c5"
                  ></circle>
                  <path fill="#FC1056" d="M550 201l-27 29h55z"></path>
                </g>
                <g id="Woman__x2F__Chair__x2F__Screen">
                  <g id="backleg_1_">
                    <path
                      id="backlegpath"
                      fill="#F68E5A"
                      d="M651 521l47-90 24-16 12 11-29 44-46 56z"
                    ></path>
                    <path
                      fill="#BCBCBD"
                      d="M639 549l20-23-8-5s-8 6-14 6-26-7-26-7v10l28 19z"
                    ></path>
                  </g>
                  <g id="Chair_1_">
                    <g id="legs_1_">
                      <path
                        fill="white"
                        d="M782 461l-65 36v-5l68-38v5z"
                      ></path>
                      <path fill="#34363E" d="M726 459l65 36v-4l-65-37z"></path>
                      <path
                        fill="white"
                        d="M779 441l19 108 5 1-10-112zM729 440l-10 3-9 107h4l18-108z"
                      ></path>
                    </g>
                    <g id="seat_1_">
                      <path
                        fill="white"
                        d="M804 360c15 0 18-2 19 20s-13 42-17 48-6 15-24 15h-70l-2-9s73 0 80-8 16-22 18-36 6-21 2-23-6-7-6-7z"
                      ></path>
                      <path
                        fill="#212121"
                        d="M796 359h8c7-1 13 2 12 17s-9 34-13 42-9 17-32 17h-64s16-8 35-8 22-11 26-21 11-28 13-37 6-10 15-10z"
                      ></path>
                      <path
                        id="womanshdow"
                        fill="#FC1056"
                        d="M803 407c0-10-13-23-15-31s4-14 9-17h-4c-8 0-11 2-12 10l-5 17v3c3 8 6 16 6 24s-15 17-15 17l-5 5h9c22 0 27-9 31-17l1-11z"
                      ></path>
                    </g>
                  </g>
                  <g id="back-arm">
                    <path
                      fill="#F68E5A"
                      d="M737 386l48-55s-4-25-17-7-35 54-35 54l4 8z"
                    ></path>
                    z
                    <path
                      id="lowervackarm"
                      fill="#F68E5A"
                      d="M669 361c4 1 13 4 15 2s8-4 11-2l42 25v-15s-46-22-51-19l-17 9z"
                    ></path>
                  </g>
                  <g id="womanscreen" class="womscreenmove"></g>
                  <g id="Woman">
                    <g id="Front_leg">
                      <path
                        id="leg"
                        fill="#F68E5A"
                        d="M737 435h-20s-2 1-1 2l26 78-11 1-42-74c-1-2-5-13 1-16l29-13 18 22z"
                      ></path>
                      <path
                        fill="#BCBCBD"
                        d="M750 537c-1 1-17 13-23 13s-13 0-14-2c0-5 4-2 7-4s11-8 12-15l-2-15 11-2 7 21 2 4z"
                      ></path>
                    </g>
                    <g id="hairback">
                      <path
                        id="shaded"
                        fill="#585268"
                        d="M809 308c11 4 11 23 2 32s-31-14-35-29-3-27 4-20c13 13 21 13 29 17z"
                      ></path>
                      <path
                        id="main"
                        fill="#585268"
                        d="M784 364c6-3 32-21 30-34s-18-16-26-29-21 2-13 11 11 33 7 36c-16 17 2 16 2 16z"
                      ></path>
                    </g>
                    <g id="dress">
                      <path
                        fill="#FC1056"
                        d="M755 315c-4 5-29 31-18 39s19 13 16 31-33 28-42 31l20 19h28c11 0 29-7 29-24s-7-19-7-27l5-21c1-4 3-32-2-39-8-10-17-19-29-9z"
                      ></path>
                    </g>
                    <g id="womanhead">
                      <g id="headbase">
                        <path
                          fill="#F89F71"
                          d="M768 321c-3 2-9 8-11-1s-4-8-6-7-18-22-15-30 31-34 34-7-2 24 3 29 2 5 0 8l-5 8z"
                        ></path>
                        <path
                          fill="#F89F71"
                          d="M733 281c-6 9 9 32 15 32 4 0 6-3 5-4-4-1-15-23-15-28 1-6-5 0-5 0z"
                        ></path>
                        <path
                          fill="#F89F71"
                          d="M767 321c1-1 2-1 1-2l-3-5c-1-6-9-7-12-3l-1 1c2 0 4 1 5 8 2 8 7 4 10 1z"
                        ></path>
                      </g>
                      <g id="hairbase">
                        <path
                          id="tophairmain"
                          fill="#585268"
                          d="M764 285c-7-7-13-2-28-2-8 0-23-12-13-15 8-3 5-12 16-17s22-4 32 7 13 33 14 38 5 8 9 13c0 0-4 14-9 12s-7 2-13-4-4-5-5-8 1-16-1-20l-2-4z"
                        ></path>
                        <path
                          id="botshadehar"
                          fill="#585268"
                          d="M767 297c-2 10-7 34 11 26 20-8-9 3-11-26z"
                        ></path>
                        <path
                          fill="#585268"
                          d="M725 266c-7 4-13 5-12 9s9 8 25 8c-8-2-18-9-13-17z"
                        ></path>
                      </g>
                      <g id="glasses_1_">
                        <g id="glassshadow" fill="#F89F71">
                          <path d="M760 281l-16 8 2 3 2 4 3-8c0-2 10-6 10-6l-1-1zM737 297c-1-3-3-3-3-3l5-3-2 6z"></path>
                        </g>
                        <g id="galssbody" fill="#212121">
                          <path d="M762 278l-29 13-3 1v2h4l29-14-1-2"></path>
                          <path d="M746 298c3-2 1-5 0-6-1-2-2-4-5-3-3 2-1 5 0 6s4 4 5 3zM732 294c2-1 4 1 5 3s2 3 0 5-4-1-5-3-2-3 0-5z"></path>
                        </g>
                      </g>
                    </g>
                    <g id="Front_arm">
                      <g id="lowerarm">
                        <path
                          fill="#F89F71"
                          d="M751 386h-2c-5 0-36-13-39-14s-10-1-12 1l-6 7h-14l11-13c2-2 7-4 13-3l46 6s7 14 3 16z"
                        ></path>
                        <path
                          id="highlights"
                          fill="#F68E5A"
                          d="M702 365c-6-1-11 1-13 3l-11 12h7l8-8c4-5 14-7 14-7h-5z"
                        ></path>
                      </g>
                      <path
                        fill="#F89F71"
                        d="M788 319c16 7 0 20-4 25l-25 33c-2 3-4 7-8 9l-3-16 19-41c4-8 10-15 21-10z"
                      ></path>
                      <path
                        fill="#F68E5A"
                        d="M788 319c-11-5-17 2-21 10l-9 19s12-22 22-26c3-1 5-3 8-3z"
                      ></path>
                    </g>
                  </g>
                </g>
                <g id="Laptop">
                  <path
                    fill="white"
                    d="M647 339h7c2 0 3 1 4 3l15 38h38s-1 6-10 6h-31l-23-47z"
                  ></path>
                </g>
                <g id="Desk">
                  <path
                    fill="lightgray"
                    d="M369 386h178v10H369zM547 386h220v10H547z"
                  ></path>
                  <path fill="lightgray" d="M548 396h9v154h-9z"></path>
                </g>
                <g id="flowerpot">
                  <g id="plants"></g>
                </g>
                <g id="Man__x2F__chair__x2F__screen">
                  <path
                    id="chairbackbar"
                    fill="white"
                    d="M368 468h10v76h-10z"
                  ></path>
                  <path
                    id="keyboard"
                    fill="#D2D2D3"
                    d="M507 380c3 0 4 2 1 4l-3 2h-55s4-6 9-6h48z"
                  ></path>
                  <g id="man">
                    <g id="man-body">
                      <g id="legs">
                        <g id="backleg">
                          <path
                            id="foot"
                            fill="#BCBCBD"
                            d="M365 513l18-4 6 12s-1 15 6 22l10 5c-1 2-18 2-20 2l-14-9c-6-6-10-22-6-28z"
                          ></path>
                          <path
                            id="bottombackleg"
                            fill="#413C69"
                            d="M384 509s45-10 45-16c0-4-7-7-6-10 5-9 24-13 30-3 5 8 0 27-9 29l-55 12-5-12z"
                          ></path>
                          <path
                            id="topbbackleg"
                            fill="#413C69"
                            d="M415 474l-26-34c1 0-10-11 12-11s33 4 40 10 14 53 11 60-21-4-28-14l-9-11z"
                          ></path>
                        </g>
                        <g id="Front-leg">
                          <path
                            id="frontfoot"
                            fill="#BCBCBD"
                            d="M446 529v21l40-1 2-9s-12 1-20-3-9-8-9-8h-13z"
                          ></path>
                          <g id="bot">
                            <path
                              fill="#413C69"
                              d="M459 529c5-15 21-89 20-95s-8-18-18-8-19 0-18 26l3 77h13z"
                            ></path>
                            <path
                              id="shade_1_"
                              fill="#413C69"
                              d=" M444 488c7-15 19-35 11-42-5-4-13-2-13-2l2 44z"
                            ></path>
                          </g>
                          <g id="top">
                            <path
                              fill="#413C69"
                              d="M410 408c19 3 62 9 67 18s0 14 0 20-11-2-23-2l-99-2c-7 0-12-4-9-18 7-39 64-16 64-16"
                            ></path>
                            <path
                              id="shade"
                              fill="#413C69"
                              d=" M397 417c66 10 80 9 80 9s-6-14-70-18c-13 1-10 9-10 9z"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g id="head">
                        <g id="face">
                          <path
                            fill="#F89F71"
                            d="M411 281c0-12-8-25-19-16s-21 23-18 31 2 24 2 24c0 9 25 18 23 0s6-10 9-10 2 0 2-5l1-24z"
                          ></path>
                          <path
                            id="faceglow"
                            fill="#eda682"
                            d="M411 264c5 5 6 23 3 32s-6 5-5 1c1-2 3-23-2-29-5-5 4-4 4-4z"
                          ></path>
                        </g>
                        <g id="hair">
                          <path
                            fill="#585268"
                            d="M396 287c-2-9-1-14 3-15s15-21-1-22c-17 0-26-14-33 0s4 19 4 19-10 2-9 14 9 12 12 15c5 7 2 8 4 11 0 0 11-2 11-10s-4-15-1-18 8 1 7 19c-1 13 4 20 7 21s15 5 16 1 0-12-3-18c-1-3 2-9 0-11-3-2-4 6-8 5s-7-5-9-11z"
                          ></path>
                          <path
                            fill="#585268"
                            d="M399 272c4-1 10-1 14-8s7-19 2-22-1 9-17 8c-27-1-3 23 1 22z"
                            class="mankauf"
                          ></path>
                        </g>
                      </g>
                      <g id="torso">
                        <path
                          id="shirt"
                          fill="#FC1056"
                          d="M357 340l19-19h11c40 0 40 7 30 64-7 35-13 32-32 39-12 5-22 5-35 4s7-88 7-88z"
                        ></path>
                      </g>
                      <g id="arm">
                        <g id="Bluearmbot">
                          <path
                            fill="#F68E5A"
                            d="M487 380c-5-4-11-12-16-10-7 3-6 10 3 10h13z"
                          ></path>
                          <path
                            fill="#F68E5A"
                            d="M437 384l34-14-4 6-27 19z"
                          ></path>
                          <path
                            fill="#F89F71"
                            d="M440 395s20-16 26-19c4-2 10 1 11 4h-7c-5 6-14 20-22 23-1 1-8-8-8-8z"
                          ></path>
                        </g>
                        <path
                          id="Bluearmtop"
                          fill="#F89F71"
                          d="M404 360l31 40c5 4 9 4 10 4 10-1-4-5-5-11l-10-54c-28-6-26 21-26 21z"
                        ></path>
                        <path
                          id="armhighlight"
                          fill="#F68E5A"
                          d="M439 386l-15-37 7-7z"
                        ></path>
                        <path
                          id="toparm"
                          fill="#FC1056"
                          d="M406 322c22-5 26 18 24 21-3 8-26 19-26 19l-8-15c-8-18 10-25 10-25z"
                        ></path>
                        <path
                          id="toparmshade"
                          fill="#FC1056"
                          d="M418 334c-5-7-10-13-13-11-8 2-15 14-8 27 4 9 7 12 7 12s15-7 19-12c3-3-3-13-5-16z"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g id="Chair">
                    <path
                      id="foot_1_"
                      fill="#FC1056"
                      d="M337 550h73l-10-13h-52z"
                    ></path>
                    <g id="seat">
                      <path
                        fill="#FC1056"
                        d="M371 442l53 1c3 0 6 0 6 7 0 5-3 6-6 6h-22s-2 6-4 7h-14l-4 12h-15l-5-12-3-8 14-13z"
                      ></path>
                      <path
                        fill="#FC1056"
                        d="M326 449c0 4 3 7 11 7h47s-5-1-5-6c0-3 0-8 5-8h-48c-7 0-10 2-10 7z"
                      ></path>
                    </g>
                    <g id="backrest">
                      <path
                        fill="white"
                        d="M349 340c12 0 19-2 20 8l7 41c2 14 4 29-18 29 7-5 12-7 12-10 0 0-6-56-12-61l-9-7z"
                      ></path>
                      <path
                        fill="#FC1056"
                        d="M318 340c-8 0-12 5-10 17l8 48c2 8 5 13 14 13h29s14-2 12-19-6-32-8-45-7-14-14-14h-31z"
                      ></path>
                      <path
                        fill="#dbd9fa"
                        d="M332 376c-6 0-12-1-9 11l5 24c1 5 1 6 8 6h19s7 1 5-8l-5-25c-1-5-1-8-9-8h-14z"
                      ></path>
                      <path
                        fill="#36474A"
                        d="M345 395l2 1 9 49c1 6 5 11 7 12s2 6 2 6-8-2-10-3-7-25-7-25l-3-28-2-11 2-1z"
                      ></path>
                      <path
                        fill="#FC1056"
                        d="M332 395l9 51c1 8 3 16 13 17h11s-7-3-9-6c-4-4-7-28-7-28l-4-34h-13z"
                      ></path>
                    </g>
                  </g>
                  <g id="Man_screen">
                    <g class="redskmove">
                      <path
                        fill="white"
                        d="M574 360c0 2-2 4-4 4h-89c-2 0-4-2-4-4v-69c0-2 2-4 4-4h89c2 0 4 2 4 4v69z"
                        class="redscreen"
                      ></path>
                    </g>
                    <g class="greenscrmove">
                      <g class="greenscreen">
                        <path
                          fill="white"
                          d="M523 337c0 2-2 4-4 4h-68c-2 0-4-2-4-4v-46c0-2 2-4 4-4h68c2 0 4 2 4 4v46z"
                        ></path>
                        <path
                          fill="#FC1056"
                          d="M517 307c0 2-2 4-4 4h-51c-2 0-4-2-4-4v-4c0-2 2-4 4-4h51c2 0 4 2 4 4v4z"
                        ></path>
                        <path
                          fill="#FC1056"
                          d="M492 326c0 2-2 4-4 4h-26c-2 0-4-2-4-4v-2c0-2 2-4 4-4h26c2 0 4 2 4 4v2z"
                        ></path>
                      </g>
                    </g>
                    <g class="screenbutton">
                      <circle cx="523" cy="314" r="18" fill="#FC1056"></circle>
                      <path fill="white" d="M523 309l-4 8h8z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </ScrollAnimation>

          <div className="flex z-30 flex-col md:w-1/2 p-4">
            <ScrollAnimation
              animateIn="bounceInRight"
              duration={2.3}
              delay={200}
            >
              <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-6 gap-3 py-4">
                <div className="flex justify-center items-center">
                  <FaReact className="text-blue-500 text-4xl md:text-7xl" />
                </div>
                <div className="flex justify-center items-center">
                  <FaHtml5 className="text-orange-600 text-4xl md:text-7xl" />
                </div>
                <div className="flex justify-center items-center">
                  <FaCss3Alt className="text-blue-400 text-4xl md:text-7xl" />
                </div>
                <div className="flex justify-center items-center">
                  <FaJs className="text-yellow-500 text-4xl md:text-7xl" />
                </div>
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    className="p-1 md:text-4xl"
                    style={{
                      transform: "rotate(360deg)",
                      color: "rgb(233, 78, 50)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91s.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69s.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91M12 19.11c-3.92 0-7.109-3.19-7.109-7.11s3.19-7.11 7.11-7.11a7.13 7.13 0 0 1 6.156 3.553l-3.076 1.78a3.57 3.57 0 0 0-3.08-1.78A3.56 3.56 0 0 0 8.444 12A3.56 3.56 0 0 0 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.078 1.78A7.14 7.14 0 0 1 12 19.11m7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center">
                  <SiTailwindcss className="text-cyan-500 text-7xl" />
                </div>
              </div>

              <p className="text-sm text-left md:text-lg text-gray-400 leading-8 mb-4 tracking-widest">
                <span className="text-sm md:text-2xl">⚡</span> React.js
                Developer passionate about dynamic web applications and
                intuitive UIs.
              </p>
              <p className="text-sm text-left md:text-lg text-gray-400 leading-8 mb-4 tracking-widest">
                <span className="text-sm md:text-2xl">⚡</span> Proficient in
                HTML, CSS, and JavaScript, with experience in C++.
              </p>
              <p className="text-sm text-left md:text-lg text-gray-400 leading-8 mb-4 tracking-widest">
                <span className="text-sm md:text-2xl">⚡</span> Always excited
                to learn new tools and follow trends.
              </p>
              {/* <p className="text-sm text-left md:text-lg text-gray-400 leading-8 mb-4 tracking-widest">
              <span className="text-sm md:text-2xl">⚡</span> Strong problem-solving
              skills, focused on delivering efficient and effective solutions.
            </p>
            <p className="text-sm text-left md:text-lg text-gray-400 leading-8 mb-4 tracking-widest">
              <span className="text-sm md:text-2xl">⚡</span> Committed to writing clean,
              maintainable code and following best practices.
            </p> */}

              {/* <AiFillThunderbolt className="text-yellow-400" />  */}
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
