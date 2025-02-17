import { useEffect } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";

const Projects = () => {
  // Adjusts the tab title based on location
  useEffect(() => {
    // Set the tab title
    document.title = "Riley Brickman | Projects";

    // Reset the title when the component unmounts
    return () => {
      document.title = "Riley Brickman | Front-End Engineer";
    };
  }, []);

  return (
    <>
      <Navbar />

      <ProjectList />
    </>
  );
};

export default Projects;
