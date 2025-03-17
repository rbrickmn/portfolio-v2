import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import SkeletonLoader from "./SkeletonLoader";

const projects = [
  {
    title: "Regex Playground",
    desc: "A playground for regex",
    image:
      "https://i.ibb.co/KxgY5348/Screen-Shot-2025-03-17-at-10-13-18-AM.png",
    techStack: ["React", "Tailwind CSS", "Vite"],
    link: "https://regex-playground-gray.vercel.app/",
    type: "web-app",
  },
  {
    title: "SyntaxSprint",
    desc: "The typing game for programmers!",
    image:
      "https://camo.githubusercontent.com/4a2711873e6b14cafa27aad9fd3403024c8d872ee1b86aff30a436395076fc66/68747470733a2f2f692e6962622e636f2f643456574c506e6d2f657a6769662d36613363656164396438326437342d657a6769662d636f6d2d766964656f2d746f2d6769662d636f6e7665727465722e676966",
    techStack: ["React", "CSS", "Marked.js", "Vite"],
    link: "https://syntaxsprint-app.vercel.app/",
    type: "web-app",
  },
  {
    title: "MixMaster",
    desc: "Create Spotify playlists with ease.",
    image:
      "https://camo.githubusercontent.com/ff637ad98b205c5f9b8c4baaf4037b4238c2000a5673fa2d366117eccd4baef0/68747470733a2f2f692e6962622e636f2f4b3671305839302f6d69786d61737465722d657a6769662d636f6d2d766964656f2d746f2d6769662d636f6e7665727465722e676966",
    techStack: ["React", "CSS", "Spotify API"],
    link: "https://github.com/rbrickmn/mixmaster-app",
    type: "web-app",
  },
  {
    title: "MouseTrack",
    desc: "Mouse performance analyzer",
    image: "/projects/mouse-track-screenshot.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://mousetrack-app.vercel.app/",
    type: "web-app",
  },
  {
    title: "MarkdownLens (BETA)",
    desc: "A simple, lightweight markdown editor/viewer.",
    image: "/projects/mdlens-screenshot.png",
    techStack: ["React", "Redux", "Giphy API"],
    link: "https://md-lens.vercel.app/",
    type: "web-app",
  },
];

const ProjectList = () => {
  const [selectedType, setSelectedType] = useState("all-projects");
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);

  // Simulate API fetch with loading state
  useEffect(() => {
    setLoading(true);
    // In a real app, this would be a fetch() call
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
