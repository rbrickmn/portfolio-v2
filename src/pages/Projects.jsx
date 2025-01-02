import { useEffect } from "react";
import React from "react";
import Navbar from "../components/Navbar";

const Projects = () => {
  // Adjusts the tab title based on location
  useEffect(() => {
    document.title = "Riley Brickman | Projects"; // Set the tab title
    return () => {
      document.title = "Riley Brickman | Front-End Engineer"; // Reset the title when the component unmounts
    };
  }, []);

  return <Navbar />;
};

export default Projects;
