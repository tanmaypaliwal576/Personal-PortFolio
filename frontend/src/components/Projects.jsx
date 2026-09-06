import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import { Reveal } from "./Navbar";

function ProjectCard({ project, delay }) {
  const handleMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const reset = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <Reveal
      as="a"
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={`project-card ${project.size}`}
      delay={delay}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="project-spotlight" />
      <div className="project-index">{project.index}</div>
      <div className="project-body">
        <div className="project-heading">
          <h3>{project.title}</h3>
          <ArrowUpRight size={17} className="project-arrow" />
        </div>
        <p className="project-desc">{project.desc}</p>
        <div className="tag-row">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <Reveal className="section-head">
        <p className="section-kicker">Work</p>
        <h2 className="section-title">Selected projects</h2>
      </Reveal>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard project={p} key={p.title} delay={(i % 3) * 60} />
        ))}
      </div>
    </section>
  );
}
