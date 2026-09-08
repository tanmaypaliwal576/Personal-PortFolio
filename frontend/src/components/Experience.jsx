import React from "react";
import { Briefcase, Award, ArrowUpRight } from "lucide-react";
import { EXPERIENCE, CERTIFICATIONS } from "../data/portfolioData";
import { Reveal } from "./Navbar";
import FlowingMenu from "./FlowingMenu.jsx";

export default function Experience() {
  const certificationItems = CERTIFICATIONS.map((cert) => ({
    link: cert.link || "#experience",
    text: `${cert.title} — ${cert.issuer}`,
    image: cert.image,
  }));

  return (
    <section id="experience" className="section">
      {/* SECTION HEADING */}
      <Reveal className="section-head">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Roles and recognition</h2>
      </Reveal>

      {/* ROLES */}
      <Reveal
        className="exp-col"
        delay={40}
        style={{ marginBottom: "20px" }}
      >
        <h3 className="exp-col-title">
          <Briefcase size={15} /> Roles
        </h3>

        <div className="exp-timeline">
          {EXPERIENCE.map((e) => (
            <div className="exp-row" key={e.role}>
              {/* EXPERIENCE CONTENT */}
              <div className="exp-content">
                <p className="exp-role">{e.role}</p>

                <p className="exp-org">
                  {e.org}
                  <span className="dim"> — {e.time}</span>
                </p>

                <p className="exp-desc">{e.desc}</p>
              </div>

              {/* EXTERNAL LINK */}
              {e.link && (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link"
                  aria-label={`Visit ${e.org}`}
                >
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </a>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {/* CERTIFICATIONS */}
      <Reveal
        className="exp-col certifications-section"
        delay={100}
        style={{ marginTop: "40px" }}
      >
        <h3 className="exp-col-title">
          <Award size={15} /> Certifications
        </h3>

        <div
          className="cert-flowing-menu"
          style={{
            height: "440px",
            position: "relative",
            borderRadius: "4px",
            border: "1px solid var(--line)",
            background: "var(--ink-panel)",
            overflow: "hidden",
          }}
        >
          <FlowingMenu
            items={certificationItems}
            speed={15}
            textColor="#ffffff"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#090d16"
            borderColor="#263342"
          />
        </div>
      </Reveal>
    </section>
  );
}