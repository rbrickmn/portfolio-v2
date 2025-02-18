import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src="riley_portrait.png" // Replace with your actual profile image
          alt="Riley Brickman"
          className="w-96 h-96 m-4 rounded-box shadow-lg object-cover"
        />

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Hi there, I'm <span className="text-primary">Riley Brickman</span>{" "}
            👋
          </h1>
          <p className="py-6 text-lg">
            A{" "}
            <span className="text-primary font-semibold">
              front-end developer
            </span>{" "}
            passionate about molding ideas into breathtaking digital
            experiences.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="btn btn-primary">Contact me</button>
            <button className="btn btn-outline btn-secondary">
              <Link to="/projects">View my work</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
