"use client";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="projectsGrid">
        {projects.map((project) => (
          <div key={project.title} className="projectCard">
            
            {/* IMAGE */}
            <div className="projectImage">
              <img src={project.img} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="projectContent">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {/* LINKS */}
              <div className="projectLinks">
                <a href={project.link} target="_blank">
                  Live Site
                </a>
                <a href={project.github} target="_blank">
                  GitHub
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}