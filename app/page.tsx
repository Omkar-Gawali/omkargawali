"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const texts = [
    "MERN Stack Developer",
    "Java Full Stack Developer",
    "Full Stack Engineer",
  ];

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const pauseAfterType = 1200;

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(
        () => setDisplayText(currentText.slice(0, displayText.length + 1)),
        typingSpeed,
      );
    } else if (!isDeleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterType);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(
        () => setDisplayText(currentText.slice(0, displayText.length - 1)),
        deletingSpeed,
      );
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* LEFT */}
          <div className="col-lg-7 hero-content">
            <p className="hero-greeting">
              <i className="fa-solid fa-hand-wave"></i> Hi, I’m
            </p>

            <h1 className="hero-title">Omkar Gawali</h1>

            <p className="hero-subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </p>

            <p className="hero-description">
              MERN & Java Full Stack Developer with hands-on experience in
              building scalable web applications using React, Next.js, Node.js,
              Spring Boot, and MongoDB. Currently pursuing B.E. in AI & Data
              Science and focused on real-world, production-ready projects.
            </p>

            {/* ROLE HIGHLIGHTS */}
            <div className="hero-highlights">
              <span>
                <i className="fa-solid fa-code"></i> Full Stack
              </span>
              <span>
                <i className="fa-solid fa-database"></i> Backend APIs
              </span>
              <span>
                <i className="fa-solid fa-rocket"></i> Deployment
              </span>
            </div>

            {/* CTA */}
            <div className="hero-actions">
              <a href="/projects" className="btn primary-btn">
                <i className="fa-solid fa-diagram-project"></i> View Projects
              </a>
              <a
                href="/assests/Gawali_Omkar_Resume.pdf"
                target="_blank"
                className="btn secondary-btn"
              >
                <i className="fa-solid fa-file-arrow-down"></i> Resume
              </a>
            </div>

            {/* SOCIAL */}
            <div className="hero-socials">
              <a href="https://github.com/Omkar-Gawali" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-ashruba-gawali-33855a22b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:omkargawali702@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className="profile-card">
              <div className="profile-circle">
                <span>OG</span>
              </div>

              <div className="profile-stats">
                <div>
                  <strong>10+</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>2</strong>
                  <span>Internships</span>
                </div>
                <div>
                  <strong>2027</strong>
                  <span>Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
