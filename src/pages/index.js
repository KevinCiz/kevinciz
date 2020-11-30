import React, { useState } from "react";
import Navbar from "../components/Navbar/";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import { hero, homeObjOne, contact } from "./../components/InfoSection/Data";
import Skills from "../components/SkillsSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <InfoSection {...hero} />
      <InfoSection {...homeObjOne} />
      <Services />
      <Skills />
      <InfoSection {...contact} />
      <Footer />
    </div>
  );
};

export default Home;
