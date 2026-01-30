"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"" | "success" | "error">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    <section id="contact" className="contact-section">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have an opportunity, doubt, or idea? Let’s talk.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* LEFT INFO */}
          <div className="col-lg-5 ">
            <div className="card-base contact-info h-100">
              <h3 className="mb-3">Let’s Connect</h3>
              <p className="text-light mb-4">
                I’m open to internships, freelance work, and collaboration on
                interesting projects.
              </p>

              <ul className="list-unstyled contact-list">
                <li>
                  <a
                    href="mailto:omkargawali702@gmail.com"
                    className="contact-link"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <span>omkargawali702@gmail.com</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://linkedin.com/in/omkar-ashruba-gawali-33855a22b"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/Omkar-Gawali"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="card-base contact-form h-100"
            >
              <h3 className="mb-4">Send a Message</h3>

              {/* NAME */}
              <div className="mb-4">
                <label className="form-label">
                  <i className="fa-solid fa-user me-2"></i>Name
                </label>
                <input
                  name="name"
                  className="form-control glass-input"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <label className="form-label">
                  <i className="fa-solid fa-envelope me-2"></i>Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control glass-input"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-4">
                <label className="form-label">
                  <i className="fa-solid fa-message me-2"></i>Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="form-control glass-input"
                  placeholder="Write your message here..."
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="btn btn-primary w-100 contact-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin me-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane me-2"></i>
                    Send Message
                  </>
                )}
              </button>

              {/* STATUS */}
              {status === "success" && (
                <p className="form-status success mt-4 text-center">
                  <i className="fa-solid fa-circle-check me-2"></i>
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="form-status error mt-4 text-center">
                  <i className="fa-solid fa-circle-xmark me-2"></i>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
