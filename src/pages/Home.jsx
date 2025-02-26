import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import TechMarquee from "../components/TechMarquee";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;