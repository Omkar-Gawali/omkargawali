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
        <div className="education-section">
          <h3 className="subheading text-center">
            <i className="fa-solid fa-graduation-cap"></i> Education
          </h3>

          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="edu-card h-100">
                <h4>B.E. in AI & Data Science</h4>
                <p className="edu-meta">Terna Engineering College, Nerul</p>
                <span className="edu-duration">2024 – 2027</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="edu-card h-100">
                <h4>Diploma in Information Technology</h4>
                <p className="edu-meta">Government Polytechnic Mumbai</p>
                <span className="edu-duration">2021 – 2024</span>
                <span className="edu-badge">93.42%</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="edu-card h-100">
                <h4>Secondary School Certificate</h4>
                <p className="edu-meta">K.E.M High School</p>
                <span className="edu-duration">2021</span>
                <span className="edu-badge">94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
