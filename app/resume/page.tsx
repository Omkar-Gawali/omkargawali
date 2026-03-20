"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const skills = [
  { name: "React", color: "#5b8dee" },
  { name: "Node.js", color: "#39d5c4" },
  { name: "MongoDB", color: "#4ade80" },
  { name: "Next.js", color: "#f0f0f8" },
  { name: "Python", color: "#fbbf24" },
  { name: "FastAPI", color: "#9b7ff4" },
  { name: "Express", color: "#5b8dee" },
  { name: "TypeScript", color: "#39d5c4" },
  { name: "Tailwind", color: "#38bdf8" },
];

const stats = [
  { num: "4+", label: "Projects" },
  { num: "1", label: "Internship" },
  { num: "2027", label: "Graduate" },
];

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* ── BASE ── */
        .rs *  { box-sizing: border-box; margin: 0; padding: 0; }
        .rs {
          position: relative;
          padding: 5rem 0 4.5rem;
          background: #070710;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #e8e8f4;
          overflow: hidden;
        }

        /* ── SUBTLE GRID ── */
        .rs-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(91,141,238,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,141,238,.03) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* ── GLOW BLOBS ── */
        .rs-blob {
          position: absolute; border-radius: 50%; pointer-events: none;
        }
        .rs-blob-a {
          width: 480px; height: 480px; top: -140px; right: -100px;
          background: radial-gradient(circle, rgba(155,127,244,.06) 0%, transparent 70%);
        }
        .rs-blob-b {
          width: 380px; height: 380px; bottom: -100px; left: -60px;
          background: radial-gradient(circle, rgba(57,213,196,.05) 0%, transparent 70%);
        }

        /* ── INNER ── */
        .rs-inner {
          max-width: 1020px; margin: 0 auto; padding: 0 1.75rem;
          position: relative; z-index: 1;
        }

        /* ── STAGGER ── */
        .si { opacity: 0; transform: translateY(22px); transition: opacity .5s ease, transform .5s ease; }
        .si.in { opacity: 1; transform: translateY(0); }
        .si:nth-child(1) { transition-delay: .00s; }
        .si:nth-child(2) { transition-delay: .07s; }
        .si:nth-child(3) { transition-delay: .14s; }
        .si:nth-child(4) { transition-delay: .21s; }
        .si:nth-child(5) { transition-delay: .27s; }
        .si:nth-child(6) { transition-delay: .33s; }

        /* ── HEADER AREA ── */
        .rs-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.6rem;
        }

        .rs-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 10px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: #39d5c4;
          background: rgba(57,213,196,.08);
          border: .5px solid rgba(57,213,196,.2);
          padding: 4px 12px; border-radius: 100px; margin-bottom: 1rem;
        }

        .rs-eyebrow-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #39d5c4;
          animation: blink 2.2s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .3; transform: scale(.55); }
        }

        .rs-h2 {
          font-size: 2rem; font-weight: 800; line-height: 1.1;
          color: #f0f0f8; letter-spacing: -.02em;
        }
        .rs-h2 .grd {
          background: linear-gradient(130deg, #5b8dee 0%, #9b7ff4 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .rs-sub {
          font-size: 13.5px; color: #e8e8ed; max-width: 380px;
          line-height: 1.7; margin-top: .4rem;
        }

        /* tiny download link in header */
        .rs-dl-mini {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 12px; font-weight: 600; color: #9b7ff4;
          background: rgba(155,127,244,.08);
          border: .5px solid rgba(155,127,244,.22);
          padding: 8px 16px; border-radius: 8px;
          text-decoration: none; white-space: nowrap;
          transition: background .2s, border-color .2s;
        }
        .rs-dl-mini:hover {
          background: rgba(155,127,244,.14);
          border-color: rgba(155,127,244,.35);
        }

        /* ── BENTO GRID ── */
        .rs-bento {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 1rem;
        }

        @media (max-width: 860px) {
          .rs-bento { grid-template-columns: 1fr 1fr; }
          .rs-card-exp { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .rs-bento { grid-template-columns: 1fr; }
          .rs-card-exp { grid-column: auto; }
        }

        /* ── CARD BASE ── */
        .rc {
          background: #0c0c1a;
          border: .5px solid rgba(255,255,255,.065);
          border-radius: 16px;
          padding: 1.35rem;
          position: relative; overflow: hidden;
          transition: border-color .28s, transform .22s;
        }
        .rc:hover { transform: translateY(-2px); }

        /* shimmer top line */
        .rc::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          opacity: 0; transition: opacity .28s;
        }
        .rc:hover::after { opacity: 1; }

        .rc.sh-p:hover  { border-color: rgba(155,127,244,.24); }
        .rc.sh-p::after { background: linear-gradient(90deg,transparent,rgba(155,127,244,.5),transparent); }
        .rc.sh-b:hover  { border-color: rgba(91,141,238,.24); }
        .rc.sh-b::after { background: linear-gradient(90deg,transparent,rgba(91,141,238,.5),transparent); }
        .rc.sh-c:hover  { border-color: rgba(57,213,196,.2); }
        .rc.sh-c::after { background: linear-gradient(90deg,transparent,rgba(57,213,196,.45),transparent); }
        .rc.sh-a:hover  { border-color: rgba(251,191,36,.2); }
        .rc.sh-a::after { background: linear-gradient(90deg,transparent,rgba(251,191,36,.4),transparent); }

        /* ghost number */
        .rc-num {
          position: absolute; top: 1rem; right: 1.1rem;
          font-size: 2.8rem; font-weight: 800; line-height: 1;
          color: rgba(255,255,255,.022); pointer-events: none; user-select: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* ── CARD HEADER ── */
        .rc-hdr { display: flex; align-items: center; gap: 9px; margin-bottom: 1rem; }
        .rc-icon {
          width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .ic-p { background: rgba(155,127,244,.12); color: #9b7ff4; border: .5px solid rgba(155,127,244,.22); }
        .ic-b { background: rgba(91,141,238,.12);  color: #5b8dee; border: .5px solid rgba(91,141,238,.22); }
        .ic-c { background: rgba(57,213,196,.1);   color: #39d5c4; border: .5px solid rgba(57,213,196,.2); }
        .ic-a { background: rgba(251,191,36,.1);   color: #fbbf24; border: .5px solid rgba(251,191,36,.2); }

        .rc-title {
          font-size: 12.5px; font-weight: 700; color: #d0d0e8; letter-spacing: .01em;
        }

        /* ── BODY TEXT ── */
        .rc-body {
          font-size: 12.5px; color: #f2f2f4; line-height: 1.78;
          margin-bottom: 1rem;
        }

        /* ── TAGS ── */
        .tag-row { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1rem; }
        .tag { font-size: 10px; font-weight: 600; padding: 3px 9px; border-radius: 100px; letter-spacing: .04em; }
        .tg-p { background: rgba(155,127,244,.1); color: #9b7ff4; border: .5px solid rgba(155,127,244,.2); }
        .tg-b { background: rgba(91,141,238,.1);  color: #5b8dee; border: .5px solid rgba(91,141,238,.2); }
        .tg-c { background: rgba(57,213,196,.08); color: #39d5c4; border: .5px solid rgba(57,213,196,.16); }
        .tg-a { background: rgba(251,191,36,.08); color: #fbbf24; border: .5px solid rgba(251,191,36,.16); }

        /* ── DIVIDER ── */
        .rdiv { height: .5px; background: rgba(252, 255, 249, 0.05); margin: 1rem 0; }

        /* ── STAT STRIP ── */
        .stat-row { display: flex; gap: 1.8rem; flex-wrap: wrap; }
        .stat-n {
          font-size: 20px; font-weight: 800;
          background: linear-gradient(135deg, #5b8dee, #9b7ff4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; display: block;
        }
        .stat-l { font-size: 9.5px; color: #ededef; text-transform: uppercase; letter-spacing: .1em; margin-top: 1px; display: block; }

        /* ── EXPERIENCE ── */
        .exp-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; flex-wrap: wrap; gap: 6px;
          margin-bottom: 3px;
        }
        .exp-role { font-size: 13.5px; font-weight: 700; color: #e0e0f4; }
        .exp-pill {
          font-size: 9.5px; font-weight: 700; padding: 3px 9px; border-radius: 100px;
          background: rgba(57,213,196,.09); color: #39d5c4;
          border: .5px solid rgba(57,213,196,.18); white-space: nowrap; letter-spacing: .04em;
        }
        .exp-co {
          font-size: 11px; color: #efeff0; margin-bottom: .8rem;
          display: flex; align-items: center; gap: 5px;
        }
        .exp-co::before {
          content: ''; width: 3px; height: 3px; border-radius: 50%;
          background: #9b7ff4; display: inline-block; flex-shrink: 0;
        }
        .exp-ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .exp-ul li {
          font-size: 12px; color: #f5f5f8; line-height: 1.7;
          padding-left: 13px; position: relative;
        }
        .exp-ul li::before {
          content: ''; position: absolute; left: 0; top: 8px;
          width: 5px; height: 1.5px; background: #5b8dee; border-radius: 2px;
        }

        /* ── EDUCATION ── */
        .edu-logo {
          width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
          background: rgba(57,213,196,.09);
          border: .5px solid rgba(57,213,196,.18);
          display: flex; align-items: center; justify-content: center; color: #39d5c4;
        }
        .edu-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: .8rem; }
        .edu-l     { display: flex; align-items: center; gap: 11px; }
        .edu-r     { display: flex; flex-direction: column; align-items: flex-end; gap: 5px; }
        .edu-deg   { font-size: 13px; font-weight: 700; color: #e0e0f4; margin-bottom: 2px; }
        .edu-meta  { font-size: 11px; color: #f8f8fa; line-height: 1.55; }
        .edu-badge {
          font-size: 11px; font-weight: 700; padding: 5px 13px; border-radius: 100px;
          background: rgba(155,127,244,.1); color: #9b7ff4;
          border: .5px solid rgba(155,127,244,.22);
        }

        /* ── SKILLS ── */
        .sk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
        .sk-item {
          background: rgba(255,255,255,.022);
          border: .5px solid rgba(255,255,255,.05);
          border-radius: 8px; padding: 8px 10px;
          display: flex; align-items: center; gap: 6px;
          transition: background .18s, border-color .18s;
        }
        .sk-item:hover { background: rgba(91,141,238,.06); border-color: rgba(91,141,238,.16); }
        .sk-dot  { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
        .sk-name { font-size: 11px; color: #f4f4f9; font-weight: 600; white-space: nowrap; }

        /* ── CTA ROW ── */
        .cta-row {
          display: flex; justify-content: center; align-items: center;
          gap: .85rem; margin-top: 2.2rem; flex-wrap: wrap;
        }

        .btn-dl {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #5b8dee 0%, #9b7ff4 100%);
          color: #fff; font-size: 12.5px; font-weight: 700;
          padding: 11px 26px; border-radius: 10px;
          text-decoration: none; border: none; cursor: pointer;
          letter-spacing: .02em; position: relative; overflow: hidden;
          box-shadow: 0 6px 22px rgba(91,141,238,.24);
          transition: transform .2s, box-shadow .2s;
        }
        .btn-dl::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,.12), transparent);
          opacity: 0; transition: opacity .2s;
        }
        .btn-dl:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(91,141,238,.34); }
        .btn-dl:hover::before { opacity: 1; }
        .btn-dl:active { transform: scale(.97); }

        .btn-ol {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12.5px; font-weight: 600; color: #5e5e80;
          text-decoration: none; padding: 11px 20px; border-radius: 10px;
          border: .5px solid rgba(255,255,255,.09);
          background: rgba(255,255,255,.025);
          transition: color .18s, border-color .18s, background .18s; cursor: pointer;
        }
        .btn-ol:hover { color: #d0d0f0; border-color: rgba(255,255,255,.16); background: rgba(255,255,255,.05); }

        /* ── ICON UTIL ── */
        .ico { width: 14px; height: 14px; display: inline-block; vertical-align: middle; flex-shrink: 0; }
      `}</style>

      <section id="resume" className="rs" ref={sectionRef}>
        <div className="rs-bg" />
        <div className="rs-blob rs-blob-a" />
        <div className="rs-blob rs-blob-b" />

        <div className="rs-inner">
          {/* ── HEADER ── */}
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
              href="/assests/Gawali_Omkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rs-dl-mini"
            >
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
              Download PDF
            </a>
          </div>

          {/* ── BENTO GRID ── */}
          <div className="rs-bento">
            {/* 01 — SUMMARY */}
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
                with React, Node.js, Express, MongoDB, and Next.js. Pursuing
                B.E. in AI &amp; Data Science.
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

            {/* 02 — EXPERIENCE (spans 2 cols on ≥860px) */}
            <div
              className="rc sh-b si rs-card-exp"
              style={{ gridColumn: "span 2" }}
            >
              <span className="rc-num">02</span>
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

              <div className="rdiv" style={{ marginBottom: ".8rem" }} />
              <div className="tag-row" style={{ marginBottom: 0 }}>
                <span className="tag tg-b">C++</span>
                <span className="tag tg-p">Canva</span>
                <span className="tag tg-c">Content</span>
                <span className="tag tg-a">ChatGPT</span>
              </div>
            </div>

            {/* 03 — EDUCATION */}
            <div className="rc sh-c si" style={{ gridColumn: "span 2" }}>
              <span className="rc-num">03</span>
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
                      ML · Deep Learning · Full Stack
                    </div>
                  </div>
                </div>
                <div className="edu-r">
                  <span className="edu-badge">Grad 2027</span>
                  <span className="tag tg-c" style={{ fontSize: "9.5px" }}>
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* 04 — TECH STACK */}
            <div className="rc sh-a si">
              <span className="rc-num">04</span>
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

          {/* ── CTA ROW ── */}
          <div className="cta-row si">
            <a
              href="/assests/Gawali_Omkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rs-dl-mini"
            >
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
