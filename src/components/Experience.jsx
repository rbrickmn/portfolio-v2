import React from "react";
import TechMarquee from "./TechMarquee";

const Experience = () => {
  return (
    <section className="py-16 bg-base-100">
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
                    <span className="font-bold">
                      Front-End Developer – Personal Projects & Open Source
                    </span>
                    <span className="text-primary">2022 - Present</span>
                  </div>
                  {/* <span className="text-sm text-primary font-medium">
                    WebDesignCo
                  </span> */}
                  <p className="mt-2">
                    Developed and maintained personal projects using HTML, CSS,
                    and JavaScript frameworks like React, focusing on responsive
                    design and modern development practices. Actively building a
                    portfolio to transition into professional work.
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
              <div>
                <h4 className="text-2xl font-semibold mb-2">SPECIALTY</h4>
                <p className="text-xl">Front-End Development, UI/UX Design</p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-2">EDUCATION</h4>
                <p className="text-xl flex items-center gap-2">
                  <span className="text-primary">🎓</span> A.A.S, Computer
                  Technology
                </p>
                <p className="text-xl flex items-center gap-2">
                  <span className="text-primary">📜</span> Career Path,
                  Front-End Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
