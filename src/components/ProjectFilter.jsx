import React from "react";

const ProjectFilter = ({ selectedType, setSelectedType }) => {
  const filters = [
    "all-projects",
    "chrome-extension",
    "web-app",
    "photography",
  ];

  // Capitalize first letter of each filter
  const formatFilterText = (text) =>
    text
      .split("-") // Split words by "-"
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
      .join(" "); // Join words back with space

  return (
    <div className="flex justify-center gap-4 my-6">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`btn ${
            selectedType === filter ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setSelectedType(filter)}
        >
          {formatFilterText(filter)}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
