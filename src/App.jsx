import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./page/Home";
// import ParticlesComponent from "./Components/Particles";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App relative min-h-screen overflow-x-hidden">
      <Router>
        <div className="relative h-full w-full" style={{ backgroundColor: "rgb(29, 29, 29)" }}>
          {/* Particles component as the background */}
          
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0"></div> {/* Ensure particles are at the back */}
          <Navbar />
          <div className="relative z-10"> {/* Ensure content is above particles */}
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
