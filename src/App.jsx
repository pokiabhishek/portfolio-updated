import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./page/Home";
import ParticlesComponent from "./Components/Particles";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="App relative min-h-screen overflow-x-hidden">
      <Router>
        <ParticlesComponent id="particles" />
        <Navbar />

        <div className="container mx-auto sm:max:px-5">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add additional routes here as needed */}
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
