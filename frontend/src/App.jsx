import React, { useEffect, useState, useCallback, useRef } from "react";
import * as THREE from "three";
import { ArrowUp } from "lucide-react";
import { NAV_ITEMS } from "./data/portfolioData";
import Navbar, { Magnetic } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./styles/portfolio.css";

/* ------------------------------------------------------------------ */
/*  Ambient glow + grain + background canvas                            */
/* ------------------------------------------------------------------ */
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      curX += (x - curX) * 0.07;
      curY += (y - curY) * 0.07;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${curX - 340}px, ${curY - 340}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div className="cursor-glow" ref={ref} aria-hidden="true" />;
}

function Grain() {
  return (
    <svg className="grain" aria-hidden="true">
      <filter id="grainFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grainFilter)" />
    </svg>
  );
}

function ParticleField() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    mount.appendChild(renderer.domElement);

    const COUNT = 260;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const materialA = new THREE.PointsMaterial({ color: 0x4fd6c8, size: 0.05, transparent: true, opacity: 0.55 });
    const materialB = new THREE.PointsMaterial({ color: 0xf0679c, size: 0.045, transparent: true, opacity: 0.45 });
    const pointsA = new THREE.Points(geometry, materialA);
    const geometryB = geometry.clone();
    const pointsB = new THREE.Points(geometryB, materialB);
    pointsB.rotation.z = 0.6;
    scene.add(pointsA, pointsB);

    let frameId;
    let scrollFrac = 0;
    const updateScroll = () => {
      const root = document.querySelector(".portfolio-root");
      if (root) {
        const rect = root.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight || 800;
        const scrollable = rect.height - vh;
        scrollFrac = scrollable > 0 ? Math.min(Math.max(-rect.top / scrollable, 0), 1) : 0;
      }
    };

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
      updateScroll();
      const t = clock.getElapsedTime();
      pointsA.rotation.y = t * 0.015 + scrollFrac * 0.8;
      pointsB.rotation.y = -t * 0.01 - scrollFrac * 0.5;
      camera.position.y = -scrollFrac * 2.4;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      geometryB.dispose();
      materialA.dispose();
      materialB.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="particle-field" ref={mountRef} aria-hidden="true" />;
}

function CustomCursor() {
  const ringRef = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;
    let raf;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;
    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    const onOver = (e) => setActive(!!e.target.closest("a, button, input, textarea"));
    const loop = () => {
      curX += (x - curX) * 0.18;
      curY += (y - curY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div className={`cursor-ring ${active ? "is-active" : ""}`} ref={ringRef} aria-hidden="true" />;
}

function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    let raf;
    const update = () => {
      const root = document.querySelector(".portfolio-root");
      if (root) {
        const rect = root.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight || 800;
        const scrollable = rect.height - vh;
        const pct = scrollable > 0 ? Math.min(Math.max(-rect.top / scrollable, 0), 1) : 0;
        if (barRef.current) barRef.current.style.transform = `scaleX(${pct})`;
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <div className="scroll-progress" ref={barRef} style={{ width: "100%", transform: "scaleX(0)" }} aria-hidden="true" />;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let raf;
    const update = () => {
      const root = document.querySelector(".portfolio-root");
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      if (root) {
        const rect = root.getBoundingClientRect();
        setVisible(-rect.top > vh * 0.8);
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);
  const scrollToTop = () => {
    const root = document.querySelector(".portfolio-root");
    if (root && root.scrollIntoView) {
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <Magnetic
      as="button"
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </Magnetic>
  );
}

/* ------------------------------------------------------------------ */
/*  Main App                                                            */
/* ------------------------------------------------------------------ */
export default function App() {
  const [active, setActive] = useState("hero");

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="portfolio-root">
      <ScrollProgress />
      <ParticleField />
      <Grain />
      <div className="ambient" aria-hidden="true" />
      <CursorGlow />
      <CustomCursor />
      <Navbar active={active} onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <BackToTop />
    </div>
  );
}