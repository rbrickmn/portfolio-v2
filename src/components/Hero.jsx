import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

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

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section 
      className="min-h-[85vh] relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 py-8 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between min-h-[85vh]">
          {/* Portrait section - mobile: top, desktop: right */}
          <div 
            className="relative md:w-1/2 flex justify-center md:justify-end z-10 order-first md:order-last mb-8 md:mb-0"
            role="img"
          >
            <div className="relative">
              {/* Decorative glows for extra visual interest */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-xl" aria-hidden="true"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-md" aria-hidden="true"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-md" aria-hidden="true"></div>
              
              {/* Portrait with container frame */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-base-100 shadow-2xl w-72 h-72 md:w-[450px] md:h-[450px]">
                <OptimizedImage
                  src="/riley_portrait.jpg"
                  alt="Portrait of Riley Brickman"
                  className="object-cover"
                  style={{ objectPosition: "center 0%" }}
                  sizes="(max-width: 768px) 288px, 450px"
                  blur={true}
                />
              </div>
            </div>
          </div>
          
          {/* Intro text and CTA buttons */}
          <div className="text-center md:text-left max-w-xl md:w-1/2 z-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-medium text-primary mb-2 tracking-wider">FRONT-END DEVELOPER</h2>
                <h1 
                  id="hero-title"
                  className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                >
                  Hi there, I'm <span className="text-primary">Riley Brickman</span>{" "}
                  <span role="img" aria-label="waving hand">👋</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed">
                I'm passionate about molding ideas into breathtaking digital
                experiences with clean code and beautiful design.
              </p>
              
              <div 
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4"
                role="navigation"
                aria-label="Primary navigation"
              >
                <button 
                  className="btn btn-primary btn-lg shadow-md" 
                  onClick={handleContactClick}
                  onKeyPress={(e) => handleKeyPress(e, handleContactClick)}
                  aria-label="Contact me"
                >
                  Contact me
                </button>
                <button 
                  className="btn btn-outline btn-secondary btn-lg shadow-md" 
                  onClick={handleProjectsClick}
                  onKeyPress={(e) => handleKeyPress(e, handleProjectsClick)}
                  aria-label="View my work"
                >
                  View my work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
