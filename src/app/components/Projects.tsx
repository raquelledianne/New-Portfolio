import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid grid-3">
        {projects.map((p) => (
          <div key={p.title} className="glass" style={{ padding: "20px" }}>
            <img src={p.img} style={{ width: "100%", borderRadius: "12px" }} />
            <h3 style={{ marginTop: "12px" }}>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}