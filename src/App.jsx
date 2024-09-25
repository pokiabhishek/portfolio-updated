import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from "./Components/Skills";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 w-full overflow-x-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <div className="container mx-auto sm:max:px-5">
        <Hero />
        <About />
        <Project />
        <Skills/>
        <Services />
      </div>
      {/* <h /> */}
      <Footer />
    </div>
  );
}

export default App;
