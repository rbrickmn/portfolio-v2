import React from "react";

const TechMarquee = () => {
  // Tech stack logos with names and colors
  const technologies = [
    { name: "HTML5", logo: "/logos/html5.svg", color: "bg-white" },
    { name: "CSS3", logo: "/logos/css3.svg", color: "bg-white" },
    { name: "JavaScript", logo: "/logos/javascript.svg", color: "bg-white" },
    { name: "React", logo: "/logos/react.svg", color: "bg-white" },
    { name: "WordPress", logo: "/logos/wordpress.svg", color: "bg-white" },
    { name: "GitHub", logo: "/logos/github.svg", color: "bg-white" },
    { name: "Git", logo: "/logos/git.svg", color: "bg-white" },
    { name: "VS Code", logo: "/logos/vscode.svg", color: "bg-white" },
    { name: "Bootstrap", logo: "/logos/bootstrap.svg", color: "bg-white" },
    { name: "Tailwind", logo: "/logos/tailwind.svg", color: "bg-white" },
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden bg-green-100 rounded-xl p-6">
      {/* Infinite scrolling container */}
      <div className="flex animate-marquee">
        {duplicatedTechnologies.map((tech, index) => (
          <div
          key={`${tech.name}-${index}`}
          className={`flex items-center justify-center mx-4 w-14 h-14 ${tech.color} rounded-lg shadow-sm shrink-0`}
        >
          <img src={tech.logo} alt={tech.name} className="w-12 h-12 shrink-0" />
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
