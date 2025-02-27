import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to the about section
    if (location.state?.scrollToAbout) {
      // Small timeout to ensure the page is fully loaded
      setTimeout(() => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
        // Clean up the state to avoid scrolling again on refresh
        window.history.replaceState({}, document.title);
      }, 100);
    } else if (!location.state) {
      // If there's no special state, scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

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
