"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const texts = [
    "MERN Stack Developer",
    "AI/ML Integrator",
    "Full Stack Engineer",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(
        () => setDisplayText(current.slice(0, displayText.length + 1)),
        80,
      );
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(
        () => setDisplayText(current.slice(0, displayText.length - 1)),
        45,
      );
    } else {
      setIsDeleting(false);
      setTextIndex((p) => (p + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const stats = [
    {
      value: "4+",
      label: "Projects",
      icon: "fa-diagram-project",
      color: "#a78bfa",
    },
    { value: "1", label: "Internship", icon: "fa-briefcase", color: "#22d3a5" },
    {
      value: "2027",
      label: "Graduate",
      icon: "fa-graduation-cap",
      color: "#38bdf8",
    },
  ];

  const highlights = [
    { icon: "fa-layer-group", label: "Full Stack" },
    { icon: "fa-database", label: "Backend APIs" },
    { icon: "fa-brain", label: "AI / ML" },
    { icon: "fa-rocket", label: "Deployment" },
  ];

  const socials = [
    {
      icon: "fa-brands fa-github",
      href: "https://github.com/Omkar-Gawali",
      label: "GitHub",
    },
    {
      icon: "fa-brands fa-linkedin",
      href: "https://www.linkedin.com/in/omkar-ashruba-gawali-33855a22b/",
      label: "LinkedIn",
    },
    {
      icon: "fa-solid fa-envelope",
      href: "mailto:omkargawali702@gmail.com",
      label: "Email",
    },
  ];

  const techStack = [
    "React",
    "Node.js",
    "MongoDB",
    "Next.js",
    "Python",
    "FastAPI",
  ];

  return (
    <>
      <style>{`
        .og-section {
          min-height: calc(100vh - 64px);
          background: #06060a;
          position: relative;
          overflow: hidden;
          padding: 60px 0;
          display: flex;
          align-items: center;
        }
        .og-blob1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: #6c63ff;
          opacity: 0.07;
          filter: blur(110px);
          top: -200px; left: -150px;
          animation: blobFloat 16s ease-in-out infinite;
          pointer-events: none;
        }
        .og-blob2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: #38bdf8;
          opacity: 0.05;
          filter: blur(90px);
          bottom: -150px; right: -100px;
          animation: blobFloat 12s ease-in-out infinite reverse;
          pointer-events: none;
        }
        .og-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 100%);
          pointer-events: none;
        }

        /* Buttons */
        .og-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 12px;
          background: linear-gradient(135deg,#6c63ff,#8b5cf6);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(108,99,255,0.35);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .og-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(108,99,255,0.5);
          color: #fff;
        }
        .og-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 12px;
          border: 1px solid #1e1e2a;
          color: #7070a0;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          background: rgba(255,255,255,0.02);
          transition: all 0.2s;
        }
        .og-btn-secondary:hover {
          border-color: #6c63ff;
          color: #a78bfa;
          background: rgba(108,99,255,0.06);
        }

        /* Social icons */
        .og-social {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid #1e1e2a;
          color: #5a5a80;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .og-social:hover {
          border-color: #6c63ff;
          color: #a78bfa;
          background: rgba(108,99,255,0.1);
          transform: translateY(-2px);
        }

        /* Stat cards */
        .og-stat-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid #1a1a26;
          border-radius: 12px;
          padding: 11px 6px;
          text-align: center;
          transition: border-color 0.2s;
          cursor: default;
        }
        .og-stat-card:hover { border-color: #252535; }

        /* Cursor blink */
        .og-cursor {
          width: 2px;
          height: 1.1em;
          background: #6c63ff;
          border-radius: 2px;
          display: inline-block;
          animation: blink 1s step-end infinite;
          flex-shrink: 0;
        }

        /* Available badge */
        .og-available {
          position: absolute;
          top: -18px; right: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 100px;
          background: rgba(34,211,165,0.08);
          border: 1px solid rgba(34,211,165,0.22);
          font-size: 0.75rem;
          font-weight: 600;
          color: #22d3a5;
          animation: badgeFloat 3s ease-in-out infinite;
          white-space: nowrap;
        }
        .og-available-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22d3a5;
          animation: pulse 2s ease-in-out infinite;
        }

        /* Floating badge */
        .og-float-badge {
          position: absolute;
          bottom: -18px; left: -16px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          background: #0e0e17;
          border: 1px solid #1e1e2a;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          animation: badgeFloat 4s ease-in-out infinite 1.2s;
        }

        /* Keyframes */
        @keyframes blobFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(400px) scale(1.05); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes badgeFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,211,165,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(34,211,165,0); }
        }
      `}</style>

      <section className="og-section">
        {/* Background */}
        <div className="og-blob1" />
        <div className="og-blob2" />
        <div className="og-grid" />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center gy-5">
            {/* ══════════ LEFT ══════════ */}
            <div className="col-12 col-lg-7">
              {/* Greeting badge */}
              <div
                className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-pill"
                style={{
                  background: "rgba(108,99,255,0.1)",
                  border: "1px solid rgba(108,99,255,0.22)",
                  fontSize: "0.8rem",
                  color: "#a78bfa",
                }}
              >
                <i
                  className="fa-solid fa-hand-wave"
                  style={{ fontSize: "0.85rem" }}
                />
                Hi, I&apos;m Omkar Gawali
              </div>

              {/* Headline */}
              <h1
                className="fw-bold mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(2.6rem,5.5vw,4.2rem)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.035em",
                  color: "#f0f0f8",
                }}
              >
                Building{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#a78bfa,#38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  real-world
                </span>
                <br />
                apps with AI
              </h1>

              {/* Typing line */}
              <div
                className="d-flex align-items-center gap-2 mb-4"
                style={{ minHeight: 38 }}
              >
                <i
                  className="fa-solid fa-terminal"
                  style={{
                    fontSize: "0.85rem",
                    color: "#6c63ff",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(1rem,2vw,1.2rem)",
                    color: "#a78bfa",
                    fontWeight: 600,
                  }}
                >
                  {displayText}
                </span>
                <span className="og-cursor" />
              </div>

              {/* Description */}
              <p
                className="mb-4"
                style={{
                  fontSize: "0.95rem",
                  color: "#ebebf7",
                  lineHeight: 1.82,
                  maxWidth: 520,
                }}
              >
                MERN &amp; Full Stack Developer building scalable web apps with
                React, Next.js, Node.js and MongoDB. Pursuing B.E. in AI &amp;
                Data Science — focused on production-ready, real-world projects.
              </p>

              {/* Highlights */}
              <div className="d-flex flex-wrap gap-2 mb-5">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid #1e1e2a",
                      fontSize: "0.82rem",
                      color: "#7070a0",
                    }}
                  >
                    <i
                      className={`fa-solid ${h.icon}`}
                      style={{ fontSize: "0.78rem", color: "#6c63ff" }}
                    />
                    {h.label}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Link href="/projects" className="og-btn-primary">
                  <i
                    className="fa-solid fa-diagram-project"
                    style={{ fontSize: "0.85rem" }}
                  />
                  View Projects
                </Link>

                <a
                  href="/assests/Omkar Gawali -  Full Stack Developer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="og-btn-secondary"
                >
                  <i
                    className="fa-solid fa-file-arrow-down"
                    style={{ fontSize: "0.85rem" }}
                  />
                  Resume
                </a>
              </div>

              {/* Socials */}
              <div className="d-flex align-items-center gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className="og-social"
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* ══════════ RIGHT ══════════ */}
            <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
              <div
                style={{ position: "relative", width: "100%", maxWidth: 340 }}
              >
                {/* Available badge */}
                <div className="og-available">
                  <div className="og-available-dot" />
                  Available for work
                </div>

                {/* Main card */}
                <div
                  style={{
                    background: "#0e0e17",
                    border: "1px solid #1e1e2a",
                    borderRadius: 20,
                    padding: 28,
                    boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
                  }}
                >
                  {/* Avatar */}
                  <div className="d-flex justify-content-center mb-4">
                    <div style={{ position: "relative" }}>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: 96,
                          height: 96,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#6c63ff,#38bdf8)",
                          fontWeight: 800,
                          fontSize: "1.8rem",
                          color: "#fff",
                          fontFamily: "Syne, sans-serif",
                          boxShadow:
                            "0 0 0 4px #0e0e17, 0 0 0 8px rgba(108,99,255,0.18)",
                        }}
                      >
                        OG
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 5,
                          right: 5,
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: "#22d3a5",
                          border: "2.5px solid #0e0e17",
                          boxShadow: "0 0 8px rgba(34,211,165,0.6)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-center mb-4">
                    <div
                      style={{
                        fontFamily: "Syne,sans-serif",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        color: "#f0f0f8",
                        marginBottom: 4,
                      }}
                    >
                      Omkar Gawali
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "#454560",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                      }}
                    >
                      MERN · AI · Full Stack
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="row g-2 mb-4">
                    {stats.map((s, i) => (
                      <div key={i} className="col-4">
                        <div className="og-stat-card">
                          <i
                            className={`fa-solid ${s.icon}`}
                            style={{
                              fontSize: "0.85rem",
                              color: s.color,
                              marginBottom: 6,
                              display: "block",
                            }}
                          />
                          <div
                            style={{
                              fontFamily: "Syne,sans-serif",
                              fontWeight: 800,
                              fontSize: "1.05rem",
                              color: "#f0f0f8",
                              lineHeight: 1,
                            }}
                          >
                            {s.value}
                          </div>
                          <div
                            style={{
                              fontSize: "0.65rem",
                              color: "#f4f4f9",
                              marginTop: 3,
                            }}
                          >
                            {s.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mb-3">
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "#f0f0f8",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 10,
                      }}
                    >
                      Tech Stack
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {techStack.map((t, i) => (
                        <span
                          key={i}
                          style={{
                            padding: "4px 10px",
                            borderRadius: 7,
                            background: "rgba(108,99,255,0.08)",
                            border: "1px solid rgba(108,99,255,0.16)",
                            color: "#a78bfa",
                            fontSize: "0.73rem",
                            fontWeight: 500,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Info rows */}
                  <div className="d-flex flex-column gap-2">
                    {[
                      { icon: "fa-location-dot", text: "Mumbai, India" },
                      {
                        icon: "fa-graduation-cap",
                        text: "B.E. AI & Data Science · 2027",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="d-flex align-items-center gap-2"
                        style={{ fontSize: "0.78rem", color: "#e5e5f6" }}
                      >
                        <i
                          className={`fa-solid ${item.icon}`}
                          style={{
                            width: 14,
                            textAlign: "center",
                            color: "#353550",
                            flexShrink: 0,
                          }}
                        />
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
