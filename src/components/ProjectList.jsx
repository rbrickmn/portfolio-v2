import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import SkeletonLoader from "./SkeletonLoader";
import { projects } from "../utils/projectData";

const ProjectList = () => {
  const [selectedType, setSelectedType] = useState("all-projects");
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);

  // Simulate API fetch with loading state
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProjectData(projects);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter projects by selected category
  const filteredProjects =
    selectedType === "all-projects"
      ? projectData
      : projectData.filter((project) => project.type === selectedType);

  return (
    <main
      className="container mx-auto px-6 min-h-screen"
      role="main"
      aria-label="Projects portfolio"
    >
      <h1 className="text-3xl font-bold text-center mb-4 mt-8">Projects</h1>
      <p className="text-xl text-center">View all my work here!</p>

      {/* Category filter buttons */}
      <ProjectFilter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {/* Skeleton loaders during fetch */}
      {loading ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="status"
          aria-label="Loading projects"
        >
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full h-64">
              <SkeletonLoader type="card" className="h-full" />
            </div>
          ))}
        </div>
      ) : (
        // Project grid or empty state
        <>
          {filteredProjects.length === 0 ? (
            <div
              className="flex justify-center items-center mt-16"
              role="alert"
            >
              <p className="text-gray-500 text-lg">
                Nothing to see here yet! Stay tuned :)
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
              role="grid"
              aria-label="Project grid"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default ProjectList;
