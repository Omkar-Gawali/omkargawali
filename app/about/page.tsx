"use client";

export default function AboutPage() {
  const techSkills = [
    { icon: "fa-html5", label: "HTML", color: "#e34f26" },
    { icon: "fa-css3-alt", label: "CSS", color: "#1572b6" },
    { icon: "fa-js", label: "JavaScript", color: "#f7df1e" },
    { icon: "fa-react", label: "React", color: "#61dafb" },
    { icon: "fa-node-js", label: "Node.js", color: "#339933" },
    { icon: "fa-database", label: "MongoDB", color: "#22d3a5" },
    { icon: "fa-git-alt", label: "Git", color: "#f05032" },
    { icon: "fa-square-js", label: "Next.js", color: "#a78bfa" },
    { icon: "fa-server", label: "Express", color: "#9090b0" },
    { icon: "fa-code", label: "REST APIs", color: "#38bdf8" },
    { icon: "fa-vial", label: "Postman", color: "#f59e0b" },
  ];

  const softSkills = [
    { icon: "fa-lightbulb", label: "Problem Solving" },
    { icon: "fa-people-group", label: "Team Collaboration" },
    { icon: "fa-clock", label: "Time Management" },
    { icon: "fa-comments", label: "Communication" },
    { icon: "fa-arrows-rotate", label: "Adaptability" },
  ];

  const education = [
    {
      degree: "B.E. in AI & Data Science",
      school: "Terna Engineering College, Nerul",
      year: "2024 – 2027",
      badge: null,
      icon: "fa-graduation-cap",
      color: "#a78bfa",
    },
    {
      degree: "Diploma in Information Technology",
      school: "Government Polytechnic Mumbai",
      year: "2021 – 2024",
      badge: "93.42%",
      icon: "fa-laptop-code",
      color: "#38bdf8",
    },
    {
      degree: "Secondary School Certificate",
      school: "K.E.M High School",
      year: "2021",
      badge: "94%",
      icon: "fa-school",
      color: "#22d3a5",
    },
  ];

  return (
    <>
      <style>{`
        .ab-section {
          background: #06060a;
          min-height: 100vh;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        .ab-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          animation: abBlob 14s ease-in-out infinite;
        }
        @keyframes abBlob {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-30px) scale(1.04); }
        }
        .ab-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 20%, black 20%, transparent 100%);
          pointer-events: none;
        }

        /* Cards */
        .ab-card {
          background: #0e0e17;
          border: 1px solid #1e1e2a;
          border-radius: 16px;
          padding: 28px 24px;
          height: 100%;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ab-card:hover {
          border-color: #6c63ff;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(108,99,255,0.12);
        }

        /* Tech skill pills */
        .ab-tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 8px;
          background: rgba(108,99,255,0.06);
          border: 1px solid rgba(108,99,255,0.14);
          font-size: 0.78rem;
          font-weight: 500;
          color: #f3f3f9;
          transition: all 0.2s;
          cursor: default;
        }
        .ab-tech-pill:hover {
          background: rgba(108,99,255,0.12);
          border-color: rgba(108,99,255,0.28);
          color: #c0c0e0;
          transform: translateY(-1px);
        }

        /* Soft skill rows */
        .ab-soft-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          border: 1px solid #1a1a26;
          font-size: 0.85rem;
          color: #f0f0f6;
          transition: all 0.2s;
          cursor: default;
        }
        .ab-soft-row:hover {
          background: rgba(108,99,255,0.07);
          border-color: rgba(108,99,255,0.2);
          color: #c0c0e0;
        }

        /* Education card */
        .ab-edu-card {
          background: #0e0e17;
          border: 1px solid #1e1e2a;
          border-radius: 14px;
          padding: 20px 22px;
          flex: 1;
          transition: border-color 0.25s, transform 0.2s;
        }
        .ab-edu-card:hover {
          border-color: #252535;
          transform: translateX(4px);
        }

        /* Timeline dot */
        .ab-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 22px;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <section className="ab-section">
        {/* Background */}
        <div
          className="ab-blob"
          style={{
            width: 500,
            height: 500,
            background: "#6c63ff",
            opacity: 0.06,
            top: -150,
            left: -100,
          }}
        />
        <div
          className="ab-blob"
          style={{
            width: 400,
            height: 400,
            background: "#38bdf8",
            opacity: 0.04,
            bottom: -100,
            right: -80,
            animationDelay: "-6s",
          }}
        />
        <div className="ab-grid" />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* ── Header ── */}
          <div className="text-center mb-5">
            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-3"
              style={{
                background: "rgba(108,99,255,0.1)",
                border: "1px solid rgba(108,99,255,0.22)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#a78bfa",
              }}
            >
              <i className="fa-solid fa-user" style={{ fontSize: "0.75rem" }} />
              About Me
            </div>
            <h2
              className="fw-bold mb-2"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2.6rem,5.5vw,4.2rem)",
                letterSpacing: "-0.03em",
                color: "#f0f0f8",
                lineHeight: 1.1,
              }}
            >
              Who I Am
            </h2>
            <p
              style={{
                color: "#f2f2f6",
                fontSize: "0.95rem",
                maxWidth: 440,
                margin: "0 auto",
              }}
            >
              3rd-Year Engineering Student · Aspiring Full Stack Developer
            </p>
          </div>

          {/* ── Top 3 cards ── */}
          <div className="row g-3 mb-5">
            {/* Who I am */}
            <div className="col-12 col-md-4">
              <div className="ab-card">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(108,99,255,0.1)",
                    color: "#a78bfa",
                  }}
                >
                  <i
                    className="fa-solid fa-user"
                    style={{ fontSize: "1rem" }}
                  />
                </div>
                <h3
                  className="fw-semibold mb-3"
                  style={{ fontSize: "1rem", color: "#e0e0f0" }}
                >
                  Who I Am
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#f1f1fa",
                    lineHeight: 1.8,
                    marginBottom: 0,
                  }}
                >
                  I&apos;m passionate about turning ideas into real-world web
                  applications. My primary focus is the MERN stack, building
                  projects that emphasize clean architecture, scalability, and
                  practical problem-solving.
                </p>

                {/* Quick facts */}
                <div className="d-flex flex-column gap-2 mt-4">
                  {[
                    { icon: "fa-location-dot", text: "Mumbai, India" },
                    { icon: "fa-graduation-cap", text: "B.E. AI & DS 2027" },
                    { icon: "fa-briefcase", text: "1 Internship" },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center gap-2"
                      style={{ fontSize: "0.8rem", color: "#fcfcfc" }}
                    >
                      <i
                        className={`fa-solid ${f.icon}`}
                        style={{
                          width: 14,
                          textAlign: "center",
                          color: "#eaeaf4",
                        }}
                      />
                      {f.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech skills */}
            <div className="col-12 col-md-4">
              <div className="ab-card">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(56,189,248,0.1)",
                    color: "#38bdf8",
                  }}
                >
                  <i
                    className="fa-solid fa-code"
                    style={{ fontSize: "1rem" }}
                  />
                </div>
                <h3
                  className="fw-semibold mb-3"
                  style={{ fontSize: "1rem", color: "#e0e0f0" }}
                >
                  Technical Skills
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {techSkills.map((s, i) => (
                    <span key={i} className="ab-tech-pill">
                      <i
                        className={`fa-brands ${s.icon}`}
                        style={{ color: s.color, fontSize: "0.82rem" }}
                      />
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft skills */}
            <div className="col-12 col-md-4">
              <div className="ab-card">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(34,211,165,0.1)",
                    color: "#22d3a5",
                  }}
                >
                  <i
                    className="fa-solid fa-people-group"
                    style={{ fontSize: "1rem" }}
                  />
                </div>
                <h3
                  className="fw-semibold mb-3"
                  style={{ fontSize: "1rem", color: "#e0e0f0" }}
                >
                  Soft Skills
                </h3>
                <div className="d-flex flex-column gap-2">
                  {softSkills.map((s, i) => (
                    <div key={i} className="ab-soft-row">
                      <i
                        className={`fa-solid ${s.icon}`}
                        style={{
                          fontSize: "0.85rem",
                          color: "#6c63ff",
                          width: 16,
                          textAlign: "center",
                        }}
                      />
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Education timeline ── */}
          <div>
            <div className="text-center mb-4">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-3"
                style={{
                  background: "rgba(108,99,255,0.1)",
                  border: "1px solid rgba(108,99,255,0.22)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#a78bfa",
                }}
              >
                <i
                  className="fa-solid fa-graduation-cap"
                  style={{ fontSize: "0.75rem" }}
                />
                Education
              </div>
              <h2
                className="fw-bold mb-0"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(1.6rem,3vw,2.2rem)",
                  letterSpacing: "-0.025em",
                  color: "#f0f0f8",
                }}
              >
                Academic Background
              </h2>
            </div>

            {/* Timeline */}
            <div
              className="mx-auto"
              style={{ maxWidth: 680, position: "relative" }}
            >
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  top: 28,
                  bottom: 28,
                  left: 7,
                  width: 1,
                  background:
                    "linear-gradient(to bottom, #6c63ff44, #38bdf844, transparent)",
                }}
              />

              {education.map((e, i) => (
                <div key={i} className="d-flex gap-4 mb-3">
                  {/* Dot */}
                  <div
                    className="ab-dot"
                    style={{
                      background: e.color,
                      boxShadow: `0 0 10px ${e.color}66`,
                    }}
                  />

                  {/* Card */}
                  <div className="ab-edu-card">
                    <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap">
                      <div>
                        {/* Icon + degree */}
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <div
                            className="d-flex align-items-center justify-content-center rounded-2"
                            style={{
                              width: 28,
                              height: 28,
                              background: `${e.color}18`,
                              flexShrink: 0,
                            }}
                          >
                            <i
                              className={`fa-solid ${e.icon}`}
                              style={{ fontSize: "0.75rem", color: e.color }}
                            />
                          </div>
                          <h5
                            className="fw-bold mb-0"
                            style={{ fontSize: "0.92rem", color: "#f0f0f8" }}
                          >
                            {e.degree}
                          </h5>
                        </div>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            color: "#eaeaf0",
                            marginBottom: 6,
                            paddingLeft: 36,
                          }}
                        >
                          {e.school}
                        </p>
                        <div
                          className="d-flex align-items-center gap-2"
                          style={{ paddingLeft: 36 }}
                        >
                          <span
                            className="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill"
                            style={{
                              background: `${e.color}14`,
                              border: `1px solid ${e.color}33`,
                              color: e.color,
                              fontSize: "0.72rem",
                              fontWeight: 600,
                            }}
                          >
                            <i
                              className="fa-solid fa-calendar"
                              style={{ fontSize: "0.65rem" }}
                            />
                            {e.year}
                          </span>
                          {e.badge && (
                            <span
                              className="px-2 py-1 rounded-pill fw-bold"
                              style={{
                                background: "rgba(34,211,165,0.1)",
                                border: "1px solid rgba(34,211,165,0.2)",
                                color: "#22d3a5",
                                fontSize: "0.72rem",
                              }}
                            >
                              🏆 {e.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
