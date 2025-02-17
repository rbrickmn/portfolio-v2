import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SyntaxSprint",
    image: "/images/syntaxsprint.png",
    techStack: ["React", "Tailwind", "Vite"],
    link: "https://syntaxsprint-app.vercel.app/",
  },
  {
    title: "MDlens",
    image: "/images/mdlens.png",
    techStack: ["React", "Marked.js", "Tailwind"],
    link: "https://mdlens.com",
  },
  {
    title: "Movie Guesser",
    image: "/images/movieguesser.png",
    techStack: ["React", "Redux", "Giphy API"],
    link: "https://movieguesser.com",
  },
  {
    title: "Movie Guesser",
    image: "/images/movieguesser.png",
    techStack: ["React", "Redux", "Giphy API"],
    link: "https://movieguesser.com",
  },
  {
    title: "Movie Guesser",
    image: "/images/movieguesser.png",
    techStack: ["React", "Redux", "Giphy API"],
    link: "https://movieguesser.com",
  },
];

const ProjectList = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
