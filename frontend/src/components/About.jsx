import React from "react";
import { GraduationCap } from "lucide-react";
import { EDUCATION, SKILL_GROUPS } from "../data/portfolioData";
import { Reveal } from "./Navbar";
import Lanyard from "./Lanyard";
import MagicBento from "./MagicBento";

function Stack() {
  return (
    <section id="stack" className="section">
      <Reveal className="section-head">
        <p className="section-kicker">Stack</p>
        <h2 className="section-title">Tools I reach for</h2>
      </Reveal>

      <Reveal delay={40}>
        <MagicBento items={SKILL_GROUPS} />
      </Reveal>
    </section>
  );
}


export default function About() {
  return (
    <>
      <section id="about" className="section">
        

        <div className="about-grid">
          <Reveal className="about-side" delay={40}>
            <div className="lanyard-container">
              <Lanyard
  position={[0, 0, 26]}
  gravity={[0, -40, 0]}
  frontImage="/tanmay-photo.jpeg"
  imageFit="cover"
/>
            </div>
            <div className="status-pill">
              <span className="pulse" /> open to opportunities
            </div>
          </Reveal>

          <Reveal className="about-copy" delay={90}>
            <p>
              I’m a B.Tech Computer Engineering student who enjoys turning ideas into working software—from real-time chat applications to full-stack e-commerce platforms. I primarily work with the MERN stack, while also using Python and data-focused tools when the problem calls for them.
            </p>
            <p>
I care about the details that make software better: how a page loads, how a form responds, and how a system performs when real users rely on it. I’ve also taught Python to students who were just getting started, which strengthened my belief that good software—and good engineering—starts with clarity.
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