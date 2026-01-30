"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-md custom-navbar">
        <div className="container">
          {/* BRAND */}
          <Link href="/" className="navbar-brand brand-logo">
            <span>Omkar</span>
            <span className="brand-accent">Gawali</span>
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto nav-menu">
              <li className="nav-item">
                <Link href="/" className={isActive("/")}>
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={isActive("/about")}>
                  <i className="fa-solid fa-user"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" className={isActive("/projects")}>
                  <i className="fa-solid fa-code"></i> Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/resume" className={isActive("/resume")}>
                  <i className="fa-solid fa-file"></i> Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={isActive("/contact")}>
                  <i className="fa-solid fa-envelope"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
