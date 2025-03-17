import React from "react";
import OptimizedImage from "./OptimizedImage";

const ProjectCard = ({ title, desc, image, techStack, link }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article 
      className="relative group w-full h-64 rounded-lg overflow-hidden shadow-lg"
      role="article"
      aria-labelledby={`project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
        onKeyPress={handleKeyPress}
        aria-label={`View ${title} project - ${desc}`}
      >
        {/* Project screenshot background */}
        <div className="absolute inset-0 w-full h-full">
          <OptimizedImage
            src={image}
            alt={`Screenshot of ${title} project`}
            className="w-full h-full object-cover object-center"
            blur={true}
          />
        </div>

        {/* Info overlay - hidden until hover */}
        <div 
          className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity"
          role="contentinfo"
        >
          <h3 
            id={`project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-lg font-bold"
          >
            {title}
          </h3>
          <p className="text-sm">{desc}</p>
          <div 
            className="flex flex-wrap gap-2 mt-2"
            role="list"
            aria-label="Technologies used"
          >
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-700 px-2 py-1 rounded"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
};

export default ProjectCard;
