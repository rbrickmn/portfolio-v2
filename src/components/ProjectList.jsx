import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const projects = [
  {
    title: "SyntaxSprint",
    desc: "The typing game for programmers!",
    image:
      "https://camo.githubusercontent.com/4a2711873e6b14cafa27aad9fd3403024c8d872ee1b86aff30a436395076fc66/68747470733a2f2f692e6962622e636f2f643456574c506e6d2f657a6769662d36613363656164396438326437342d657a6769662d636f6d2d766964656f2d746f2d6769662d636f6e7665727465722e676966",
    techStack: ["React", "Tailwind", "Vite"],
    link: "https://syntaxsprint-app.vercel.app/",
    type: "web-app",
  },
  {
    title: "MixMaster",
    desc: "Create Spotify playlists with ease.",
    image:
      "https://camo.githubusercontent.com/ff637ad98b205c5f9b8c4baaf4037b4238c2000a5673fa2d366117eccd4baef0/68747470733a2f2f692e6962622e636f2f4b3671305839302f6d69786d61737465722d657a6769662d636f6d2d766964656f2d746f2d6769662d636f6e7665727465722e676966",
    techStack: ["React", "Marked.js", "Tailwind"],
    link: "https://github.com/rbrickmn/mixmaster-app",
    type: "web-app",
  },
  {
    title: "MouseTrack",
    desc: "Mouse performance analyzer",
    image: "public/projects/mouse-track-screenshot.png",
    techStack: ["React", "Redux", "Giphy API"],
    link: "https://mousetrack-app.vercel.app/",
    type: "web-app",
  },
  {
    title: "MarkdownLens (BETA)",
    desc: "A simple, lightweight markdown editor/viewer.",
    image: "public/projects/mdlens-screenshot.png",
    techStack: ["React", "Redux", "Giphy API"],
    link: "https://md-lens.vercel.app/",
    type: "web-app",
  },
];

const ProjectList = () => {
  const [selectedType, setSelectedType] = useState("all-projects");

  const filteredProjects =
    selectedType === "all-projects"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <div className="container mx-auto px-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-4 mt-8">Projects</h2>
      <p className="text-xl text-center">View all my work here!</p>
      <ProjectFilter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
