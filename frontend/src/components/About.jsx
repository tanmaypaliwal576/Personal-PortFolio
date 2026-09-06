import React from "react";
import { GraduationCap } from "lucide-react";
import { EDUCATION, SKILL_GROUPS } from "../data/portfolioData";
import { Reveal } from "./Navbar";

function Stack() {
  return (
    <section id="stack" className="section">
      <Reveal className="section-head">
        <p className="section-kicker">Stack</p>
        <h2 className="section-title">Tools I reach for</h2>
      </Reveal>

      <div className="stack-list">
        {SKILL_GROUPS.map((g, i) => {
          const Icon = g.icon;
          return (
            <Reveal className="stack-row" key={g.label} delay={i * 40}>
              <div className="stack-row-label">
                <Icon size={16} />
                <span>{g.label}</span>
              </div>
              <p className="stack-row-items">{g.items.join(",  ")}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}


export default function About() {
  return (
    <>
      <section id="about" className="section">
        

        <div className="about-grid">
          <Reveal className="about-side" delay={40}>
            <div className="monogram">TP</div>
            <div className="status-pill">
              <span className="pulse" /> open to opportunities
            </div>
          </Reveal>

          <Reveal className="about-copy" delay={90}>
            <p>
              I'm a B.Tech Computer Engineering student who likes turning ideas
              into working software — from real-time chat apps to full
              e-commerce platforms. Most of my time lives in the MERN stack,
              though I reach for Python and data tools when a problem calls
              for it.
            </p>
            <p>
              I care about the small decisions: how a page loads, how a form
              responds, how a system holds up once real people start using it.
              Outside of building, I've also taught Python to students who were
              just starting out — a reminder that clarity matters as much as
              cleverness.
            </p>
            <dl className="kv-grid">
              <div>
                <dt>Based in</dt>
                <dd>Indore, India</dd>
              </div>
              <div>
                <dt>Studying</dt>
                <dd>B.Tech, Computer Engineering</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Full-stack Web Development</dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>Open to internships and roles</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="edu-timeline">
          {EDUCATION.map((e, i) => (
            <Reveal className="edu-row" key={e.role} delay={i * 80}>
              <div className="edu-marker">
                <GraduationCap size={15} />
              </div>
              <div className="edu-content">
                <p className="edu-role">{e.role}</p>
                <p className="edu-org">{e.org}<span className="dim"> — {e.time}</span></p>
                {e.desc && <p className="edu-desc">{e.desc}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stack />
    </>
  );
}
