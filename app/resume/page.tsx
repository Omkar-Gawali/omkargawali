"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const skills = [
  { name: "React", color: "#0891b2" },
  { name: "Node.js", color: "#16a34a" },
  { name: "MongoDB", color: "#059669" },
  { name: "Python", color: "#d97706" },
  { name: "FastAPI", color: "#7c3aed" },
  { name: "Express", color: "#4f46e5" },
];

const stats = [
  { num: "6", label: "Projects" },
  { num: "1", label: "Internship" },
  { num: "2027", label: "Graduate" },
];

const RESUME_PDF = "/assets/Omkar Gawali - Full Stack Developer v3.pdf";

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".si");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("in"),
        ),
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const DownloadIcon = () => (
    <svg
      className="ico"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .rs * { box-sizing: border-box; margin: 0; padding: 0; }
        .rs {
          --bg: #f7f8fc; --surface: #fff; --border: #e4e7f1;
          --ink: #11142b; --text: #4a5070; --muted: #7a809c;
          position: relative;
          padding: 5rem 0 4.5rem;
          background: var(--bg);
          font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif;
          color: var(--text);
          overflow: hidden;
          min-height: calc(100vh - 64px);
        }
        .rs-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(17,20,43,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,20,43,.04) 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 30%, black 20%, transparent 100%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 30%, black 20%, transparent 100%);
        }
        .rs-blob { position: absolute; border-radius: 50%; pointer-events: none; }
        .rs-blob-a {
          width: 520px; height: 520px; top: -160px; right: -110px;
          background: radial-gradient(circle, rgba(109,94,252,.16) 0%, transparent 70%);
        }
        .rs-blob-b {
          width: 420px; height: 420px; bottom: -110px; left: -70px;
          background: radial-gradient(circle, rgba(14,165,233,.14) 0%, transparent 70%);
        }
        .rs-inner {
          max-width: 1020px; margin: 0 auto; padding: 0 1.75rem;
          position: relative; z-index: 1;
        }

        /* Reveal */
        .si { opacity: 0; transform: translateY(22px); transition: opacity .5s ease, transform .5s ease; }
        .si.in { opacity: 1; transform: translateY(0); }
        .si:nth-child(2) { transition-delay: .07s; }
        .si:nth-child(3) { transition-delay: .14s; }
        .si:nth-child(4) { transition-delay: .21s; }
        @media (prefers-reduced-motion: reduce) {
          .si { opacity: 1; transform: none; transition: none; }
        }

        /* Header */
        .rs-head {
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem; margin-bottom: 2.6rem;
        }
        .rs-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 12px; font-weight: 600; color: #047857;
          background: #ecfdf5; border: 1px solid #a7f3d0;
          padding: 5px 13px; border-radius: 100px; margin-bottom: 1rem;
        }
        .rs-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #10b981;
          animation: blink 2.2s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { opacity: 1; transform: scale(1); }
          50%     { opacity: .3; transform: scale(.55); }
        }
        .rs-h2 {
          font-size: 2.2rem; font-weight: 800; line-height: 1.1;
          color: var(--ink); letter-spacing: -.025em;
        }
        .rs-h2 .grd {
          background: linear-gradient(130deg, #6d5efc 0%, #0ea5e9 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .rs-sub { font-size: 14px; color: var(--text); max-width: 380px; line-height: 1.7; margin-top: .4rem; }

        .rs-dl-mini {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 12.5px; font-weight: 600; color: #5446e0;
          background: #fff; border: 1px solid rgba(109,94,252,.3);
          padding: 9px 18px; border-radius: 9px;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 1px 2px rgba(17,20,43,.05);
          transition: background .2s, border-color .2s;
        }
        .rs-dl-mini:hover { background: rgba(109,94,252,.08); border-color: rgba(109,94,252,.5); color: #5446e0; }

        /* Bento */
        .rs-bento { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
        .rs-span2 { grid-column: span 2; }
        @media (max-width: 860px) {
          .rs-bento { grid-template-columns: 1fr 1fr; }
          .rs-span2 { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .rs-bento { grid-template-columns: 1fr; }
          .rs-span2 { grid-column: auto; }
        }

        /* Card */
        .rc {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.4rem;
          position: relative; overflow: hidden;
          box-shadow: 0 2px 8px rgba(40,45,100,.05);
          transition: border-color .28s, transform .22s, box-shadow .28s;
        }
        .rc:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(40,45,100,.1); }
        .rc::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity .28s;
        }
        .rc:hover::after { opacity: 1; }
        .rc.sh-p:hover { border-color: rgba(124,58,237,.35); }
        .rc.sh-p::after { background: linear-gradient(90deg,transparent,#7c3aed,transparent); }
        .rc.sh-b:hover { border-color: rgba(37,99,235,.35); }
        .rc.sh-b::after { background: linear-gradient(90deg,transparent,#2563eb,transparent); }
        .rc.sh-c:hover { border-color: rgba(13,148,136,.35); }
        .rc.sh-c::after { background: linear-gradient(90deg,transparent,#0d9488,transparent); }
        .rc.sh-a:hover { border-color: rgba(217,119,6,.35); }
        .rc.sh-a::after { background: linear-gradient(90deg,transparent,#d97706,transparent); }

        .rc-hdr { display: flex; align-items: center; gap: 9px; margin-bottom: 1rem; }
        .rc-icon {
          width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .ic-p { background: rgba(124,58,237,.1); color: #7c3aed; }
        .ic-b { background: rgba(37,99,235,.1);  color: #2563eb; }
        .ic-c { background: rgba(13,148,136,.1); color: #0d9488; }
        .ic-a { background: rgba(217,119,6,.1);  color: #d97706; }
        .rc-title { font-size: 14px; font-weight: 700; color: var(--ink); }
        .rc-body { font-size: 13px; color: var(--text); line-height: 1.78; margin-bottom: 1rem; }

        /* Tags */
        .tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1rem; }
        .tag { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 100px; }
        .tg-p { background: rgba(124,58,237,.08); color: #6d28d9; border: 1px solid rgba(124,58,237,.18); }
        .tg-b { background: rgba(37,99,235,.08);  color: #1d4ed8; border: 1px solid rgba(37,99,235,.18); }
        .tg-c { background: rgba(13,148,136,.08); color: #0f766e; border: 1px solid rgba(13,148,136,.18); }
        .tg-a { background: rgba(217,119,6,.08);  color: #b45309; border: 1px solid rgba(217,119,6,.2); }

        .rdiv { height: 1px; background: var(--border); margin: 1rem 0; }

        /* Stats */
        .stat-row { display: flex; gap: 1.8rem; flex-wrap: wrap; }
        .stat-n {
          font-size: 22px; font-weight: 800; display: block;
          background: linear-gradient(135deg, #6d5efc, #0ea5e9);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-l { font-size: 11.5px; color: var(--muted); font-weight: 500; margin-top: 1px; display: block; }

        /* Experience */
        .exp-top { display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 6px; margin-bottom: 3px; }
        .exp-role { font-size: 15px; font-weight: 700; color: var(--ink); }
        .exp-pill {
          font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px;
          background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; white-space: nowrap;
        }
        .exp-co { font-size: 12.5px; color: var(--muted); margin-bottom: .8rem; display: flex; align-items: center; gap: 6px; }
        .exp-co::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: #6d5efc; flex-shrink: 0; }
        .exp-ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .exp-ul li { font-size: 13px; color: var(--text); line-height: 1.7; padding-left: 14px; position: relative; }
        .exp-ul li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 2px; background: #6d5efc; border-radius: 2px; }

        /* Education */
        .edu-logo {
          width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
          background: rgba(13,148,136,.1); color: #0d9488;
          display: flex; align-items: center; justify-content: center;
        }
        .edu-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: .8rem; }
        .edu-l { display: flex; align-items: center; gap: 12px; }
        .edu-r { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
        .edu-deg { font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 2px; }
        .edu-meta { font-size: 12.5px; color: var(--text); line-height: 1.55; }
        .edu-badge {
          font-size: 12px; font-weight: 700; padding: 5px 13px; border-radius: 100px;
          background: rgba(109,94,252,.1); color: #5446e0; border: 1px solid rgba(109,94,252,.22);
        }

        /* Skills */
        .sk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
        .sk-item {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 8px; padding: 8px 10px;
          display: flex; align-items: center; gap: 6px;
          transition: background .18s, border-color .18s;
        }
        .sk-item:hover { background: rgba(109,94,252,.07); border-color: rgba(109,94,252,.28); }
        .sk-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .sk-name { font-size: 11.5px; color: var(--ink); font-weight: 600; white-space: nowrap; }

        /* CTA */
        .cta-row { display: flex; justify-content: center; align-items: center; gap: .85rem; margin-top: 2.2rem; flex-wrap: wrap; }
        .btn-ol {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12.5px; font-weight: 600; color: var(--ink);
          text-decoration: none; padding: 9px 20px; border-radius: 9px;
          border: 1px solid var(--border); background: #fff;
          box-shadow: 0 1px 2px rgba(17,20,43,.05);
          transition: all .18s;
        }
        .btn-ol:hover { color: #5446e0; border-color: rgba(109,94,252,.4); background: rgba(109,94,252,.06); }
        .rs-dl-mini:focus-visible, .btn-ol:focus-visible { outline: 3px solid rgba(109,94,252,.45); outline-offset: 2px; }
        .ico { width: 14px; height: 14px; display: inline-block; vertical-align: middle; flex-shrink: 0; }
      `}</style>

      <section id="resume" className="rs" ref={sectionRef}>
        <div className="rs-bg" />
        <div className="rs-blob rs-blob-a" />
        <div className="rs-blob rs-blob-b" />

        <div className="rs-inner">
          {/* Header */}
          <div className="rs-head si">
            <div>
              <div className="rs-eyebrow">
                <span className="rs-eyebrow-dot" />
                Experience &amp; Background
              </div>
              <h2 className="rs-h2">
                My <span className="grd">Resume</span>
              </h2>
              <p className="rs-sub">
                Internships, education, and the stack I ship with.
              </p>
            </div>
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="rs-dl-mini"
            >
              <DownloadIcon />
              Download PDF
            </a>
          </div>

          {/* Bento */}
          <div className="rs-bento">
            {/* Summary */}
            <div className="rc sh-p si">
              <div className="rc-hdr">
                <div className="rc-icon ic-p">
                  <svg
                    className="ico"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <span className="rc-title">Summary</span>
              </div>
              <p className="rc-body">
                MERN Stack Developer building and deploying full-stack web apps
                with React, Node.js, Express.js, and MongoDB. Pursuing B.E. in
                AI &amp; Data Science.
              </p>
              <div className="tag-row">
                <span className="tag tg-b">Full Stack</span>
                <span className="tag tg-p">MERN</span>
                <span className="tag tg-c">AI / ML</span>
                <span className="tag tg-a">Deployment</span>
              </div>
              <div className="stat-row">
                {stats.map((s) => (
                  <div key={s.label}>
                    <span className="stat-n">{s.num}</span>
                    <span className="stat-l">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="rc sh-b si rs-span2">
              <div className="rc-hdr">
                <div className="rc-icon ic-b">
                  <svg
                    className="ico"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                </div>
                <span className="rc-title">Experience</span>
              </div>

              <div className="exp-top">
                <span className="exp-role">Content Creator Intern</span>
                <span className="exp-pill">Jan – May 2024</span>
              </div>
              <div className="exp-co">
                Apptroid Technologies Pvt. Ltd. · Mumbai
              </div>

              <ul className="exp-ul">
                <li>
                  Created 30+ structured C++ tutorials covering OOP, STL, and
                  problem-solving techniques.
                </li>
                <li>
                  Used Canva for design and ChatGPT to enhance clarity,
                  structure, and explanation quality.
                </li>
                <li>
                  Improved learner engagement by presenting technical concepts
                  in a beginner-friendly format.
                </li>
              </ul>

              <div className="rdiv" />
              <div className="tag-row" style={{ marginBottom: 0 }}>
                <span className="tag tg-b">C++</span>
                <span className="tag tg-p">Canva</span>
                <span className="tag tg-c">Content</span>
                <span className="tag tg-a">ChatGPT</span>
              </div>
            </div>

            {/* Education */}
            <div className="rc sh-c si rs-span2">
              <div className="rc-hdr">
                <div className="rc-icon ic-c">
                  <svg
                    className="ico"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1.5 4 3 6 3s6-1.5 6-3v-5" />
                  </svg>
                </div>
                <span className="rc-title">Education</span>
              </div>

              <div className="edu-inner">
                <div className="edu-l">
                  <div className="edu-logo">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 1.5 4 3 6 3s6-1.5 6-3v-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="edu-deg">B.E. in AI &amp; Data Science</div>
                    <div className="edu-meta">
                      Mumbai University · Mumbai, India
                    </div>
                    <div className="edu-meta">
                      Terna Engineering College, Nerul
                    </div>
                  </div>
                </div>
                <div className="edu-r">
                  <span className="edu-badge">Grad 2027</span>
                  <span className="tag tg-c">Active</span>
                </div>
              </div>
            </div>

            {/* Tech stack */}
            <div className="rc sh-a si">
              <div className="rc-hdr">
                <div className="rc-icon ic-a">
                  <svg
                    className="ico"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <span className="rc-title">Tech Stack</span>
              </div>
              <div className="sk-grid">
                {skills.map((s) => (
                  <div className="sk-item" key={s.name}>
                    <span className="sk-dot" style={{ background: s.color }} />
                    <span className="sk-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-row si">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="rs-dl-mini"
            >
              <DownloadIcon />
              Download Full Resume
            </a>
            <Link href="/projects" className="btn-ol">
              View Projects
              <svg
                className="ico"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
