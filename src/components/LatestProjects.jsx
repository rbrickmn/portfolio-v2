import React from "react";
import { projects } from "../utils/projectData";
import MiniProjectCard from "./MiniProjectCard";

const LatestProjects = () => {
  const latestProjects = projects.slice(0, 3);

  return (
    <section id="latest-projects" className="py-10 bg-base-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestProjects.map((project, index) => (
            <MiniProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/projects" className="btn btn-primary">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
