import React from "react";

const ProjectCard = ({ image, title, techStack, link, desc }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group">
      <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-lg shadow-lg overflow-hidden cursor-pointer">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Hover Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-white text-sm text-center">{desc}</p>
          <div className="flex gap-1 mt-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
