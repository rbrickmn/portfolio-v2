import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeInWrapper from "../components/FadeInWrapper";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a specific section
    if (location.state?.scrollToAbout) {
      setTimeout(() => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title);
      }, 100);
    } else if (location.state?.scrollToContact) {
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title);
      }, 100);
    } else if (!location.state) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <FadeInWrapper>
        <Hero />
      </FadeInWrapper>
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
