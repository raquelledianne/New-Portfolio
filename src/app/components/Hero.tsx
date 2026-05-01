"use client";

import useTyping from "../hooks/useTyping";

export default function Hero() {
  const name = useTyping("Raquelle Cadena", 80);
  const role = useTyping("Frontend Web Developer", 60);

  const bio = useTyping(
    "I build responsive, high-performance web applications with React and TypeScript, focused on creating seamless user experiences that feel intuitive and modern.",
    25
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const showRole = name.length === "Raquelle Cadena".length;
  const showBio = role.length === "Frontend Web Developer".length;

  return (
    <section className="hero">
      {/* TEXT CONTENT */}
      <div className="hero-text">
        <h1 className="hero-title">{name}</h1>

        {showRole && <h2 className="hero-role">{role}</h2>}

        {showBio && <p className="hero-bio">{bio}</p>}

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo("about")}>
            About Me
          </button>

          <button className="btn btn-secondary" onClick={() => scrollTo("projects")}>
            My Projects
          </button>
        </div>
      </div>

      {/* PROFILE IMAGE */}
      <div className="hero-image">
        <img src="/profile.jpg" alt="Profile" />
      </div>
    </section>
  );
}