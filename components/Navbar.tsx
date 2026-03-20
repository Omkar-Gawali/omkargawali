"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home", icon: "fa-house" },
    { href: "/about", label: "About", icon: "fa-user" },
    { href: "/projects", label: "Projects", icon: "fa-code" },
    { href: "/resume", label: "Resume", icon: "fa-file" },
    { href: "/contact", label: "Contact", icon: "fa-envelope" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(6,6,10,0.97)" : "rgba(6,6,10,0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "#1e1e2a" : "rgba(255,255,255,0.06)"}`,
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 20px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo / Brand ── */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {/* Avatar initials */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                flexShrink: 0,
                background: "linear-gradient(135deg,#6c63ff,#38bdf8)",
                boxShadow: "0 2px 12px rgba(108,99,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "inherit",
                fontWeight: 800,
                fontSize: "0.85rem",
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              OG
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "-0.025em",
                  color: "#f0f0f8",
                  lineHeight: 1.1,
                }}
              >
                Omkar{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#a78bfa,#38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Gawali
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#ededf3",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginTop: 1,
                }}
              >
                MERN · AI Developer
              </div>
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <nav
            className="d-none d-md-flex"
            style={{ alignItems: "center", gap: 2 }}
          >
            {links.map(({ href, label, icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    fontSize: "0.855rem",
                    fontWeight: active ? 600 : 500,
                    textDecoration: "none",
                    color: active ? "#f0f0f8" : "#f4f4fc",
                    background: active
                      ? "linear-gradient(135deg,rgba(108,99,255,0.18),rgba(56,189,248,0.08))"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(108,99,255,0.28)"
                      : "1px solid transparent",
                    transition: "all 0.18s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "#ededed";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "#6060a0";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  <i
                    className={`fa-solid ${icon}`}
                    style={{
                      fontSize: "0.75rem",
                      color: active ? "#a78bfa" : "inherit",
                    }}
                  />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="d-flex d-md-none"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              width: 38,
              height: 38,
              alignItems: "center",
              justifyContent: "center",
              background: open
                ? "rgba(108,99,255,0.12)"
                : "rgba(255,255,255,0.04)",
              border: `1px solid ${open ? "rgba(108,99,255,0.3)" : "#1e1e2a"}`,
              borderRadius: 9,
              cursor: "pointer",
              color: open ? "#a78bfa" : "#6060a0",
              transition: "all 0.2s",
            }}
          >
            <i
              className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}
              style={{ fontSize: "1rem", transition: "all 0.2s" }}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
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
            margin: "10px 10px",
            background: "#0a0a12",
            border: "1px solid #1e1e2a",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          }}
        >
          {/* Nav links */}
          <div style={{ padding: "8px" }}>
            {links.map(({ href, label, icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 14px",
                    borderRadius: 9,
                    marginBottom: 2,
                    color: active ? "#edecf1" : "#ededf1",
                    background: active ? "rgba(108,99,255,0.1)" : "transparent",
                    border: active
                      ? "1px solid rgba(108,99,255,0.2)"
                      : "1px solid transparent",
                    fontSize: "0.92rem",
                    fontWeight: active ? 600 : 500,
                    textDecoration: "none",
                    transition: "all 0.16s",
                  }}
                >
                  <i
                    className={`fa-solid ${icon}`}
                    style={{
                      fontSize: "0.85rem",
                      width: 18,
                      textAlign: "center",
                      color: active ? "#a78bfa" : "#454560",
                    }}
                  />
                  {label}
                  {active && (
                    <span
                      style={{
                        marginLeft: "auto",
                        padding: "2px 8px",
                        borderRadius: 20,
                        background: "rgba(108,99,255,0.15)",
                        color: "#a78bfa",
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
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
          }}
        />
      )}
    </>
  );
}
