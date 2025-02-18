import React from "react";

const ProjectCard = ({ title, desc, image, techStack, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-full h-64 rounded-lg overflow-hidden shadow-lg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform transform group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay (Hidden by Default, Shows on Hover) */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{desc}</p>
        <div className="flex gap-2 mt-2">
          {techStack.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
