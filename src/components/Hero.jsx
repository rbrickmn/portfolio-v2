import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <div className="min-h-[85vh] relative overflow-hidden">
      
      <div className="container mx-auto px-4 py-8 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between min-h-[85vh]">
          {/* Content section */}
          <div className="text-center md:text-left max-w-xl md:w-1/2 z-10 mb-8 md:mb-0">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-medium text-primary mb-2 tracking-wider">FRONT-END DEVELOPER</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  Hi there, I'm <span className="text-primary">Riley Brickman</span>{" "}
                  👋
                </h1>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed">
                I'm passionate about molding ideas into breathtaking digital
                experiences with clean code and beautiful design.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
                <button 
                  className="btn btn-primary btn-lg shadow-md" 
                  onClick={handleContactClick}
                >
                  Contact me
                </button>
                <button 
                  className="btn btn-outline btn-secondary btn-lg shadow-md" 
                  onClick={handleProjectsClick}
                >
                  View my work
                </button>
              </div>
            </div>
          </div>
          
          {/* Image section with enhanced styling */}
          <div className="relative md:w-1/2 flex justify-center md:justify-end z-10">
            <div className="relative">
              {/* Decorative elements - enhanced glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-md"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-md"></div>
              
              {/* Main image with frame - removed overlay */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-base-100 shadow-2xl">
                <img
                  src="riley_portrait.jpg"
                  alt="Riley Brickman"
                  className="w-80 h-80 md:w-[450px] md:h-[450px] object-top object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
