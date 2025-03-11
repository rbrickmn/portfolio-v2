import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-primary uppercase mb-2">
          CONTACT
        </h2>
        <h3 className="text-4xl font-bold flex items-center gap-2 mb-8">
          Get in touch <span className="text-primary">📬</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <p className="text-lg">
              Have a project in mind or want to discuss potential opportunities?
              I'm always open to new challenges and collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:rbrickmn@gmail.com"
                  className="link link-hover"
                >
                  rbrickmn@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.linkedin.com/in/riley-brickman-403537338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover"
                >
                  linkedin.com/in/riley-brickman-403537338/
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/Riley_Brickman_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                View Resume
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form or Additional Info */}
          <div className="bg-base-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Working Hours</h4>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 5:00 PM EST</span>
              </p>
              <p className="flex justify-between">
                <span>Weekend:</span>
                <span>Available for urgent matters</span>
              </p>
            </div>

            <div className="divider"></div>

            <h4 className="text-xl font-semibold mb-4">Current Status</h4>
            <div className="flex items-center gap-2">
              <div className="badge badge-success"></div>
              <span>Open to new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
