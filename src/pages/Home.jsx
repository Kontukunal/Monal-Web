import React, { useState } from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Showreel from "../components/Showreel";
import ShowreelModal from "../components/ShowreelModal";
import Brands from "../components/Brands";
import Partners from "../components/Partners";
import ContentLibrary from "../components/ContentLibrary";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
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
      <Intro />
      <Showreel setShowreelOpen={setShowreelOpen} />
      {showreelOpen && <ShowreelModal setShowreelOpen={setShowreelOpen} />}
      <About />
      <ContentLibrary />
      <Brands />
      <Partners />
      <Services />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
