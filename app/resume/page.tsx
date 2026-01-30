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
                <h4>Web Developer Intern</h4>
                <span className="experience-meta">
                  Kiwi Connect Digital · Remote
                </span>
                <span className="experience-duration">Dec 2025 – Present</span>

                <ul>
                  <li>
                    Improved UI and responsiveness of a digital signage platform
                    and developed a React Native mobile application from
                    scratch.
                  </li>
                  <li>
                    Built and deployed a Next.js dental website with a
                    MERN-based admin panel using REST APIs.
                  </li>
                </ul>
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
                    Created structured C++ programming tutorials and learning
                    resources.
                  </li>
                  <li>
                    Used tools like Canva and ChatGPT to enhance course quality.
                  </li>
                  <li>
                    Collaborated with teams to deliver engaging educational
                    content.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="text-center mt-5">
          <a
            href="/assests/Gawali_Omkar.pdf"
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
