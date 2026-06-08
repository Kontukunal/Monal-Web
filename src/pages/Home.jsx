import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Showreel from "../components/Showreel";
import ShowreelModal from "../components/ShowreelModal";
import Brands from "../components/Brands";
import ContentLibrary from "../components/ContentLibrary";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import { useUiAnimations } from "../hooks/useUiAnimations";

const Home = () => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  /* Activates the data-attribute driven scroll/interaction engine
     across every section once the page has mounted. */
  useUiAnimations();

  return (
    <>
      <Header />
      <Hero />
      <Showreel setShowreelOpen={setShowreelOpen} />
      {showreelOpen && <ShowreelModal setShowreelOpen={setShowreelOpen} />}
      <ContentLibrary />
      <Brands />
      <Services />
      <About />
      <Team />
      <Discover />
      <Footer />
    </>
  );
};

export default Home;
