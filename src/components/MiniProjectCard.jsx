import React from "react";
import OptimizedImage from "./OptimizedImage";

const MiniProjectCard = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-full h-48 rounded-lg overflow-hidden shadow-lg block"
      aria-label={`View ${title} project`}
    >
      <div className="absolute inset-0 w-full h-full">
        <OptimizedImage
          src={image}
          alt={`Screenshot of ${title} project`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-lg font-bold text-center p-2">{title}</h3>
      </div>
    </a>
  );
};

export default MiniProjectCard;
