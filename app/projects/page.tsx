"use client";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected projects showcasing my MERN stack and full-stack
            experience.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {/* PROJECT 1 */}
          <div className="col-md-6 col-lg-3">
            <article className="project-card h-100">
              <div className="project-thumb">
                <img src="/img/mern-pos-app.png" alt="POS System" />
              </div>

              <div className="project-body">
                <h3>POS System</h3>
                <p>
                  Full-stack Point of Sale system with inventory management and
                  billing, designed for small businesses.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://mern-pos-app.vercel.app"
                    target="_blank"
                    className="project-link"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* PROJECT 2 */}
          <div className="col-md-6 col-lg-3">
            <article className="project-card h-100">
              <div className="project-thumb">
                <img src="/img/mern-mqa-app.png" alt="Math Quiz Generator" />
              </div>

              <div className="project-body">
                <h3>Math Quiz Generator</h3>
                <p>
                  Interactive React application that generates random math
                  quizzes, tracks scores, and maintains a leaderboard.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://mern-mqa-app.vercel.app"
                    target="_blank"
                    className="project-link"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* PROJECT 3 */}
          <div className="col-md-6 col-lg-3">
            <article className="project-card h-100">
              <div className="project-thumb">
                <img src="/img/mern-ai-assistant.png" alt="AI Text Assistant" />
              </div>

              <div className="project-body">
                <h3>AI Text Assistant</h3>
                <p>
                  AI-powered MERN application integrated with the Groq API for
                  fast and intelligent conversational responses.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Groq API</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://mern-ai-assistant-orpin.vercel.app"
                    target="_blank"
                    className="project-link"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* PROJECT 4 */}
          <div className="col-md-6 col-lg-3">
            <article className="project-card h-100">
              <div className="project-thumb">
                <img
                  src="/img/mern-dev-directory.png"
                  alt="Developer Directory"
                />
              </div>

              <div className="project-body">
                <h3>Developer Directory</h3>
                <p>
                  Secure developer directory with authentication, profile
                  management, and CRUD operations.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>JWT</span>
                  <span>MongoDB</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://mern-dev-directory.vercel.app"
                    target="_blank"
                    className="project-link"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
