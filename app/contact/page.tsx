"use client";

import { useState, useRef, useEffect } from "react";

const contactLinks = [
  {
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
    label: "Email",
    value: "omkargawali702@gmail.com",
    href: "mailto:omkargawali702@gmail.com",
    color: "#5b8dee",
    bg: "rgba(91,141,238,.1)",
    border: "rgba(91,141,238,.2)",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "omkar-ashruba-gawali",
    href: "https://linkedin.com/in/omkar-ashruba-gawali-33855a22b",
    color: "#39d5c4",
    bg: "rgba(57,213,196,.1)",
    border: "rgba(57,213,196,.2)",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "Omkar-Gawali",
    href: "https://github.com/Omkar-Gawali",
    color: "#9b7ff4",
    bg: "rgba(155,127,244,.1)",
    border: "rgba(155,127,244,.2)",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [focused, setFocused] = useState<string | null>(null);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* ── BASE ── */
        .ct * { box-sizing: border-box; margin: 0; padding: 0; }
        .ct {
          position: relative;
          padding: 5rem 0 4.5rem;
          background: #070710;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #e8e8f4;
          overflow: hidden;
        }

        /* ── BG GRID ── */
        .ct-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(91,141,238,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,141,238,.03) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* ── GLOW BLOBS ── */
        .ct-blob { position: absolute; border-radius: 50%; pointer-events: none; }
        .ct-blob-a {
          width: 520px; height: 520px; top: -140px; left: -100px;
          background: radial-gradient(circle, rgba(91,141,238,.06) 0%, transparent 70%);
        }
        .ct-blob-b {
          width: 400px; height: 400px; bottom: -100px; right: -60px;
          background: radial-gradient(circle, rgba(155,127,244,.055) 0%, transparent 70%);
        }

        /* ── INNER ── */
        .ct-inner {
          max-width: 1020px; margin: 0 auto; padding: 0 1.75rem;
          position: relative; z-index: 1;
        }

        /* ── STAGGER ── */
        .si { opacity: 0; transform: translateY(22px); transition: opacity .5s ease, transform .5s ease; }
        .si.in { opacity: 1; transform: translateY(0); }
        .si:nth-child(1) { transition-delay: .00s; }
        .si:nth-child(2) { transition-delay: .08s; }
        .si:nth-child(3) { transition-delay: .16s; }

        /* ── EYEBROW ── */
        .ct-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 10px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: #5b8dee;
          background: rgba(91,141,238,.08);
          border: .5px solid rgba(91,141,238,.2);
          padding: 4px 12px; border-radius: 100px; margin-bottom: 1rem;
        }
        .ct-eyebrow-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #5b8dee;
          animation: blink 2.2s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .3; transform: scale(.55); }
        }

        /* ── HEADING ── */
        .ct-h2 {
          font-size: 2rem; font-weight: 800; line-height: 1.1;
          color: #f0f0f8; letter-spacing: -.02em; margin-bottom: .45rem;
        }
        .ct-h2 .grd {
          background: linear-gradient(130deg, #5b8dee 0%, #9b7ff4 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-sub { font-size: 13.5px; color: #f2f2f4; line-height: 1.7; margin-bottom: 2.8rem; }

        /* ── LAYOUT ── */
        .ct-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 1.2rem;
          align-items: start;
        }
        @media (max-width: 780px) {
          .ct-layout { grid-template-columns: 1fr; }
        }

        /* ── CARD BASE ── */
        .rc {
          background: #0c0c1a;
          border: .5px solid rgba(255,255,255,.065);
          border-radius: 16px;
          padding: 1.5rem;
          position: relative; overflow: hidden;
          transition: border-color .28s;
        }

        /* shimmer top */
        .rc::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          opacity: 0; transition: opacity .28s;
        }
        .rc:hover::after { opacity: 1; }

        .rc.sh-b:hover  { border-color: rgba(91,141,238,.22); }
        .rc.sh-b::after { background: linear-gradient(90deg,transparent,rgba(91,141,238,.5),transparent); }
        .rc.sh-p:hover  { border-color: rgba(155,127,244,.22); }
        .rc.sh-p::after { background: linear-gradient(90deg,transparent,rgba(155,127,244,.5),transparent); }

        /* ── INFO PANEL ── */
        .ct-info-title {
          font-size: 15px; font-weight: 700; color: #e0e0f4; margin-bottom: .35rem;
        }
        .ct-info-sub {
          font-size: 12px; color: #eeeef4; line-height: 1.7; margin-bottom: 1.5rem;
        }

        /* availability badge */
        .ct-avail {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10.5px; font-weight: 600;
          color: #39d5c4;
          background: rgba(57,213,196,.08);
          border: .5px solid rgba(57,213,196,.2);
          padding: 5px 12px; border-radius: 100px; margin-bottom: 1.5rem;
        }
        .ct-avail-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #39d5c4;
          animation: blink 2s ease-in-out infinite;
        }

        /* contact links */
        .ct-links { display: flex; flex-direction: column; gap: 8px; margin-bottom: 1.5rem; }
        .ct-link {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 10px;
          border: .5px solid rgba(255,255,255,.055);
          background: rgba(255,255,255,.022);
          text-decoration: none;
          transition: background .18s, border-color .18s, transform .18s;
        }
        .ct-link:hover { background: rgba(255,255,255,.045); border-color: rgba(255,255,255,.1); transform: translateX(2px); }

        .ct-link-icon {
          width: 28px; height: 28px; border-radius: 7px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .ct-link-info { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .ct-link-label { font-size: 10px; color: #f2f2fa; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
        .ct-link-value { font-size: 12px; color: #f8f8fd; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        /* response time note */
        .ct-note {
          display: flex; align-items: center; gap: 7px;
          font-size: 11px; color: #fbfbfe;
          background: rgba(255,255,255,.018);
          border: .5px solid rgba(255,255,255,.05);
          border-radius: 8px; padding: 8px 12px;
        }
        .ct-note svg { flex-shrink: 0; color: #fbbf24; }

        /* ── FORM PANEL ── */
        .ct-form-title {
          font-size: 15px; font-weight: 700; color: #e0e0f4; margin-bottom: 1.25rem;
        }

        .ct-field { margin-bottom: 1rem; }

        .ct-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 600; color: #44445e;
          text-transform: uppercase; letter-spacing: .09em;
          margin-bottom: 6px;
        }
        .ct-label svg { color: #5b8dee; }

        .ct-input, .ct-textarea {
          width: 100%;
          background: rgba(255,255,255,.025);
          border: .5px solid rgba(255,255,255,.07);
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 13px; color: #d0d0ec;
          font-family: 'Plus Jakarta Sans', sans-serif;
          outline: none;
          transition: border-color .2s, background .2s, box-shadow .2s;
          -webkit-appearance: none;
        }
        .ct-input::placeholder, .ct-textarea::placeholder { color: #f1f1f8; }
        .ct-input:hover, .ct-textarea:hover {
          border-color: rgba(255,255,255,.12);
          background: rgba(255,255,255,.03);
        }
        .ct-input.focused, .ct-textarea.focused {
          border-color: rgba(91,141,238,.4);
          background: rgba(91,141,238,.04);
          box-shadow: 0 0 0 3px rgba(91,141,238,.08);
        }
        .ct-textarea { resize: vertical; min-height: 110px; line-height: 1.65; }

        /* char counter */
        .ct-field-meta { display: flex; justify-content: flex-end; margin-top: 4px; }
        .ct-char { font-size: 10px; color: #2e2e46; }
        .ct-char.warn { color: #fbbf24; }

        /* ── SUBMIT BTN ── */
        .ct-btn {
          width: 100%;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, #5b8dee 0%, #9b7ff4 100%);
          color: #fff; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          padding: 12px 24px; border-radius: 10px;
          border: none; cursor: pointer;
          letter-spacing: .02em;
          position: relative; overflow: hidden;
          box-shadow: 0 6px 22px rgba(91,141,238,.22);
          transition: transform .2s, box-shadow .2s, opacity .2s;
          margin-top: .25rem;
        }
        .ct-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,.12), transparent);
          opacity: 0; transition: opacity .2s;
        }
        .ct-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(91,141,238,.32); }
        .ct-btn:hover:not(:disabled)::before { opacity: 1; }
        .ct-btn:active:not(:disabled) { transform: scale(.98); }
        .ct-btn:disabled { opacity: .55; cursor: not-allowed; }

        /* spinner */
        .ct-spin { animation: spin .8s linear infinite; display: inline-block; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── STATUS MESSAGES ── */
        .ct-status {
          display: flex; align-items: center; gap: 8px;
          font-size: 12.5px; font-weight: 600;
          padding: 11px 14px; border-radius: 10px; margin-top: .85rem;
          animation: fadeUp .3s ease;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ct-status.ok {
          color: #39d5c4;
          background: rgba(57,213,196,.08);
          border: .5px solid rgba(57,213,196,.2);
        }
        .ct-status.err {
          color: #f87171;
          background: rgba(248,113,113,.07);
          border: .5px solid rgba(248,113,113,.18);
        }
      `}</style>

      <section id="contact" className="ct" ref={sectionRef}>
        <div className="ct-bg" />
        <div className="ct-blob ct-blob-a" />
        <div className="ct-blob ct-blob-b" />

        <div className="ct-inner">
          {/* ── HEADER ── */}
          <div className="si">
            <div className="ct-eyebrow">
              <span className="ct-eyebrow-dot" />
              Get in Touch
            </div>
            <h2 className="ct-h2">
              Contact <span className="grd">Me</span>
            </h2>
            <p className="ct-sub">
              Have an opportunity, idea, or question? I'd love to hear from you.
            </p>
          </div>

          {/* ── LAYOUT ── */}
          <div className="ct-layout">
            {/* ── LEFT: INFO PANEL ── */}
            <div className="rc sh-b si">
              <div className="ct-info-title">Let's Connect</div>
              <p className="ct-info-sub">
                Open to internships, freelance projects, and interesting
                collaborations.
              </p>

              <div className="ct-avail">
                <span className="ct-avail-dot" />
                Available for work
              </div>

              <div className="ct-links">
                {contactLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="ct-link"
                  >
                    <div
                      className="ct-link-icon"
                      style={{
                        background: l.bg,
                        border: `.5px solid ${l.border}`,
                        color: l.color,
                      }}
                    >
                      {l.icon}
                    </div>
                    <div className="ct-link-info">
                      <span className="ct-link-label">{l.label}</span>
                      <span className="ct-link-value">{l.value}</span>
                    </div>
                    <svg
                      style={{
                        marginLeft: "auto",
                        flexShrink: 0,
                        color: "#2a2a40",
                      }}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: FORM PANEL ── */}
            <div className="rc sh-p si">
              <div className="ct-form-title">Send a Message</div>

              <form onSubmit={handleSubmit} noValidate>
                {/* NAME */}
                <div className="ct-field">
                  <label className="ct-label">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    Name
                  </label>
                  <input
                    name="name"
                    className={`ct-input${focused === "name" ? " focused" : ""}`}
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    autoComplete="name"
                  />
                </div>

                {/* EMAIL */}
                <div className="ct-field">
                  <label className="ct-label">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`ct-input${focused === "email" ? " focused" : ""}`}
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    autoComplete="email"
                  />
                </div>

                {/* MESSAGE */}
                <div className="ct-field">
                  <label className="ct-label">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className={`ct-textarea${focused === "message" ? " focused" : ""}`}
                    placeholder="Write your message here…"
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                  <div className="ct-field-meta">
                    <span
                      className={`ct-char${form.message.length > 450 ? " warn" : ""}`}
                    >
                      {form.message.length} / 500
                    </span>
                  </div>
                </div>

                {/* SUBMIT */}
                <button type="submit" className="ct-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <svg
                        className="ct-spin"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                {/* STATUS */}
                {status === "success" && (
                  <div className="ct-status ok">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="ct-status err">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Failed to send. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
