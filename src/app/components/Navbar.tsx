"use client";

import { scrollTo } from "../utils/scrollTo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar glass">
      {/* LEFT: Name */}
      <div style={{ fontWeight: 700, fontSize: "18px" }}>
        Raquelle Cadena
      </div>

      {/* CENTER: Links */}
      <div>
        <a onClick={() => scrollTo("about")}>About</a>
        <a onClick={() => scrollTo("projects")}>Projects</a>
        <a onClick={() => scrollTo("tech")}>Experience</a>
        <a onClick={() => scrollTo("contact")}>Contact</a>
      </div>

      {/* RIGHT: Icons */}
      <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
        <a
          href="https://www.linkedin.com/in/raquelle-cadena-7493013a7/"
          target="_blank"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="https://www.github.com/raquelledianne"
          target="_blank"
        >
          <FaGithub size={20} />
        </a>

        <button
          className="btn btn-primary"
          onClick={() => scrollTo("contact")}
        >
          Let’s Connect
        </button>
      </div>
    </nav>
  );
}