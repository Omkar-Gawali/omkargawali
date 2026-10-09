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
    color: "#2563eb",
    bg: "rgba(37,99,235,.09)",
    border: "rgba(37,99,235,.2)",
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
    color: "#0d9488",
    bg: "rgba(13,148,136,.09)",
    border: "rgba(13,148,136,.2)",
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
    color: "#7c3aed",
    bg: "rgba(124,58,237,.09)",
    border: "rgba(124,58,237,.2)",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"" | "success" | "error">("");
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

        .ct * { box-sizing: border-box; margin: 0; padding: 0; }
        .ct {
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
        .ct-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(17,20,43,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,20,43,.04) 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 30%, black 20%, transparent 100%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 30%, black 20%, transparent 100%);
        }
        .ct-blob { position: absolute; border-radius: 50%; pointer-events: none; }
        .ct-blob-a {
          width: 540px; height: 540px; top: -150px; left: -110px;
          background: radial-gradient(circle, rgba(37,99,235,.14) 0%, transparent 70%);
        }
        .ct-blob-b {
          width: 420px; height: 420px; bottom: -110px; right: -70px;
          background: radial-gradient(circle, rgba(124,58,237,.14) 0%, transparent 70%);
        }
        .ct-inner { max-width: 1020px; margin: 0 auto; padding: 0 1.75rem; position: relative; z-index: 1; }

        .si { opacity: 0; transform: translateY(22px); transition: opacity .5s ease, transform .5s ease; }
        .si.in { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .si { opacity: 1; transform: none; transition: none; } }

        .ct-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 12px; font-weight: 600; color: #1d4ed8;
          background: rgba(37,99,235,.08); border: 1px solid rgba(37,99,235,.2);
          padding: 5px 13px; border-radius: 100px; margin-bottom: 1rem;
        }
        .ct-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563eb; animation: blink 2.2s ease-in-out infinite; }
        @keyframes blink {
          0%,100% { opacity: 1; transform: scale(1); }
          50%     { opacity: .3; transform: scale(.55); }
        }
        .ct-h2 { font-size: 2.2rem; font-weight: 800; line-height: 1.1; color: var(--ink); letter-spacing: -.025em; margin-bottom: .45rem; }
        .ct-h2 .grd {
          background: linear-gradient(130deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ct-sub { font-size: 14.5px; color: var(--text); line-height: 1.7; margin-bottom: 2.8rem; }

        .ct-layout { display: grid; grid-template-columns: 340px 1fr; gap: 1.2rem; align-items: start; }
        @media (max-width: 780px) { .ct-layout { grid-template-columns: 1fr; } }

        .rc {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.6rem; position: relative; overflow: hidden;
          box-shadow: 0 2px 8px rgba(40,45,100,.05);
          transition: border-color .28s, box-shadow .28s;
        }
        .rc::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; opacity: 0; transition: opacity .28s; }
        .rc:hover { box-shadow: 0 14px 34px rgba(40,45,100,.1); }
        .rc:hover::after { opacity: 1; }
        .rc.sh-b:hover { border-color: rgba(37,99,235,.35); }
        .rc.sh-b::after { background: linear-gradient(90deg,transparent,#2563eb,transparent); }
        .rc.sh-p:hover { border-color: rgba(124,58,237,.35); }
        .rc.sh-p::after { background: linear-gradient(90deg,transparent,#7c3aed,transparent); }

        .ct-info-title, .ct-form-title { font-size: 16px; font-weight: 700; color: var(--ink); }
        .ct-info-title { margin-bottom: .35rem; }
        .ct-form-title { margin-bottom: 1.25rem; }
        .ct-info-sub { font-size: 13px; color: var(--text); line-height: 1.7; margin-bottom: 1.5rem; }

        .ct-avail {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 12px; font-weight: 600; color: #047857;
          background: #ecfdf5; border: 1px solid #a7f3d0;
          padding: 5px 13px; border-radius: 100px; margin-bottom: 1.5rem;
        }
        .ct-avail-dot { width: 6px; height: 6px; border-radius: 50%; background: #10b981; animation: blink 2s ease-in-out infinite; }

        .ct-links { display: flex; flex-direction: column; gap: 8px; }
        .ct-link {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 10px;
          border: 1px solid var(--border); background: var(--bg);
          text-decoration: none;
          transition: background .18s, border-color .18s, transform .18s;
        }
        .ct-link:hover { background: #fff; border-color: #c9ceea; transform: translateX(2px); }
        .ct-link:focus-visible { outline: 3px solid rgba(109,94,252,.45); outline-offset: 2px; }
        .ct-link-icon { width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .ct-link-info { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .ct-link-label { font-size: 11px; color: var(--muted); font-weight: 600; }
        .ct-link-value { font-size: 12.5px; color: var(--ink); font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .ct-field { margin-bottom: 1rem; }
        .ct-label { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
        .ct-label svg { color: #2563eb; }

        .ct-input, .ct-textarea {
          width: 100%; background: var(--bg); border: 1px solid var(--border);
          border-radius: 10px; padding: 11px 13px;
          font-size: 14px; color: var(--ink);
          font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif;
          outline: none; -webkit-appearance: none;
          transition: border-color .2s, background .2s, box-shadow .2s;
        }
        .ct-input::placeholder, .ct-textarea::placeholder { color: #9aa0ba; }
        .ct-input:hover, .ct-textarea:hover { border-color: #c9ceea; }
        .ct-input:focus, .ct-textarea:focus {
          border-color: #2563eb; background: #fff;
          box-shadow: 0 0 0 4px rgba(37,99,235,.12);
        }
        .ct-textarea { resize: vertical; min-height: 120px; line-height: 1.65; }
        .ct-field-meta { display: flex; justify-content: flex-end; margin-top: 4px; }
        .ct-char { font-size: 11px; color: var(--muted); }
        .ct-char.warn { color: #d97706; font-weight: 600; }

        .ct-btn {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          color: #fff; font-family: inherit; font-size: 14px; font-weight: 700;
          padding: 13px 24px; border-radius: 10px; border: none; cursor: pointer;
          box-shadow: 0 6px 20px rgba(37,99,235,.28);
          transition: transform .2s, box-shadow .2s, opacity .2s;
          margin-top: .25rem;
        }
        .ct-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(37,99,235,.38); }
        .ct-btn:active:not(:disabled) { transform: scale(.98); }
        .ct-btn:focus-visible { outline: 3px solid rgba(37,99,235,.4); outline-offset: 2px; }
        .ct-btn:disabled { opacity: .6; cursor: not-allowed; }
        .ct-spin { animation: spin .8s linear infinite; display: inline-block; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .ct-status {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600;
          padding: 11px 14px; border-radius: 10px; margin-top: .85rem;
          animation: fadeUp .3s ease;
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .ct-status.ok { color: #047857; background: #ecfdf5; border: 1px solid #a7f3d0; }
        .ct-status.err { color: #b91c1c; background: #fef2f2; border: 1px solid #fecaca; }
      `}</style>

      <section id="contact" className="ct" ref={sectionRef}>
        <div className="ct-bg" />
        <div className="ct-blob ct-blob-a" />
        <div className="ct-blob ct-blob-b" />

        <div className="ct-inner">
          {/* Header */}
          <div className="si">
            <div className="ct-eyebrow">
              <span className="ct-eyebrow-dot" />
              Get in touch
            </div>
            <h2 className="ct-h2">
              Contact <span className="grd">Me</span>
            </h2>
            <p className="ct-sub">
              Have an opportunity, idea, or question? I&apos;d love to hear from
              you.
            </p>
          </div>

          <div className="ct-layout">
            {/* Info panel */}
            <div className="rc sh-b si">
              <div className="ct-info-title">Let&apos;s Connect</div>
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
                        border: `1px solid ${l.border}`,
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
                        color: "#9aa0ba",
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

            {/* Form panel */}
            <div className="rc sh-p si">
              <div className="ct-form-title">Send a Message</div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-name">
                    <svg
                      width="12"
                      height="12"
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
                    id="ct-name"
                    name="name"
                    className="ct-input"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-email">
                    <svg
                      width="12"
                      height="12"
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
                    id="ct-email"
                    type="email"
                    name="email"
                    className="ct-input"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-message">
                    <svg
                      width="12"
                      height="12"
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
                    id="ct-message"
                    name="message"
                    rows={5}
                    maxLength={500}
                    className="ct-textarea"
                    placeholder="Write your message here…"
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                  <div className="ct-field-meta">
                    <span
                      className={`ct-char${form.message.length > 450 ? " warn" : ""}`}
                    >
                      {form.message.length} / 500
                    </span>
                  </div>
                </div>

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

                {status === "success" && (
                  <div className="ct-status ok" role="status">
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
                    Message sent! I&apos;ll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="ct-status err" role="alert">
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
