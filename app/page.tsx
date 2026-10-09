"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const texts = [
  "MERN Stack Developer",
  "AI/ML Integrator",
  "Full Stack Engineer",
];

export default function HomePage() {
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
      value: "7",
      label: "Projects",
      icon: "fa-diagram-project",
      color: "#6d5efc",
    },
    { value: "1", label: "Internship", icon: "fa-briefcase", color: "#059669" },
    {
      value: "2027",
      label: "Graduate",
      icon: "fa-graduation-cap",
      color: "#0284c7",
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

  const infoRows = [
    { icon: "fa-location-dot", text: "Mumbai, India" },
    { icon: "fa-graduation-cap", text: "B.E. AI & Data Science · 2027" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

        .og-section {
          --og-bg: #f7f8fc;
          --og-surface: #ffffff;
          --og-border: #e4e7f1;
          --og-ink: #11142b;
          --og-text: #4a5070;
          --og-muted: #7a809c;
          --og-accent: #6d5efc;
          --og-accent-2: #0ea5e9;
          --og-accent-soft: rgba(109, 94, 252, 0.08);

          min-height: calc(100vh - 64px);
          background: var(--og-bg);
          color: var(--og-text);
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          position: relative;
          overflow: hidden;
          padding: 60px 0;
          display: flex;
          align-items: center;
        }
        .og-display {
          font-family: Syne, Inter, system-ui, sans-serif;
        }

        /* Soft background glows */
        .og-blob1 {
          position: absolute;
          width: 560px; height: 560px;
          border-radius: 50%;
          background: #6d5efc;
          opacity: 0.14;
          filter: blur(120px);
          top: -220px; left: -160px;
          animation: blobFloat 18s ease-in-out infinite;
          pointer-events: none;
        }
        .og-blob2 {
          position: absolute;
          width: 460px; height: 460px;
          border-radius: 50%;
          background: #0ea5e9;
          opacity: 0.12;
          filter: blur(110px);
          bottom: -160px; right: -120px;
          animation: blobFloat 14s ease-in-out infinite reverse;
          pointer-events: none;
        }
        .og-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(17,20,43,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,20,43,0.045) 1px, transparent 1px);
          background-size: 52px 52px;
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 100%);
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
          background: linear-gradient(135deg, #6d5efc, #8b5cf6);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(109, 94, 252, 0.3);
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .og-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(109, 94, 252, 0.4);
          color: #fff;
        }
        .og-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 12px;
          border: 1px solid var(--og-border);
          color: var(--og-ink);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          background: var(--og-surface);
          box-shadow: 0 1px 2px rgba(17,20,43,0.05);
          transition: all 0.2s;
        }
        .og-btn-secondary:hover {
          border-color: var(--og-accent);
          color: var(--og-accent);
          background: var(--og-accent-soft);
        }
        .og-btn-primary:focus-visible,
        .og-btn-secondary:focus-visible,
        .og-social:focus-visible {
          outline: 3px solid rgba(109, 94, 252, 0.45);
          outline-offset: 2px;
        }

        /* Social icons */
        .og-social {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--og-surface);
          border: 1px solid var(--og-border);
          color: var(--og-text);
          font-size: 1.05rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .og-social:hover {
          border-color: var(--og-accent);
          color: var(--og-accent);
          background: var(--og-accent-soft);
          transform: translateY(-2px);
        }

        /* Pills */
        .og-pill {
          background: var(--og-surface);
          border: 1px solid var(--og-border);
          color: var(--og-text);
          font-size: 0.84rem;
          font-weight: 500;
          box-shadow: 0 1px 2px rgba(17,20,43,0.04);
        }

        /* Stat cards */
        .og-stat-card {
          background: var(--og-bg);
          border: 1px solid var(--og-border);
          border-radius: 12px;
          padding: 12px 6px;
          text-align: center;
          transition: border-color 0.2s, background 0.2s;
          cursor: default;
        }
        .og-stat-card:hover {
          border-color: #c9ceea;
          background: #fff;
        }

        /* Cursor blink */
        .og-cursor {
          width: 2px;
          height: 1.1em;
          background: var(--og-accent);
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
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          font-size: 0.75rem;
          font-weight: 600;
          color: #047857;
          box-shadow: 0 4px 12px rgba(5,150,105,0.12);
          animation: badgeFloat 3s ease-in-out infinite;
          white-space: nowrap;
        }
        .og-available-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s ease-in-out infinite;
        }

        /* Profile card */
        .og-card {
          background: var(--og-surface);
          border: 1px solid var(--og-border);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 20px 50px rgba(40, 45, 100, 0.12), 0 2px 6px rgba(40, 45, 100, 0.05);
        }
        .og-tech {
          padding: 4px 10px;
          border-radius: 7px;
          background: var(--og-accent-soft);
          border: 1px solid rgba(109, 94, 252, 0.18);
          color: #5446e0;
          font-size: 0.74rem;
          font-weight: 600;
        }

        /* Keyframes */
        @keyframes blobFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(40px, 60px) scale(1.06); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%     { opacity: 0; }
        }
        @keyframes badgeFloat {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-6px); }
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
          50%     { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .og-blob1, .og-blob2, .og-available, .og-available-dot, .og-cursor {
            animation: none;
          }
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
                  background: "rgba(109,94,252,0.09)",
                  border: "1px solid rgba(109,94,252,0.22)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "#5446e0",
                }}
              >
                <i
                  className="fa-solid fa-hand"
                  style={{ fontSize: "0.85rem" }}
                />
                Hi, I&apos;m Omkar Gawali
              </div>

              {/* Headline */}
              <h1
                className="og-display fw-bold mb-3"
                style={{
                  fontSize: "clamp(2.6rem,5.5vw,4.2rem)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.035em",
                  color: "var(--og-ink)",
                }}
              >
                Building{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#6d5efc,#0ea5e9)",
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
                    color: "var(--og-accent)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(1rem,2vw,1.2rem)",
                    color: "#5446e0",
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
                  fontSize: "1rem",
                  color: "var(--og-text)",
                  lineHeight: 1.8,
                  maxWidth: 540,
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
                    className="og-pill d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                  >
                    <i
                      className={`fa-solid ${h.icon}`}
                      style={{ fontSize: "0.78rem", color: "var(--og-accent)" }}
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
                  href="/assets/Omkar Gawali - Full Stack Developer v2.pdf"
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
                    aria-label={s.label}
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
                <div className="og-card">
                  {/* Avatar */}
                  <div className="d-flex justify-content-center mb-4">
                    <div style={{ position: "relative" }}>
                      <div
                        className="og-display d-flex align-items-center justify-content-center"
                        style={{
                          width: 96,
                          height: 96,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#6d5efc,#0ea5e9)",
                          fontWeight: 800,
                          fontSize: "1.8rem",
                          color: "#fff",
                          boxShadow:
                            "0 0 0 4px #ffffff, 0 0 0 8px rgba(109,94,252,0.2)",
                        }}
                      >
                        OG
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 5,
                          right: 5,
                          width: 15,
                          height: 15,
                          borderRadius: "50%",
                          background: "#10b981",
                          border: "3px solid #ffffff",
                          boxShadow: "0 0 8px rgba(16,185,129,0.5)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-center mb-4">
                    <div
                      className="og-display"
                      style={{
                        fontWeight: 800,
                        fontSize: "1.15rem",
                        color: "var(--og-ink)",
                        marginBottom: 4,
                      }}
                    >
                      Omkar Gawali
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--og-muted)",
                        fontWeight: 500,
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
                            className="og-display"
                            style={{
                              fontWeight: 800,
                              fontSize: "1.05rem",
                              color: "var(--og-ink)",
                              lineHeight: 1,
                            }}
                          >
                            {s.value}
                          </div>
                          <div
                            style={{
                              fontSize: "0.68rem",
                              color: "var(--og-muted)",
                              marginTop: 4,
                              fontWeight: 500,
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
                        fontSize: "0.78rem",
                        color: "var(--og-ink)",
                        fontWeight: 700,
                        marginBottom: 10,
                      }}
                    >
                      Tech stack
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {techStack.map((t, i) => (
                        <span key={i} className="og-tech">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Info rows */}
                  <div
                    className="d-flex flex-column gap-2 pt-3"
                    style={{ borderTop: "1px solid var(--og-border)" }}
                  >
                    {infoRows.map((item, i) => (
                      <div
                        key={i}
                        className="d-flex align-items-center gap-2"
                        style={{ fontSize: "0.82rem", color: "var(--og-text)" }}
                      >
                        <i
                          className={`fa-solid ${item.icon}`}
                          style={{
                            width: 14,
                            textAlign: "center",
                            color: "var(--og-accent)",
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
