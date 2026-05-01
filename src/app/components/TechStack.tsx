"use client";

import { techStack } from "../data/techStack";

export default function TechStack() {
  const handleMouseMove = (e: React.MouseEvent, el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -12;
    const rotateY = (x / rect.width - 0.5) * 12;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const reset = (el: HTMLDivElement) => {
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section id="tech" className="section">
      <h2>My Tech Stack</h2>

      <div className="techGrid3D">
        {techStack.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="techCard3D"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => reset(e.currentTarget)}
            >
              {Icon && <Icon size={28} />}

              <h3>{tech.name}</h3>
              <p>{tech.category}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}