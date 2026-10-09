"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  demo: string;
  tags: string[];
  color: string;
  icon: string;
  badges: ("NEW" | "AI")[];
  status: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "SkillForge",
    desc: "AI-powered learning and career preparation platform with personalized recommendations (TF-IDF + cosine similarity), AI mock interviews, resume analysis, quizzes and progress tracking. JWT auth, role-based access, Groq AI and a FastAPI microservice.",
    img: "/img/skillforge.png", // replace with a real screenshot later
    demo: "https://skillforge-learnhub.vercel.app/",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "FastAPI",
      "Groq AI",
      "Scikit-learn",
    ],
    color: "#0d9488",
    icon: "fa-graduation-cap",
    badges: ["NEW", "AI"],
    status: "Vercel + Render",
  },
  {
    id: 2,
    title: "Smart Recommendation System",
    desc: "Netflix-style personalized picks using collaborative filtering and cosine similarity. JWT auth, activity tracking, Groq AI insights and a Python ML microservice with cold-start handling.",
    img: "/img/smart-recmd.png",
    demo: "https://smart-recmd.vercel.app",
    tags: ["React", "Node.js", "Python", "FastAPI", "MongoDB", "Groq AI"],
    color: "#4f46e5",
    icon: "fa-wand-magic-sparkles",
    badges: ["AI"],
    status: "Vercel",
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    desc: "AI-powered resume analysis platform that extracts skills, evaluates resumes, matches suitable job roles, and provides actionable improvement suggestions. Built with React, Node.js, MongoDB, and Python FastAPI for NLP-based analysis.",

    img: "/img/resumeai.png",
    demo: "https://cvmind-ai.vercel.app/",
    tags: ["React", "Node.js", "Python", "FastAPI", "MongoDB", "NLP"],
    color: "#e11d48",
    icon: "fa-file-circle-check",
    badges: ["AI"],
    status: "Vercel",
  },
  {
    id: 4,
    title: "AI Text Assistant",
    desc: "Full-stack conversational AI application powered by Groq API for fast, intelligent responses. Features secure JWT authentication, chat history management, and REST APIs built using React, Node.js, Express.js, and MongoDB.",
    img: "/img/mern-ai-assistant.png",
    demo: "https://mern-ai-assistant-orpin.vercel.app",
    tags: ["React", "Node.js", "Express", "Groq API", "REST APIs"],
    color: "#059669",
    icon: "fa-robot",
    badges: ["AI"],
    status: "Vercel",
  },
  {
    id: 5,
    title: "POS System",
    desc: "Full-stack point-of-sale application designed for small businesses with product and inventory management, bill generation, and role-based access control. Built using React, Node.js, Express.js, and MongoDB.",
    img: "/img/mern-pos-app.png",
    demo: "https://mern-pos-app.vercel.app",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    color: "#7c3aed",
    icon: "fa-cash-register",
    badges: [],
    status: "Vercel",
  },
  {
    id: 6,
    title: "Math Quiz Application",
    desc: "Full-stack mathematics quiz platform featuring timed quizzes, randomized questions, automatic scoring, and a leaderboard. Includes React Context API for quiz state management and admin functionality for managing questions and tracking results.",
    img: "/img/mern-mqa-app.png",
    demo: "https://mern-mqa-app.vercel.app",
    tags: ["React", "JavaScript", "Context API", "LocalStorage"],
    color: "#0284c7",
    icon: "fa-calculator",
    badges: [],
    status: "Vercel",
  },
];

const MAX_TAGS = 4;

function Thumb({ p }: { p: Project }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="pj-thumb">
      {!failed ? (
        <img
          src={p.img}
          alt={`${p.title} screenshot`}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="pj-thumb-placeholder"
          style={{
            background: `linear-gradient(135deg, ${p.color}14, ${p.color}08)`,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#fff",
              border: `1px solid ${p.color}33`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(40,45,100,0.08)",
            }}
          >
            <i
              className={`fa-solid ${p.icon}`}
              style={{ fontSize: "1.4rem", color: p.color }}
            />
          </div>
          <span style={{ fontSize: "0.78rem", color: "#7a809c" }}>
            Screenshot coming soon
          </span>
        </div>
      )}

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

      {p.badges.length > 0 && (
        <div className="pj-badges">
          {p.badges.includes("NEW") && (
            <span
              className="pj-badge"
              style={{ background: "linear-gradient(135deg,#f43f5e,#e11d48)" }}
            >
              <i
                className="fa-solid fa-star me-1"
                style={{ fontSize: "0.6rem" }}
              />
              NEW
            </span>
          )}
          {p.badges.includes("AI") && (
            <span
              className="pj-badge"
              style={{ background: "linear-gradient(135deg,#6d5efc,#8b5cf6)" }}
            >
              <i
                className="fa-solid fa-microchip me-1"
                style={{ fontSize: "0.6rem" }}
              />
              AI
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const aiCount = projects.filter((p) => p.badges.includes("AI")).length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

        .pj-section {
          --bg: #f7f8fc; --surface: #fff; --border: #e4e7f1;
          --ink: #11142b; --text: #4a5070; --muted: #7a809c;
          background: var(--bg);
          color: var(--text);
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
          min-height: 100vh;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        .pj-display { font-family: Syne, Inter, system-ui, sans-serif; }
        .pj-blob {
          position: absolute; border-radius: 50%;
          filter: blur(110px); pointer-events: none;
          animation: pjBlob 14s ease-in-out infinite;
        }
        @keyframes pjBlob {
          0%,100% { transform: translateY(0) scale(1); }
          50%     { transform: translateY(-30px) scale(1.04); }
        }
        .pj-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(17,20,43,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,20,43,0.045) 1px, transparent 1px);
          background-size: 52px 52px;
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 20%, black 20%, transparent 100%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 20%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .pj-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 14px; border-radius: 100px;
          background: rgba(109,94,252,0.09);
          border: 1px solid rgba(109,94,252,0.22);
          font-size: 0.8rem; font-weight: 600; color: #5446e0;
        }

        /* Uniform card */
        .pj-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(40,45,100,0.05);
          transition: border-color 0.28s, transform 0.28s, box-shadow 0.28s;
        }
        .pj-card:hover {
          transform: translateY(-6px);
          border-color: rgba(109,94,252,0.4);
          box-shadow: 0 18px 44px rgba(109,94,252,0.16);
        }
        .pj-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #eef0f8;
          overflow: hidden;
          flex-shrink: 0;
        }
        .pj-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          transition: transform 0.4s ease;
        }
        .pj-card:hover .pj-thumb img { transform: scale(1.05); }
        .pj-thumb-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 8px;
        }
        .pj-overlay {
          position: absolute; inset: 0;
          background: rgba(17,20,43,0.55);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.28s;
        }
        .pj-card:hover .pj-overlay, .pj-overlay:focus-within { opacity: 1; }
        .pj-overlay-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 20px; border-radius: 10px;
          background: #fff; color: #11142b;
          font-size: 0.85rem; font-weight: 600; text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .pj-overlay-btn:hover { background: #6d5efc; color: #fff; }
        .pj-badges { position: absolute; top: 10px; left: 10px; z-index: 2; display: flex; gap: 6px; }
        .pj-badge {
          padding: 3px 10px; border-radius: 20px; color: #fff;
          font-size: 0.68rem; font-weight: 800; letter-spacing: 0.05em;
          box-shadow: 0 2px 8px rgba(17,20,43,0.2);
        }

        .pj-body { padding: 20px 22px 22px; display: flex; flex-direction: column; flex: 1; }
        .pj-title {
          font-size: 1rem; font-weight: 700; color: var(--ink); margin: 0;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        /* fixed 4-line description so every card is the same height */
        .pj-desc {
          font-size: 0.86rem; color: var(--text); line-height: 1.65;
          display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical;
          overflow: hidden; min-height: calc(1.65em * 4);
          margin-bottom: 16px;
        }
        .pj-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; min-height: 58px; align-content: flex-start; }
        .pj-tag {
          display: inline-flex; align-items: center;
          padding: 3px 9px; border-radius: 6px;
          font-size: 0.73rem; font-weight: 500;
          background: var(--bg); border: 1px solid var(--border); color: var(--text);
        }
        .pj-tag-more { background: rgba(109,94,252,0.08); border-color: rgba(109,94,252,0.2); color: #5446e0; font-weight: 600; }
        .pj-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 16px; border-radius: 8px;
          font-size: 0.82rem; font-weight: 600; text-decoration: none;
          border: 1px solid var(--border); color: var(--ink); background: #fff;
          transition: all 0.2s;
        }
        .pj-link:hover { border-color: #6d5efc; color: #5446e0; background: rgba(109,94,252,0.06); }
        .pj-link:focus-visible, .pj-overlay-btn:focus-visible, .pj-gh:focus-visible {
          outline: 3px solid rgba(109,94,252,0.45); outline-offset: 2px;
        }
        .pj-gh {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px; border-radius: 10px;
          background: #fff; border: 1px solid var(--border);
          color: var(--ink); font-size: 0.9rem; font-weight: 600; text-decoration: none;
          box-shadow: 0 1px 2px rgba(17,20,43,0.05);
          transition: all 0.2s;
        }
        .pj-gh:hover { border-color: #6d5efc; color: #5446e0; background: rgba(109,94,252,0.06); }
        @media (prefers-reduced-motion: reduce) { .pj-blob { animation: none; } }
      `}</style>

      <section className="pj-section">
        <div
          className="pj-blob"
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
          className="pj-blob"
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
        <div className="pj-grid" />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="text-center mb-5">
            <div className="pj-eyebrow mb-3">
              <i
                className="fa-solid fa-diagram-project"
                style={{ fontSize: "0.75rem" }}
              />
              Projects
            </div>
            <h2
              className="pj-display fw-bold mb-2"
              style={{
                fontSize: "clamp(2rem,4vw,2.8rem)",
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                lineHeight: 1.1,
              }}
            >
              What I&apos;ve Built
            </h2>
            <p
              style={{
                color: "var(--text)",
                fontSize: "1rem",
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              Selected MERN stack and AI projects — all deployed and
              production-ready
            </p>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-4 flex-wrap">
              {[
                { num: String(projects.length), label: "Projects built" },
                { num: "All", label: "Deployed live" },
                { num: String(aiCount), label: "AI-powered" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="pj-display"
                    style={{
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--muted)",
                      marginTop: 2,
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Uniform grid (last row is centered) */}
          <div className="row g-4 justify-content-center">
            {projects.map((p) => (
              <div key={p.id} className="col-12 col-md-6 col-lg-4">
                <article className="pj-card">
                  <Thumb p={p} />

                  <div className="pj-body">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          flexShrink: 0,
                          background: `${p.color}14`,
                          border: `1px solid ${p.color}33`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className={`fa-solid ${p.icon}`}
                          style={{ fontSize: "0.78rem", color: p.color }}
                        />
                      </div>
                      <h3 className="pj-title" title={p.title}>
                        {p.title}
                      </h3>
                    </div>

                    <p className="pj-desc" title={p.desc}>
                      {p.desc}
                    </p>

                    <div className="pj-tags">
                      {p.tags.slice(0, MAX_TAGS).map((t) => (
                        <span key={t} className="pj-tag">
                          {t}
                        </span>
                      ))}
                      {p.tags.length > MAX_TAGS && (
                        <span
                          className="pj-tag pj-tag-more"
                          title={p.tags.slice(MAX_TAGS).join(", ")}
                        >
                          +{p.tags.length - MAX_TAGS}
                        </span>
                      )}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="pj-link"
                      >
                        <i
                          className="fa-solid fa-arrow-up-right-from-square"
                          style={{ fontSize: "0.72rem" }}
                        />
                        Live Demo
                      </a>
                      <div
                        className="d-flex align-items-center gap-1"
                        style={{ fontSize: "0.74rem", color: "var(--muted)" }}
                      >
                        <i
                          className="fa-solid fa-circle"
                          style={{ fontSize: "0.4rem", color: "#10b981" }}
                        />
                        {p.status}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-5 pt-2">
            <a
              href="https://github.com/Omkar-Gawali"
              target="_blank"
              rel="noreferrer"
              className="pj-gh"
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
