import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import LiftApp from "./components/sections/LiftApp";
import GluteGuide from "./components/sections/GluteGuide";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Contact />
        <Testimonials />
        <About />
        <LiftApp />
        <Services />
        <GluteGuide />
      </main>
      <Footer />
    </div>
  );
}

export default App;
