"use client";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "POS System",
      desc: "Full-stack POS system with inventory, billing, and role-based access for small businesses.",
      img: "/img/mern-pos-app.png",
      demo: "https://mern-pos-app.vercel.app",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      color: "#a78bfa",
      icon: "fa-cash-register",
      badge: null,
      size: "sm",
    },
    {
      id: 2,
      title: "Math Quiz Generator",
      desc: "Interactive quiz platform generating random math problems with scoring and leaderboard.",
      img: "/img/mern-mqa-app.png",
      demo: "https://mern-mqa-app.vercel.app",
      tags: ["React", "JavaScript", "Context API", "LocalStorage"],
      color: "#38bdf8",
      icon: "fa-calculator",
      badge: null,
      size: "sm",
    },
    {
      id: 3,
      title: "AI Text Assistant",
      desc: "AI-powered MERN app using Groq API for fast, intelligent conversational responses.",
      img: "/img/mern-ai-assistant.png",
      demo: "https://mern-ai-assistant-orpin.vercel.app",
      tags: ["React", "Node.js", "Express", "Groq API", "REST APIs"],
      color: "#22d3a5",
      icon: "fa-robot",
      badge: "AI",
      size: "sm",
    },
    {
      id: 4,
      title: "Developer Directory",
      desc: "Secure developer directory with authentication, profiles, and full CRUD functionality.",
      img: "/img/mern-dev-directory.png",
      demo: "https://mern-dev-directory.vercel.app",
      tags: ["React", "JWT", "MongoDB", "Auth", "REST APIs"],
      color: "#f59e0b",
      icon: "fa-address-book",
      badge: null,
      size: "sm",
    },
    {
      id: 5,
      title: "AI Resume Analyzer",
      desc: "AI-powered resume analyzer that extracts skills, scores your resume, matches job roles and gives actionable suggestions using NLP.",
      img: "/img/resumeai.png",
      demo: "https://cvmind-ai.vercel.app/",
      tags: ["React", "Node.js", "Python", "FastAPI", "MongoDB", "NLP"],
      color: "#f43f5e",
      icon: "fa-file-circle-check",
      badge: "AI",
      size: "md",
    },
    {
      id: 6,
      title: "Smart Recommendation System",
      desc: "Full-stack AI-powered recommendation engine — Netflix-style personalized picks using collaborative filtering and cosine similarity. Features JWT auth, activity tracking, Groq AI insights, and a Python ML microservice.",
      img: "/img/smart-recmd.png",
      demo: "https://smart-recmd.vercel.app",
      tags: [
        "React",
        "Node.js",
        "Python",
        "FastAPI",
        "MongoDB",
        "Groq AI",
        "Collaborative Filtering",
      ],
      color: "#667eea",
      icon: "fa-wand-magic-sparkles",
      badge: "AI",
      size: "lg",
      highlights: [
        {
          icon: "fa-brain",
          label: "Collaborative filtering + cosine similarity",
        },
        { icon: "fa-bolt", label: "Groq LLaMA AI insights per item" },
        { icon: "fa-layer-group", label: "MERN + Python ML microservice" },
        {
          icon: "fa-chart-line",
          label: "Cold start handling + activity tracking",
        },
      ],
    },
  ];

  const featuredProject = projects.find((p) => p.size === "lg")!;
  const otherProjects = projects.filter((p) => p.size !== "lg");

  return (
    <>
      <style>{`
        .pj-section {
          background: #06060a;
          min-height: 100vh;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        .pj-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          animation: pjBlob 14s ease-in-out infinite;
        }
        @keyframes pjBlob {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-30px) scale(1.04); }
        }
        .pj-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 20%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .pj-card {
          background: #0e0e17;
          border: 1px solid #1e1e2a;
          border-radius: 18px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: border-color 0.28s, transform 0.28s, box-shadow 0.28s;
        }
        .pj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
        }
        .pj-card-featured {
          background: linear-gradient(160deg, #0d0d1a 0%, #0e0e17 60%);
          border: 1px solid rgba(102,126,234,0.3);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.28s, transform 0.28s, box-shadow 0.28s;
          position: relative;
        }
        .pj-card-featured:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(102,126,234,0.2);
          border-color: rgba(102,126,234,0.5);
        }
        .pj-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: #111120;
          overflow: hidden;
        }
        .pj-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .pj-card:hover .pj-thumb img { transform: scale(1.05); }
        .pj-thumb-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg,#0e0e20,#111128);
        }
        .pj-thumb-featured {
          position: relative;
          width: 100%;
          aspect-ratio: 16/7;
          background: #0a0a18;
          overflow: hidden;
        }
        .pj-thumb-featured img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .pj-card-featured:hover .pj-thumb-featured img { transform: scale(1.04); }
        .pj-overlay {
          position: absolute;
          inset: 0;
          background: rgba(6,6,10,0.72);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.28s;
        }
        .pj-card:hover .pj-overlay,
        .pj-card-featured:hover .pj-overlay { opacity: 1; }
        .pj-overlay-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          border-radius: 10px;
          background: #6c63ff;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.15);
          transition: background 0.2s;
        }
        .pj-overlay-btn:hover { background: #8b5cf6; color: #fff; }
        .pj-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .pj-body-featured {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .pj-tag {
          display: inline-flex;
          align-items: center;
          padding: 3px 9px;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 500;
          background: rgba(108,99,255,0.07);
          border: 1px solid rgba(108,99,255,0.15);
          color: #8080b0;
        }
        .pj-tag-featured {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 500;
          background: rgba(102,126,234,0.1);
          border: 1px solid rgba(102,126,234,0.22);
          color: #a0a8f0;
        }
        .pj-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid #1e1e2a;
          color: #7070a0;
          background: rgba(255,255,255,0.02);
          transition: all 0.2s;
        }
        .pj-link:hover {
          border-color: #6c63ff;
          color: #a78bfa;
          background: rgba(108,99,255,0.08);
        }
        .pj-link-featured {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          border: none;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(102,126,234,0.3);
        }
        .pj-link-featured:hover {
          opacity: 0.9;
          color: #fff;
          box-shadow: 0 6px 24px rgba(102,126,234,0.45);
          transform: translateY(-1px);
        }
        .pj-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
        }
        .pj-highlight {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(102,126,234,0.07);
          border: 1px solid rgba(102,126,234,0.14);
          transition: background 0.2s;
        }
        .pj-highlight:hover {
          background: rgba(102,126,234,0.12);
        }
        .pj-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(102,126,234,0.2), transparent);
          margin: 14px 0;
        }
      `}</style>

      <section className="pj-section">
        {/* Background */}
        <div
          className="pj-blob"
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
          className="pj-blob"
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
        <div
          className="pj-blob"
          style={{
            width: 350,
            height: 350,
            background: "#667eea",
            opacity: 0.05,
            top: "40%",
            right: "20%",
            animationDelay: "-3s",
          }}
        />
        <div className="pj-grid" />

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
              <i
                className="fa-solid fa-diagram-project"
                style={{ fontSize: "0.75rem" }}
              />
              Projects
            </div>
            <h2
              className="fw-bold mb-2"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2rem,4vw,2.8rem)",
                letterSpacing: "-0.03em",
                color: "#f0f0f8",
                lineHeight: 1.1,
              }}
            >
              What I&apos;ve Built
            </h2>
            <p
              style={{
                color: "#b0b0c0",
                fontSize: "0.95rem",
                maxWidth: 460,
                margin: "0 auto",
              }}
            >
              Selected MERN stack and AI projects — all deployed and
              production-ready
            </p>
            <div className="d-flex align-items-center justify-content-center gap-4 mt-4 flex-wrap">
              {[
                { num: "6", label: "Projects built" },
                { num: "All", label: "Deployed live" },
                { num: "3", label: "AI-powered" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    style={{
                      fontFamily: "Syne,sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      color: "#f0f0f8",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "#6060a0",
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Featured card ── */}
          {featuredProject && (
            <div className="mb-4">
              <article className="pj-card-featured">
                {/* Thumb */}
                <div className="pj-thumb-featured">
                  {featuredProject.img ? (
                    <>
                      <img
                        src={featuredProject.img}
                        alt={featuredProject.title}
                      />
                      <div className="pj-overlay">
                        <a
                          href={featuredProject.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="pj-overlay-btn"
                        >
                          <i
                            className="fa-solid fa-arrow-up-right-from-square"
                            style={{ fontSize: "0.78rem" }}
                          />
                          Live Demo
                        </a>
                      </div>
                    </>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "linear-gradient(135deg,rgba(102,126,234,0.06),rgba(118,75,162,0.06))",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          flexWrap: "wrap",
                          justifyContent: "center",
                          padding: 24,
                          opacity: 0.4,
                        }}
                      >
                        {["#667eea", "#764ba2", "#f59e0b", "#22c55e"].map(
                          (c, i) => (
                            <div
                              key={i}
                              style={{
                                width: 80,
                                height: 50,
                                borderRadius: 10,
                                background: `${c}22`,
                                border: `1px solid ${c}33`,
                              }}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {/* AI badge */}
                  <div
                    className="pj-badge"
                    style={{
                      background: "linear-gradient(135deg,#667eea,#764ba2)",
                      color: "#fff",
                    }}
                  >
                    <i
                      className="fa-solid fa-microchip me-1"
                      style={{ fontSize: "0.6rem" }}
                    />
                    AI
                  </div>

                  {/* Featured ribbon */}
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      zIndex: 2,
                      padding: "4px 12px",
                      borderRadius: 20,
                      background: "rgba(102,126,234,0.18)",
                      border: "1px solid rgba(102,126,234,0.35)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#a0a8f0",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <i
                      className="fa-solid fa-trophy"
                      style={{ fontSize: "0.6rem", color: "#f59e0b" }}
                    />
                    Featured Project
                  </div>
                </div>

                {/* Body */}
                <div className="pj-body-featured">
                  <div className="row g-4 align-items-start">
                    {/* Left */}
                    <div className="col-md-7">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            flexShrink: 0,
                            background: "rgba(102,126,234,0.15)",
                            border: "1px solid rgba(102,126,234,0.28)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i
                            className="fa-solid fa-wand-magic-sparkles"
                            style={{ fontSize: "1rem", color: "#667eea" }}
                          />
                        </div>
                        <div>
                          <h4
                            className="fw-bold mb-0"
                            style={{
                              fontSize: "1.2rem",
                              color: "#f0f0f8",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {featuredProject.title}
                          </h4>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              color: "#667eea",
                              fontWeight: 600,
                            }}
                          >
                            MERN + Python + AI
                          </span>
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "#c0c0d8",
                          lineHeight: 1.8,
                          marginBottom: "1.25rem",
                        }}
                      >
                        {featuredProject.desc}
                      </p>

                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {featuredProject.tags.map((t, i) => (
                          <span key={i} className="pj-tag-featured">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex align-items-center gap-3 flex-wrap">
                        <a
                          href={featuredProject.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="pj-link-featured"
                        >
                          <i
                            className="fa-solid fa-arrow-up-right-from-square"
                            style={{ fontSize: "0.78rem" }}
                          />
                          Live Demo
                        </a>
                        <div
                          className="d-flex align-items-center gap-2"
                          style={{ fontSize: "0.75rem", color: "#667eea" }}
                        >
                          <i
                            className="fa-solid fa-circle"
                            style={{ fontSize: "0.4rem", color: "#22d3a5" }}
                          />
                          Deployed on Vercel
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="col-md-5">
                      {/* Key features */}
                      <p
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#5050a0",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          marginBottom: 10,
                        }}
                      >
                        Key Features
                      </p>
                      <div className="d-flex flex-column gap-2 mb-3">
                        {featuredProject?.highlights?.map((h, i) => (
                          <div key={i} className="pj-highlight">
                            <i
                              className={`fa-solid ${h.icon}`}
                              style={{
                                fontSize: "0.8rem",
                                color: "#667eea",
                                width: 16,
                                textAlign: "center",
                                flexShrink: 0,
                              }}
                            />
                            <span
                              style={{ fontSize: "0.78rem", color: "#c0c0d8" }}
                            >
                              {h.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pj-divider" />

                      {/* Tech stack */}
                      <p
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#5050a0",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          marginBottom: 10,
                        }}
                      >
                        Tech Stack
                      </p>
                      <div className="d-flex flex-wrap gap-2">
                        {[
                          { label: "React", color: "#38bdf8" },
                          { label: "Node.js", color: "#22c55e" },
                          { label: "Python", color: "#f59e0b" },
                          { label: "MongoDB", color: "#22d3a5" },
                          { label: "FastAPI", color: "#a78bfa" },
                          { label: "Groq AI", color: "#667eea" },
                        ].map((t, i) => (
                          <span
                            key={i}
                            style={{
                              padding: "3px 10px",
                              borderRadius: 6,
                              background: `${t.color}12`,
                              border: `1px solid ${t.color}28`,
                              color: t.color,
                              fontSize: "0.72rem",
                              fontWeight: 600,
                            }}
                          >
                            {t.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* ── Other projects grid ── */}
          <div className="row g-3">
            {otherProjects.map((p) => (
              <div
                key={p.id}
                className={
                  p.size === "md"
                    ? "col-12 col-md-6"
                    : "col-12 col-sm-6 col-lg-3"
                }
              >
                <article
                  className="pj-card"
                  style={{
                    borderColor:
                      p.size === "md" ? "rgba(244,63,94,0.2)" : "#1e1e2a",
                  }}
                >
                  <div className="pj-thumb">
                    {p.img ? (
                      <>
                        <img src={p.img} alt={p.title} />
                        <div className="pj-overlay">
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="pj-overlay-btn"
                          >
                            <i
                              className="fa-solid fa-arrow-up-right-from-square"
                              style={{ fontSize: "0.78rem" }}
                            />
                            Live Demo
                          </a>
                        </div>
                      </>
                    ) : (
                      <div className="pj-thumb-placeholder">
                        <div
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: 14,
                            background: `${p.color}18`,
                            border: `1px solid ${p.color}33`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i
                            className={`fa-solid ${p.icon}`}
                            style={{ fontSize: "1.4rem", color: p.color }}
                          />
                        </div>
                        <span style={{ fontSize: "0.78rem", color: "#353550" }}>
                          Screenshot coming soon
                        </span>
                      </div>
                    )}
                    {p.badge && (
                      <div
                        className="pj-badge"
                        style={{
                          background:
                            p.badge === "NEW"
                              ? "linear-gradient(135deg,#f43f5e,#e11d48)"
                              : "linear-gradient(135deg,#6c63ff,#8b5cf6)",
                          color: "#fff",
                        }}
                      >
                        {p.badge === "NEW" ? (
                          <>
                            <i
                              className="fa-solid fa-star me-1"
                              style={{ fontSize: "0.6rem" }}
                            />
                            NEW
                          </>
                        ) : (
                          <>
                            <i
                              className="fa-solid fa-microchip me-1"
                              style={{ fontSize: "0.6rem" }}
                            />
                            AI
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="pj-body">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 7,
                          flexShrink: 0,
                          background: `${p.color}18`,
                          border: `1px solid ${p.color}28`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className={`fa-solid ${p.icon}`}
                          style={{ fontSize: "0.72rem", color: p.color }}
                        />
                      </div>
                      <h5
                        className="fw-bold mb-0"
                        style={{
                          fontSize: p.size === "md" ? "1.05rem" : "0.92rem",
                          color: "#f0f0f8",
                        }}
                      >
                        {p.title}
                      </h5>
                    </div>

                    <p
                      className="mb-3"
                      style={{
                        fontSize: "0.82rem",
                        color: "#c0c0d0",
                        lineHeight: 1.7,
                        flexGrow: 1,
                      }}
                    >
                      {p.desc}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {p.tags.map((t, i) => (
                        <span key={i} className="pj-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`pj-link ${p.demo === "#" ? "pj-link-disabled" : ""}`}
                      >
                        <i
                          className="fa-solid fa-arrow-up-right-from-square"
                          style={{ fontSize: "0.72rem" }}
                        />
                        {p.demo === "#" ? "Coming Soon" : "Live Demo"}
                      </a>
                      <div
                        className="d-flex align-items-center gap-1"
                        style={{ fontSize: "0.72rem", color: "#5050a0" }}
                      >
                        <i
                          className="fa-solid fa-circle"
                          style={{ fontSize: "0.4rem", color: "#22d3a5" }}
                        />
                        Deployed
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="text-center mt-5 pt-2">
            <a
              href="https://github.com/Omkar-Gawali"
              target="_blank"
              rel="noreferrer"
              className="d-inline-flex align-items-center gap-2"
              style={{
                padding: "11px 24px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid #1e1e2a",
                color: "#7070a0",
                fontSize: "0.88rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <i className="fa-brands fa-github" style={{ fontSize: "1rem" }} />
              View all on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
