import { useState } from "react";

const links = [
  ["About", `${import.meta.env.BASE_URL}#about`],
  ["Research", `${import.meta.env.BASE_URL}#research`],
  ["Publications", `${import.meta.env.BASE_URL}#publications`],
  ["Talks", `${import.meta.env.BASE_URL}#talks`],
  ["Awards", `${import.meta.env.BASE_URL}#awards`],
  // ["Writing", "#writing"],
];

export default function GlassNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav" aria-label="Main navigation">
      <a className="nav-mark" href={`${import.meta.env.BASE_URL}#top`} aria-label="Back to top">Iván G M</a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span></span><span></span>
      </button>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="mailto:ivan.garcia@cimat.mx" onClick={() => setOpen(false)}>Contact me ↗</a>
      </div>
    </nav>
  );
}
