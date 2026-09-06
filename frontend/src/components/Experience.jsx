import React from "react";
import { Briefcase, Award } from "lucide-react";
import { EXPERIENCE, CERTIFICATIONS } from "../data/portfolioData";
import { Reveal } from "./Navbar";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal className="section-head">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Roles and recognition</h2>
      </Reveal>

      <div className="exp-grid">
        <Reveal className="exp-col" delay={40}>
          <h3 className="exp-col-title">
            <Briefcase size={15} /> Roles
          </h3>
          <div className="exp-timeline">
            {EXPERIENCE.map((e) => (
              <div className="exp-row" key={e.role}>
                <p className="exp-role">{e.role}</p>
                <p className="exp-org">{e.org}<span className="dim"> — {e.time}</span></p>
                <p className="exp-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="exp-col" delay={100}>
          <h3 className="exp-col-title">
            <Award size={15} /> Certifications
          </h3>
          <ul className="cert-list">
            {CERTIFICATIONS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
