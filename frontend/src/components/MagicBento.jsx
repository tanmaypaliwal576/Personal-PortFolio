import React, { useRef, useCallback } from "react";
import "../styles/MagicBento.css";

/**
 * MagicBento — a bento-style grid of tiles where each tile tracks the
 * cursor and reveals a soft radial glow + lit border at the pointer
 * position. Built to match the site's existing dark/teal theme (uses the
 * same CSS custom properties pattern as the rest of the site — swap the
 * --bento-accent value below if your teal accent hex changes).
 *
 * Props:
 *   items: [{ icon: LucideIconComponent, label: string, items: string[] }]
 */
export default function MagicBento({ items = [] }) {
  return (
    <div className="magic-bento-grid">
      {items.map((entry, i) => (
        <BentoCard key={entry.label} entry={entry} index={i} />
      ))}
    </div>
  );
}

function BentoCard({ entry, index }) {
  const cardRef = useRef(null);
  const Icon = entry.icon;

  const handlePointerMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }, []);

  const handlePointerLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  }, []);

  return (
    <div
      ref={cardRef}
      className="magic-bento-card"
      style={{ "--delay": `${index * 60}ms` }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="magic-bento-glow" aria-hidden="true" />
      <div className="magic-bento-border" aria-hidden="true" />
      <div className="magic-bento-content">
        <div className="magic-bento-icon">
          <Icon size={18} />
        </div>
        <p className="magic-bento-label">{entry.label}</p>
        <p className="magic-bento-items">{entry.items.join(", ")}</p>
      </div>
    </div>
  );
}
