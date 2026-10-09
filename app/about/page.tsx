"use client";

export default function AboutPage() {
  // `prefix` fixes icons that were wrongly rendered with fa-brands before
  const techSkills = [
    { prefix: "fa-brands", icon: "fa-html5", label: "HTML", color: "#e34f26" },
    {
      prefix: "fa-brands",
      icon: "fa-css3-alt",
      label: "CSS",
      color: "#1572b6",
    },
    {
      prefix: "fa-brands",
      icon: "fa-js",
      label: "JavaScript",
      color: "#ca8a04",
    },
    { prefix: "fa-brands", icon: "fa-react", label: "React", color: "#0891b2" },
    {
      prefix: "fa-brands",
      icon: "fa-node-js",
      label: "Node.js",
      color: "#339933",
    },
    {
      prefix: "fa-solid",
      icon: "fa-database",
      label: "MongoDB",
      color: "#059669",
    },
    { prefix: "fa-brands", icon: "fa-git-alt", label: "Git", color: "#f05032" },
    {
      prefix: "fa-brands",
      icon: "fa-square-js",
      label: "Next.js",
      color: "#11142b",
    },
    {
      prefix: "fa-solid",
      icon: "fa-server",
      label: "Express",
      color: "#64748b",
    },
    {
      prefix: "fa-solid",
      icon: "fa-code",
      label: "REST APIs",
      color: "#0284c7",
    },
    { prefix: "fa-solid", icon: "fa-vial", label: "Postman", color: "#d97706" },
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
      color: "#6d5efc",
    },
    {
      degree: "Diploma in Information Technology",
      school: "Government Polytechnic Mumbai",
      year: "2021 – 2024",
      badge: "93.42%",
      icon: "fa-laptop-code",
      color: "#0284c7",
    },
    {
      degree: "Secondary School Certificate",
      school: "K.E.M High School",
      year: "2021",
      badge: "94%",
      icon: "fa-school",
      color: "#059669",
    },
  ];

  const facts = [
    { icon: "fa-location-dot", text: "Mumbai, India" },
    { icon: "fa-graduation-cap", text: "B.E. AI & DS 2027" },
    { icon: "fa-briefcase", text: "1 Internship" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

        .ab-section {
          --bg: #f7f8fc; --surface: #fff; --border: #e4e7f1;
          --ink: #11142b; --text: #4a5070; --muted: #7a809c;
          --accent: #6d5efc; --accent-soft: rgba(109,94,252,0.08);

          background: var(--bg);
          color: var(--text);
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
          min-height: 100vh;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        .ab-display { font-family: Syne, Inter, system-ui, sans-serif; }
        .ab-blob {
          position: absolute; border-radius: 50%;
          filter: blur(110px); pointer-events: none;
          animation: abBlob 14s ease-in-out infinite;
        }
        @keyframes abBlob {
          0%,100% { transform: translateY(0) scale(1); }
          50%     { transform: translateY(-30px) scale(1.04); }
        }
        .ab-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(17,20,43,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,20,43,0.045) 1px, transparent 1px);
          background-size: 52px 52px;
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 20%, black 20%, transparent 100%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 20%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 14px; border-radius: 100px;
          background: rgba(109,94,252,0.09);
          border: 1px solid rgba(109,94,252,0.22);
          font-size: 0.8rem; font-weight: 600; color: #5446e0;
        }

        /* Cards */
        .ab-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px 24px;
          height: 100%;
          box-shadow: 0 2px 8px rgba(40,45,100,0.05);
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ab-card:hover {
          border-color: rgba(109,94,252,0.5);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(109,94,252,0.14);
        }
        .ab-card-title { font-size: 1.02rem; font-weight: 700; color: var(--ink); }

        .ab-tech-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 12px; border-radius: 8px;
          background: var(--bg); border: 1px solid var(--border);
          font-size: 0.78rem; font-weight: 500; color: var(--text);
          transition: all 0.2s; cursor: default;
        }
        .ab-tech-pill:hover {
          background: var(--accent-soft);
          border-color: rgba(109,94,252,0.3);
          color: var(--ink);
          transform: translateY(-1px);
        }

        .ab-soft-row {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px; border-radius: 10px;
          background: var(--bg); border: 1px solid var(--border);
          font-size: 0.86rem; font-weight: 500; color: var(--text);
          transition: all 0.2s; cursor: default;
        }
        .ab-soft-row:hover {
          background: var(--accent-soft);
          border-color: rgba(109,94,252,0.3);
          color: var(--ink);
        }

        .ab-edu-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 20px 22px;
          flex: 1;
          box-shadow: 0 2px 8px rgba(40,45,100,0.05);
          transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
        }
        .ab-edu-card:hover {
          border-color: #c9ceea;
          transform: translateX(4px);
          box-shadow: 0 10px 28px rgba(40,45,100,0.1);
        }
        .ab-dot {
          width: 14px; height: 14px; border-radius: 50%;
          flex-shrink: 0; margin-top: 22px;
          position: relative; z-index: 1;
          border: 3px solid #fff;
          box-sizing: content-box;
        }
        @media (prefers-reduced-motion: reduce) { .ab-blob { animation: none; } }
      `}</style>

      <section className="ab-section">
        <div
          className="ab-blob"
          style={{
            width: 500,
            height: 500,
            background: "#6d5efc",
            opacity: 0.13,
            top: -170,
            left: -120,
          }}
        />
        <div
          className="ab-blob"
          style={{
            width: 420,
            height: 420,
            background: "#0ea5e9",
            opacity: 0.1,
            bottom: -120,
            right: -90,
            animationDelay: "-6s",
          }}
        />
        <div className="ab-grid" />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="text-center mb-5">
            <div className="ab-eyebrow mb-3">
              <i className="fa-solid fa-user" style={{ fontSize: "0.75rem" }} />
              About me
            </div>
            <h2
              className="ab-display fw-bold mb-2"
              style={{
                fontSize: "clamp(2.4rem,5vw,3.8rem)",
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                lineHeight: 1.1,
              }}
            >
              Who I Am
            </h2>
            <p
              style={{
                color: "var(--text)",
                fontSize: "1rem",
                maxWidth: 460,
                margin: "0 auto",
              }}
            >
              3rd-Year Engineering Student · Aspiring Full Stack Developer
            </p>
          </div>

          {/* Top 3 cards */}
          <div className="row g-3 mb-5">
            {/* Who I am */}
            <div className="col-12 col-md-4">
              <div className="ab-card">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(109,94,252,0.1)",
                    color: "#6d5efc",
                  }}
                >
                  <i className="fa-solid fa-user" />
                </div>
                <h3 className="ab-card-title mb-3">Who I Am</h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text)",
                    lineHeight: 1.8,
                    marginBottom: 0,
                  }}
                >
                  I&apos;m passionate about turning ideas into real-world web
                  applications. My primary focus is the MERN stack, building
                  projects that emphasize clean architecture, scalability, and
                  practical problem-solving.
                </p>
                <div className="d-flex flex-column gap-2 mt-4">
                  {facts.map((f, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center gap-2"
                      style={{ fontSize: "0.84rem", color: "var(--text)" }}
                    >
                      <i
                        className={`fa-solid ${f.icon}`}
                        style={{
                          width: 14,
                          textAlign: "center",
                          color: "#6d5efc",
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
                    background: "rgba(14,165,233,0.1)",
                    color: "#0284c7",
                  }}
                >
                  <i className="fa-solid fa-code" />
                </div>
                <h3 className="ab-card-title mb-3">Technical Skills</h3>
                <div className="d-flex flex-wrap gap-2">
                  {techSkills.map((s, i) => (
                    <span key={i} className="ab-tech-pill">
                      <i
                        className={`${s.prefix} ${s.icon}`}
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
                    background: "rgba(5,150,105,0.1)",
                    color: "#059669",
                  }}
                >
                  <i className="fa-solid fa-people-group" />
                </div>
                <h3 className="ab-card-title mb-3">Soft Skills</h3>
                <div className="d-flex flex-column gap-2">
                  {softSkills.map((s, i) => (
                    <div key={i} className="ab-soft-row">
                      <i
                        className={`fa-solid ${s.icon}`}
                        style={{
                          fontSize: "0.85rem",
                          color: "#6d5efc",
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

          {/* Education */}
          <div>
            <div className="text-center mb-4">
              <div className="ab-eyebrow mb-3">
                <i
                  className="fa-solid fa-graduation-cap"
                  style={{ fontSize: "0.75rem" }}
                />
                Education
              </div>
              <h2
                className="ab-display fw-bold mb-0"
                style={{
                  fontSize: "clamp(1.6rem,3vw,2.2rem)",
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                }}
              >
                Academic Background
              </h2>
            </div>

            <div
              className="mx-auto"
              style={{ maxWidth: 680, position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 28,
                  bottom: 28,
                  left: 10,
                  width: 2,
                  background:
                    "linear-gradient(to bottom, rgba(109,94,252,0.35), rgba(14,165,233,0.3), transparent)",
                }}
              />

              {education.map((e, i) => (
                <div key={i} className="d-flex gap-4 mb-3">
                  <div
                    className="ab-dot"
                    style={{
                      background: e.color,
                      boxShadow: `0 0 0 1px ${e.color}55`,
                    }}
                  />
                  <div className="ab-edu-card">
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
                        style={{ fontSize: "0.95rem", color: "var(--ink)" }}
                      >
                        {e.degree}
                      </h5>
                    </div>
                    <p
                      style={{
                        fontSize: "0.84rem",
                        color: "var(--text)",
                        marginBottom: 8,
                        paddingLeft: 36,
                      }}
                    >
                      {e.school}
                    </p>
                    <div
                      className="d-flex align-items-center flex-wrap gap-2"
                      style={{ paddingLeft: 36 }}
                    >
                      <span
                        className="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill"
                        style={{
                          background: `${e.color}14`,
                          border: `1px solid ${e.color}33`,
                          color: e.color,
                          fontSize: "0.74rem",
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
                            background: "#ecfdf5",
                            border: "1px solid #a7f3d0",
                            color: "#047857",
                            fontSize: "0.74rem",
                          }}
                        >
                          🏆 {e.badge}
                        </span>
                      )}
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
