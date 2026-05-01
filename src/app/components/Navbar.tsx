"use client";

import { scrollTo } from "../utils/scrollTo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const handleClick = (id: string) => {
    scrollTo(id);
  };

  return (
    <nav className="navbar glass">

      {/* LEFT */}
      <div className="nav-left">
        <div style={{ fontWeight: 700, fontSize: "18px" }}>
          Raquelle Cadena
        </div>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <a onClick={() => handleClick("about")}>About</a>
        <a onClick={() => handleClick("projects")}>Projects</a>
        <a onClick={() => handleClick("tech")}>Experience</a>
        <a onClick={() => handleClick("contact")}>Contact</a>
      </div>

      {/* RIGHT */}
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

    </nav>
  );
}