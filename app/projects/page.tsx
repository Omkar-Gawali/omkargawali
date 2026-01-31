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
          <div className="col-12 col-md-6 col-lg-3">
            <article className="project-card h-100">
              <div className="project-thumb">
                <img
                  src="/img/mern-pos-app.png"
                  alt="POS System"
                  className="img-fluid"
                />
              </div>

              <div className="project-body d-flex flex-column p-4 h-100">
                <h5 className="fw-semibold mb-2">POS System</h5>

                <p className="text-muted small mb-3">
                  Full-stack POS system with inventory, billing, and role-based
                  access for small businesses.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-info text-dark">React</span>
                  <span className="badge bg-info text-dark">Node.js</span>
                  <span className="badge bg-info text-dark">Express</span>
                  <span className="badge bg-info text-dark">MongoDB</span>
                  <span className="badge bg-info text-dark">JWT</span>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://mern-pos-app.vercel.app"
                    target="_blank"
                    className="project-link d-inline-flex align-items-center gap-1"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* PROJECT 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <article className="project-card h-100">
              <div className="project-thumb">
                <img
                  src="/img/mern-mqa-app.png"
                  alt="Math Quiz Generator"
                  className="img-fluid"
                />
              </div>

              <div className="project-body d-flex flex-column p-4 h-100">
                <h5 className="fw-semibold mb-2">Math Quiz Generator</h5>

                <p className="text-muted small mb-3">
                  Interactive quiz platform generating random math problems with
                  scoring and leaderboard support.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-info text-dark">React</span>
                  <span className="badge bg-info text-dark">JavaScript</span>
                  <span className="badge bg-info text-dark">Context API</span>
                  <span className="badge bg-info text-dark">LocalStorage</span>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://mern-mqa-app.vercel.app"
                    target="_blank"
                    className="project-link d-inline-flex align-items-center gap-1"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* PROJECT 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <article className="project-card h-100">
              <div className="project-thumb">
                <img
                  src="/img/mern-ai-assistant.png"
                  alt="AI Text Assistant"
                  className="img-fluid"
                />
              </div>

              <div className="project-body d-flex flex-column p-4 h-100">
                <h5 className="fw-semibold mb-2">AI Text Assistant</h5>

                <p className="text-muted small mb-3">
                  AI-powered MERN app using Groq API for fast, intelligent
                  conversational responses.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-info text-dark">React</span>
                  <span className="badge bg-info text-dark">Node.js</span>
                  <span className="badge bg-info text-dark">Express</span>
                  <span className="badge bg-info text-dark">Groq API</span>
                  <span className="badge bg-info text-dark">REST APIs</span>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://mern-ai-assistant-orpin.vercel.app"
                    target="_blank"
                    className="project-link d-inline-flex align-items-center gap-1"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* PROJECT 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <article className="project-card h-100">
              <div className="project-thumb">
                <img
                  src="/img/mern-dev-directory.png"
                  alt="Developer Directory"
                  className="img-fluid"
                />
              </div>

              <div className="project-body d-flex flex-column p-4 h-100">
                <h5 className="fw-semibold mb-2">Developer Directory</h5>

                <p className="text-muted small mb-3">
                  Secure developer directory with authentication, profiles, and
                  full CRUD functionality.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-info text-dark">React</span>
                  <span className="badge bg-info text-dark">JWT</span>
                  <span className="badge bg-info text-dark">MongoDB</span>
                  <span className="badge bg-info text-dark">Auth</span>
                  <span className="badge bg-info text-dark">REST APIs</span>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://mern-dev-directory.vercel.app"
                    target="_blank"
                    className="project-link d-inline-flex align-items-center gap-1"
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
