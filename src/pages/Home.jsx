import React from "react";
import LoomSection from "../components/LoomSection";
import KeyFeatures from "../components/KeyFeatures";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import ServicesGrid from "../components/ServicesGrid";

const Home = () => {
  return (
    <div>
      {/* <LoomSection />
      <KeyFeatures /> */}
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
    </div>
  );
};

export default Home;