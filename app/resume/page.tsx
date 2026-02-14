"use client";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            A snapshot of my professional experience and background.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {/* SUMMARY */}
          <div className="col-md-6">
            <div className="resume-card h-100">
              <div className="resume-card-header">
                <i className="fa-solid fa-user-tie"></i>
                <h3>Professional Summary</h3>
              </div>

              <p>
                MERN Stack Developer with hands-on experience building and
                deploying full-stack web applications using React, Node.js,
                Express, MongoDB, and Next.js. Passionate about clean UI,
                scalable APIs, and solving real-world problems through modern
                JavaScript technologies.
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="col-md-6">
            <div className="resume-card h-100">
              <div className="resume-card-header">
                <i className="fa-solid fa-briefcase"></i>
                <h3>Experience</h3>
              </div>

              {/* EXPERIENCE ITEM */}
              <div className="experience-item">
                <h4>Content Creator Intern</h4>
                <span className="experience-meta">
                  Apptroid Technologies Pvt. Ltd. · Mumbai
                </span>
                <span className="experience-duration">Jan 2024 – May 2024</span>

                <ul>
                  <li>
                    Created 30+ structured C++ programming tutorials covering
                    core concepts such as OOP, STL, and problem solving
                    techniques.
                  </li>
                  <li>
                    Utilized Canva for content design and ChatGPT to enhance
                    clarity, structure, and explanation quality.
                  </li>
                  <li>
                    Improved learner engagement by presenting technical concepts
                    in a beginner-friendly format.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="text-center mt-5">
          <a
            href="/assests/Gawali_Omkar_Resume.pdf"
            target="_blank"
            className="btn resume-download-btn"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
