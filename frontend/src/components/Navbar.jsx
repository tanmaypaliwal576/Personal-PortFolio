import React, { useRef, useEffect, useState } from "react";
import { NAV_ITEMS, SOCIALS } from "../data/portfolioData";

/* ------------------------------------------------------------------ */
/*  Magnetic button — subtle cursor-pull micro-interaction              */
/* ------------------------------------------------------------------ */
export function Magnetic({ as: Tag = "button", className = "", children, ...rest }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${mx * 0.24}px, ${my * 0.32}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };
  return (
    <Tag ref={ref} className={`magnetic ${className}`} onMouseMove={handleMove} onMouseLeave={reset} {...rest}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal wipe component                                               */
/* ------------------------------------------------------------------ */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    let raf;
    let alive = true;
    const check = () => {
      if (!alive) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      if (rect.top < vh * 0.94 && rect.bottom > 0) {
        setShown(true);
        return;
      }
      raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`wipe ${shown ? "wipe-in" : "wipe-pending"} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Side rail & Topbar navigation                                      */
/* ------------------------------------------------------------------ */
export default function Navbar({ active, onNavigate }) {
  return (
    <>
      <aside className="rail">
        <a href="#hero" className="rail-mark" onClick={(e) => { e.preventDefault(); onNavigate("hero"); }} aria-label="Back to top">
          TP
        </a>
        <nav className="rail-nav" aria-label="Section navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`rail-item ${active === item.id ? "active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="rail-dot" />
              <span className="rail-tip">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="rail-socials">
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
      </aside>

      <nav className="topbar" aria-label="Section navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`topbar-item ${active === item.id ? "active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
