"use client";

import { useState } from "react";
import { scrollTo } from "../utils/scrollTo";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <nav className="navbar glass">
      {/* LEFT: Name */}
      <div style={{ fontWeight: 700, fontSize: "18px" }}>
        Raquelle Cadena
      </div>

      {/* CENTER: Links (desktop only) */}
      <div className="nav-center">
        <a onClick={() => handleClick("about")}>About</a>
        <a onClick={() => handleClick("projects")}>Projects</a>
        <a onClick={() => handleClick("tech")}>Experience</a>
        <a onClick={() => handleClick("contact")}>Contact</a>
      </div>

      {/* RIGHT: Icons + CTA (desktop only) */}
      <div className="nav-right">
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
          onClick={() => handleClick("contact")}
        >
          Let’s Connect
        </button>
      </div>

      {/* 🍔 HAMBURGER (mobile only) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* 📱 MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a onClick={() => handleClick("about")}>About</a>
        <a onClick={() => handleClick("projects")}>Projects</a>
        <a onClick={() => handleClick("tech")}>Experience</a>
        <a onClick={() => handleClick("contact")}>Contact</a>

        <div className="mobile-icons">
          <a
            href="https://www.linkedin.com/in/raquelle-cadena-7493013a7/"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://www.github.com/raquelledianne"
            target="_blank"
          >
            <FaGithub size={22} />
          </a>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => handleClick("contact")}
        >
          Let’s Connect
        </button>
      </div>
    </nav>
  );
}