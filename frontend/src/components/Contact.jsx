import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Phone, MapPin, Send } from "lucide-react";
import { SOCIALS } from "../data/portfolioData";
import { Reveal, Magnetic } from "./Navbar";

/* ------------------------------------------------------------------ */
/*  Mini 3D TorusKnot for Contact section                              */
/* ------------------------------------------------------------------ */
function Scene3DMini() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const geo = new THREE.TorusKnotGeometry(1.15, 0.32, 120, 12);
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo, 1),
      new THREE.LineBasicMaterial({ color: 0xf0679c, transparent: true, opacity: 0.5 })
    );
    scene.add(wire);

    let frameId;
    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.05 });
    io.observe(mount);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h || 1;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    const animate = () => {
      if (visible) {
        const t = clock.getElapsedTime();
        wire.rotation.y = t * 0.28;
        wire.rotation.x = t * 0.14;
        renderer.render(scene, camera);
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      io.disconnect();
      window.removeEventListener("resize", resize);
      geo.dispose();
      wire.material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="scene3d-mini" ref={mountRef} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/*  Contact Form & Info Section                                         */
/* ------------------------------------------------------------------ */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || "Let's work together");
    window.location.href = `mailto:tanmaypaliwal12345@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <Reveal className="section-head">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let's build something</h2>
      </Reveal>

      <Reveal delay={30}>
        <a href="mailto:tanmaypaliwal12345@gmail.com" className="contact-email">
          tanmaypaliwal12345@gmail.com
        </a>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-info" delay={70}>
          <p className="contact-lead">
            Have a project in mind, an opening on your team, or just want to
            say hello? My inbox is open.
          </p>
          <div className="info-item">
            <Phone size={15} />
            <a href="tel:+916260153962">+91 62601 53962</a>
          </div>
          <div className="info-item">
            <MapPin size={15} />
            <span>Indore, India</span>
          </div>
          <Scene3DMini />
        </Reveal>

        <Reveal as="form" className="contact-form" delay={110} onSubmit={handleSubmit}>
          <div className="form-row">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>
          <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange} required />
          <Magnetic as="button" type="submit" className="btn btn-primary">
            Send message <Send size={14} />
          </Magnetic>
          {sent && <p className="form-note">Opening your email client…</p>}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer Component                                                   */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        {SOCIALS.map(({ href, label, Icon }) => (
          <Magnetic
            as="a"
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
          >
            <Icon size={16} />
          </Magnetic>
        ))}
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Tanmay Paliwal. Built with React.</p>
    </footer>
  );
}

export default function Contact() {
  return (
    <>
      <ContactSection />
      <Footer />
    </>
  );
}
