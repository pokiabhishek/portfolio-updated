import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./page/Home";
import AnimatedCursor from "react-animated-cursor";
// import ParticlesComponent from "./Components/Particles";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App relative min-h-screen overflow-x-hidden">
      <AnimatedCursor
        innerSize={6}
        outerSize={25}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgb(252, 16, 86)",
        }}
        outerStyle={{
          border: "3px solid rgb(252, 16, 86)",
        }}
      />
      <Router>
        <div
          className="relative h-full w-full"
          style={{ backgroundColor: "rgb(29, 29, 29)" }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0"></div>
          <Navbar />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
