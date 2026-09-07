import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { STATS } from "../data/portfolioData";
import { Magnetic } from "./Navbar";
import { Download, Mail, ArrowUpRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Count-Up Hook                                                       */
/* ------------------------------------------------------------------ */
function useCountUp(target, duration = 1300) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

/* ------------------------------------------------------------------ */
/*  3D wireframe — Three.js object sitting behind the hero             */
/* ------------------------------------------------------------------ */
function Scene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6.4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const geoOuter = new THREE.IcosahedronGeometry(2.35, 0);
    const wireOuter = new THREE.LineSegments(
      new THREE.EdgesGeometry(geoOuter),
      new THREE.LineBasicMaterial({ color: 0x4fd6c8, transparent: true, opacity: 0.55 })
    );
    const geoInner = new THREE.IcosahedronGeometry(1.5, 1);
    const wireInner = new THREE.LineSegments(
      new THREE.EdgesGeometry(geoInner),
      new THREE.LineBasicMaterial({ color: 0xf0679c, transparent: true, opacity: 0.4 })
    );
    group.add(wireOuter, wireInner);
    scene.add(group);

    let frameId;
    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    };
    window.addEventListener("mousemove", onMove);

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
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.16 + mouseX * 0.6;
      group.rotation.x = t * 0.09 + mouseY * 0.4;
      wireInner.rotation.y = -t * 0.22;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      geoOuter.dispose();
      geoInner.dispose();
      wireOuter.material.dispose();
      wireInner.material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="scene3d" ref={mountRef} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/*  Constellation Animation                                             */
/* ------------------------------------------------------------------ */
const NODES = [
  { id: "n1", x: 60, y: 70, r: 5, label: "React" },
  { id: "n2", x: 210, y: 40, r: 4, label: "Node.js" },
  { id: "n3", x: 320, y: 130, r: 6, label: "MongoDB" },
  { id: "n4", x: 150, y: 190, r: 4, label: "Express" },
  { id: "n5", x: 280, y: 250, r: 4, label: "Git" },
  { id: "n6", x: 40, y: 260, r: 4, label: "C++" },
  { id: "n7", x: 360, y: 300, r: 5, label: "DSA" },
];

const LINKS = [
  ["n1", "n2"], ["n2", "n3"], ["n1", "n4"], ["n4", "n3"],
  ["n4", "n6"], ["n4", "n5"], ["n5", "n7"], ["n3", "n7"], ["n2", "n4"],
];

function Constellation() {
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const nodeById = useMemo(() => Object.fromEntries(NODES.map((n) => [n.id, n])), []);

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * -14, y: py * -10 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="constellation-wrap"
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <svg
        viewBox="0 0 400 340"
        className="constellation"
        style={{ transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)` }}
      >
        <g className="const-lines">
          {LINKS.map(([a, b], i) => {
            const na = nodeById[a];
            const nb = nodeById[b];
            return (
              <line
                key={i}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                className="const-line"
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              />
            );
          })}
        </g>
        <g className="const-nodes">
          {NODES.map((n, i) => (
            <g
              key={n.id}
              className="const-node"
              style={{ animationDelay: `${0.5 + i * 0.09}s`, ["--fx"]: `${(i % 2 ? 1 : -1) * (6 + i)}px`, ["--fdur"]: `${6 + i}s` }}
            >
              <circle cx={n.x} cy={n.y} r={n.r + 7} className="const-node-halo" />
              <circle cx={n.x} cy={n.y} r={n.r} className="const-node-core" />
              <text x={n.x} y={n.y - n.r - 10} textAnchor="middle" className="const-node-label">
                {n.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function StatBlock({ stat }) {
  const count = useCountUp(stat.isText ? 0 : stat.value);
  return (
    <div className="stat-block">
      <p className="stat-value">
        {stat.isText ? stat.suffix : `${stat.value % 1 === 0 ? Math.round(count) : count.toFixed(1)}${stat.suffix}`}
      </p>
      <p className="stat-label">{stat.label}</p>
    </div>
  );
}

function KickerReveal({ text }) {
  const words = text.split(" ");
  return (
    <p className="kicker">
      {words.map((w, i) => (
        <span className="kicker-word" key={i} style={{ animationDelay: `${i * 70}ms` }}>
          {w}&nbsp;
        </span>
      ))}
    </p>
  );
}

function SplitText({ text, as: Tag = "span", className = "", baseDelay = 0, step = 28 }) {
  return (
    <Tag className={`split-text ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          className="split-char"
          key={i}
          style={{ animationDelay: `${baseDelay + i * step}ms` }}
          aria-hidden="true"
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </Tag>
  );
}

function Ticker() {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];
  const trackRef = useRef(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let speed = 1;
    let raf;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastY);
      lastY = y;
      speed = Math.min(1 + delta * 0.045, 4.5);
    };
    const decay = () => {
      speed += (1 - speed) * 0.05;
      if (trackRef.current) {
        trackRef.current.style.animationDuration = `${30 / speed}s`;
      }
      raf = requestAnimationFrame(decay);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(decay);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="ticker">
      <div className="ticker-track" ref={trackRef}>
        {loop.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item}
            <span className="ticker-mark">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero({ onNavigate }) {
  return (
    <>
      <section id="hero" className="section hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <KickerReveal text="A developer's field notes" />
            <h1 className="hero-name">
              <SplitText text="Tanmay Paliwal" baseDelay={120} />
            </h1>
            <h2 className="hero-role">Full-stack web developer, building at the meeting point of design and logic.</h2>
            <p className="hero-bio">
              Aspiring software engineer with a strong foundation in MERN
              development, data analytics and problem-solving. B.Tech
              Computer Science student in Indore, currently open to new
              opportunities.
            </p>
            <div className="hero-actions">
              <Magnetic className="btn btn-primary" onClick={() => onNavigate("work")}>
                <span>See the work</span>
                <ArrowUpRight size={16} className="btn-icon" />
              </Magnetic>
              <Magnetic className="btn btn-ghost" onClick={() => onNavigate("contact")}>
                <Mail size={16} className="btn-icon" />
                <span>Get in touch</span>
              </Magnetic>
              <Magnetic
                as="a"
                href="/Resume.pdf"
                download="Tanmay_Paliwal_Resume.pdf"
                className="btn btn-resume"
              >
                <Download size={16} className="btn-icon" />
                <span>Download Resume</span>
              </Magnetic>
            </div>
          </div>

          <div className="hero-visual">
            <Scene3D />
            <Constellation />
          </div>
        </div>

        <div className="stats-row">
          {STATS.map((s) => (
            <StatBlock key={s.label} stat={s} />
          ))}
        </div>
      </section>

    </>
  );
}
