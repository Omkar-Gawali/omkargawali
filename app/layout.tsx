// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Omkar Gawali | Portfolio",
  description: "Full Stack Developer | MERN | Java",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow-1">{children}</main>

        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
