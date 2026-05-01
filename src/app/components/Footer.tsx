"use client";

export default function Footer() {
  return (
    <footer className="section" style={{ minHeight: "30vh", paddingTop: "60px" }}>
      <div className="container glass" style={{ padding: "40px", textAlign: "center" }}>
        
        {/* Name / branding */}
        <h3 style={{ color: "#c084fc", fontSize: "20px" }}>
          Raquelle Cadena
        </h3>

        {/* Copyright */}
        <p style={{ marginTop: "10px" }}>
          © 2026 Raquelle Cadena. All rights reserved.
        </p>

        {/* Sub text */}
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#9ca3af" }}>
          Built with React, Next.js & TypeScript
        </p>

        {/* Social links */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <a
            href="https://www.linkedin.com/in/raquelle-cadena-7493013a7/"
            target="_blank"
            style={{ color: "white", opacity: 0.7 }}
          >
            LinkedIn
          </a>

          <a
            href="https://www.github.com/raquelledianne"
            target="_blank"
            style={{ color: "white", opacity: 0.7 }}
          >
            GitHub
          </a>

          <a
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ color: "#10b981", cursor: "pointer" }}
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </footer>
  );
}