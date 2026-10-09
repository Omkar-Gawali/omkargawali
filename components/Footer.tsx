// components/Footer.tsx
export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e4e7f1",
        padding: "22px 0",
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
      }}
    >
      <div className="container">
        <p
          className="footer-text"
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: "0.88rem",
            color: "#4a5070",
          }}
        >
          Made with{" "}
          <i
            className="fa-solid fa-heart footer-heart"
            aria-hidden="true"
            style={{ color: "#ef4444", fontSize: "0.8rem" }}
          ></i>{" "}
          by{" "}
          <span style={{ color: "#11142b", fontWeight: 700 }}>
            Omkar Gawali
          </span>
        </p>
      </div>
    </footer>
  );
}
