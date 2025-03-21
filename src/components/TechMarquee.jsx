import React from "react";

const TechMarquee = () => {
  // Tech stack logos with names and colors
  const technologies = [
    { name: "HTML5", logo: "/logos/html5.svg", color: "" },
    { name: "CSS3", logo: "/logos/css3.svg", color: "" },
    { name: "JavaScript", logo: "/logos/javascript.svg", color: "" },
    { name: "React", logo: "/logos/react.svg", color: "" },
    { name: "WordPress", logo: "/logos/wordpress.svg", color: "" },
    { name: "GitHub", logo: "/logos/github.svg", color: "" },
    { name: "Git", logo: "/logos/git.svg", color: "" },
    { name: "VS Code", logo: "/logos/vscode.svg", color: "" },
    { name: "Bootstrap", logo: "/logos/bootstrap.svg", color: "" },
    { name: "Tailwind", logo: "/logos/tailwind.svg", color: "" },
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 shadow-md rounded-xl p-6">
      {/* Infinite scrolling container */}
      <div className="flex animate-marquee">
        {duplicatedTechnologies.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className={`flex items-center justify-center mx-4 w-14 h-14 ${tech.color} rounded-lg shrink-0`}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-14 h-14 shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
