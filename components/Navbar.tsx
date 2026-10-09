"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home", icon: "fa-house" },
  { href: "/about", label: "About", icon: "fa-user" },
  { href: "/projects", label: "Projects", icon: "fa-code" },
  { href: "/resume", label: "Resume", icon: "fa-file" },
  { href: "/contact", label: "Contact", icon: "fa-envelope" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap');

        .nv-brand-name {
          font-family: 'Plus Jakarta Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
          font-weight: 800;
          font-size: 1.05rem;
          letter-spacing: -0.02em;
          color: #11142b;
          line-height: 1.15;
          white-space: nowrap;
        }
        .nv-brand-sub {
          font-family: Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          color: #7a809c;
          margin-top: 2px;
          white-space: nowrap;
        }
        .nv-logo {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg,#6d5efc,#0ea5e9);
          box-shadow: 0 4px 12px rgba(109,94,252,0.3);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif;
          font-weight: 800; font-size: 0.88rem; letter-spacing: 0;
          color: #fff;
        }
        .nv-link {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 14px; border-radius: 9px;
          font-family: Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
          font-size: 0.9rem; font-weight: 500;
          text-decoration: none; color: #4a5070;
          background: transparent; border: 1px solid transparent;
          transition: all 0.18s;
        }
        .nv-link:hover { color: #11142b; background: rgba(17,20,43,0.05); }
        .nv-link.active {
          color: #5446e0; font-weight: 600;
          background: rgba(109,94,252,0.1);
          border-color: rgba(109,94,252,0.25);
        }
        .nv-link:focus-visible, .nv-burger:focus-visible, .nv-mlink:focus-visible {
          outline: 3px solid rgba(109,94,252,0.45); outline-offset: 2px;
        }
        .nv-mlink {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 9px; margin-bottom: 2px;
          font-family: Inter, system-ui, sans-serif;
          font-size: 0.95rem; font-weight: 500; color: #4a5070;
          text-decoration: none; border: 1px solid transparent;
          transition: all 0.16s;
        }
        .nv-mlink:hover { background: rgba(17,20,43,0.04); color: #11142b; }
        .nv-mlink.active {
          color: #5446e0; font-weight: 600;
          background: rgba(109,94,252,0.09);
          border-color: rgba(109,94,252,0.22);
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(255,255,255,0.94)"
            : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${scrolled ? "#e4e7f1" : "rgba(228,231,241,0.7)"}`,
          boxShadow: scrolled ? "0 4px 24px rgba(40,45,100,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Bootstrap .container so the navbar lines up with the page content */}
        <div
          className="container d-flex align-items-center justify-content-between"
          style={{ height: 64 }}
        >
          {/* Brand */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 11,
            }}
          >
            <div className="nv-logo">OG</div>
            <div>
              <div className="nv-brand-name">
                Omkar{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#6d5efc,#0ea5e9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Gawali
                </span>
              </div>
              <div className="nv-brand-sub">MERN · AI Developer</div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav
            className="d-none d-md-flex"
            style={{ alignItems: "center", gap: 2 }}
          >
            {links.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={`nv-link${isActive(href) ? " active" : ""}`}
              >
                <i
                  className={`fa-solid ${icon}`}
                  style={{
                    fontSize: "0.78rem",
                    color: isActive(href) ? "#6d5efc" : "inherit",
                  }}
                />
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="nv-burger d-flex d-md-none"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{
              width: 38,
              height: 38,
              alignItems: "center",
              justifyContent: "center",
              background: open ? "rgba(109,94,252,0.1)" : "#fff",
              border: `1px solid ${open ? "rgba(109,94,252,0.3)" : "#e4e7f1"}`,
              borderRadius: 9,
              cursor: "pointer",
              color: open ? "#6d5efc" : "#4a5070",
              transition: "all 0.2s",
            }}
          >
            <i
              className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}
              style={{ fontSize: "1rem" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className="d-md-none"
        style={{
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          zIndex: 990,
          transform: open ? "translateY(0)" : "translateY(-10px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition:
            "transform 0.26s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease",
        }}
      >
        <div
          style={{
            margin: "10px",
            background: "#ffffff",
            border: "1px solid #e4e7f1",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(40,45,100,0.18)",
          }}
        >
          <div style={{ padding: 8 }}>
            {links.map(({ href, label, icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nv-mlink${active ? " active" : ""}`}
                >
                  <i
                    className={`fa-solid ${icon}`}
                    style={{
                      fontSize: "0.85rem",
                      width: 18,
                      textAlign: "center",
                      color: active ? "#6d5efc" : "#9aa0ba",
                    }}
                  />
                  {label}
                  {active && (
                    <span
                      style={{
                        marginLeft: "auto",
                        padding: "2px 8px",
                        borderRadius: 20,
                        background: "rgba(109,94,252,0.12)",
                        color: "#5446e0",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                      }}
                    >
                      Current
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="d-md-none"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 980,
            background: "rgba(17,20,43,0.3)",
            backdropFilter: "blur(3px)",
          }}
        />
      )}
    </>
  );
}
