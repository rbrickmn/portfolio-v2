import React from "react";
import TechMarquee from "./TechMarquee";

const Experience = () => {
  return (
    <section id="about" className="py-16 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - About Me */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary uppercase">
              ABOUT ME
            </h2>
            <h3 className="text-4xl font-bold flex items-center gap-2">
              Who I am <span className="text-primary">🚀</span>
            </h3>

            <p className="text-lg">
              As a junior front-end developer, I am skilled in HTML, CSS,
              JavaScript, and Bootstrap. I have a meticulous eye for design
              which allows me to create beautiful, responsive websites from the
              ground up. My specialty involves utilizing UI/UX best practices
              alongside clean, efficient code to deliver impeccable digital
              experiences.
            </p>

            <div className="pt-4">
              <h4 className="text-2xl font-semibold mb-4">Experience</h4>
              <ul className="space-y-4">
                <li className="p-4 bg-base-200 rounded-lg shadow-md">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Front-End Developer</span>

                    <span className="text-primary">2022 - Present</span>
                  </div>
                  <span className="text-sm text-primary font-medium">
                    Personal Projects & Open Source
                  </span>
                  <p className="mt-2">
                    Developed and maintained personal projects using HTML, CSS,
                    and JavaScript frameworks like React, focusing on responsive
                    design and modern development practices. Actively building a
                    portfolio to transition into professional work.
                  </p>
                </li>

                <li className="p-4 bg-base-200 rounded-lg shadow-md">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Your Next Developer</span>

                    <span className="text-primary"></span>
                  </div>
                  <span className="text-sm text-primary font-medium">
                    Your Company Here!
                  </span>
                  <p className="mt-2">
                    I'm currently looking for a new opportunity! If you're
                    interested in hiring me, please reach out.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary uppercase">
              TECH STACK
            </h2>
            <h3 className="text-4xl font-bold flex items-center gap-2">
              What I'm good at <span className="text-primary">💻</span>
            </h3>

            {/* Tech Marquee */}
            <TechMarquee />

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-base-200 p-6 rounded-lg shadow-md transform transition-transform hover:scale-102">
                <h4 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-primary mr-2">⚡</span> SPECIALTY
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <p className="text-xl">Front-End Development</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <p className="text-xl">UI/UX Design</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <p className="text-xl">Responsive Web Design</p>
                  </div>
                </div>
              </div>

              <div className="bg-base-200 p-6 rounded-lg shadow-md transform transition-transform hover:scale-102">
                <h4 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-primary mr-2">🎓</span> EDUCATION
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <p className="text-xl font-medium">A.A.S, Computer Technology</p>
                    <p className="text-sm text-primary font-medium">Tri-County Technical College</p>
                    <p className="text-sm text-primary">2020 - 2022</p>
                    <p className="mt-1">Focused on network systems management and programming fundamentals</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <p className="text-xl font-medium">Career Path, Front-End Engineer</p>
                    <p className="text-sm text-primary font-medium">Codecademy</p>
                    <p className="text-sm text-primary">Jan. 2024 - Nov. 2024</p>
                    <p className="mt-1">Intensive program covering modern JavaScript frameworks and UI/UX principles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
