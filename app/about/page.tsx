"use client";

export default function AboutPage() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            3rd-Year Engineering Student · Aspiring Full Stack Developer
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="row g-4 mt-4">
          {/* WHO I AM */}
          <div className="col-md-4">
            <div className="about-card h-100">
              <div className="card-icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <h3>Who I Am</h3>
              <p>
                I’m passionate about turning ideas into real-world web
                applications. My primary focus is the MERN stack along with Java
                and Spring Boot, building projects that emphasize clean
                architecture and problem-solving.
              </p>
            </div>
          </div>

          {/* TECH SKILLS */}
          <div className="col-md-4">
            <div className="about-card h-100">
              <div className="card-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Technical Skills</h3>
              <ul className="skill-tags">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
                <li>Git & GitHub</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="col-md-4">
            <div className="about-card h-100">
              <div className="card-icon">
                <i className="fa-solid fa-people-group"></i>
              </div>
              <h3>Soft Skills</h3>
              <ul className="skill-tags soft">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
                <li>Communication</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-5">
          <h3 className="text-center fw-bold mb-4 d-flex justify-content-center align-items-center gap-2">
            <i className="fa-solid fa-graduation-cap text-primary"></i>
            Education
          </h3>

          <div className="position-relative">
            {/* vertical line */}
            <div
              className="position-absolute top-0 bottom-0 bg-primary opacity-25"
              style={{
                width: "4px",
                left: "7px", // EXACT center of 15px dot
                transform: "translateX(-50%)",
              }}
            />

            {/* ITEM */}
            <div className="d-flex gap-4 mb-4">
              <span
                className="bg-primary rounded-circle"
                style={{ width: "15px", height: "15px", zIndex: 1 }}
              />

              <div className="card border-0 shadow-sm rounded-4 p-4 w-100">
                <h5 className="fw-bold mb-1">B.E. in AI & Data Science</h5>
                <p className="text-muted mb-1">
                  Terna Engineering College, Nerul
                </p>
                <span className="text-primary fw-semibold small">
                  2024 – 2027
                </span>
              </div>
            </div>

            {/* ITEM */}
            <div className="d-flex gap-4 mb-4">
              <span
                className="bg-primary rounded-circle"
                style={{ width: "15px", height: "15px", zIndex: 1 }}
              />

              <div className="card border-0 shadow-sm rounded-4 p-4 w-100">
                <h5 className="fw-bold mb-1">
                  Diploma in Information Technology
                </h5>
                <p className="text-muted mb-2">Government Polytechnic Mumbai</p>

                <div className="d-flex align-items-center gap-2">
                  <span className="text-primary fw-semibold small">
                    2021 – 2024
                  </span>
                  <span className="badge bg-primary rounded-pill">93.42%</span>
                </div>
              </div>
            </div>

            {/* ITEM */}
            <div className="d-flex gap-4">
              <span
                className="bg-primary rounded-circle"
                style={{ width: "15px", height: "15px", zIndex: 1 }}
              />

              <div className="card border-0 shadow-sm rounded-4 p-4 w-100">
                <h5 className="fw-bold mb-1">Secondary School Certificate</h5>
                <p className="text-muted mb-2">K.E.M High School</p>

                <div className="d-flex align-items-center gap-2">
                  <span className="text-primary fw-semibold small">2021</span>
                  <span className="badge bg-primary rounded-pill">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
